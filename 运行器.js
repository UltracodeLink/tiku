const PYODIDE_VERSION = "0.29.5";
const PYODIDE_INDEX = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
const PYODIDE_MODULE = `${PYODIDE_INDEX}pyodide.mjs`;
const BROWSERCC_MODULE = "https://cdn.jsdelivr.net/npm/browsercc@0.1.1/dist/index.js";
const WASI_MODULE = "https://cdn.jsdelivr.net/npm/@bjorn3/browser_wasi_shim@0.4.2/dist/index.js";
const OUTPUT_LIMIT = 32768;

let pyodidePromise;

function send(id, type, data = {}) {
  self.postMessage({ id, type, ...data });
}

async function getPyodide(id) {
  if (!pyodidePromise) {
    send(id, "phase", { phase: "loading", text: "正在加载 Python 运行环境（首次加载需要下载资源）…" });
    pyodidePromise = import(PYODIDE_MODULE)
      .then(({ loadPyodide }) => loadPyodide({ indexURL: PYODIDE_INDEX }));
  }
  return pyodidePromise;
}

async function runPython({ id, source, stdin }) {
  const pyodide = await getPyodide(id);
  pyodide.globals.set("_solution_source", source);
  pyodide.globals.set("_solution_stdin", stdin);
  send(id, "phase", { phase: "running", text: "Python 程序运行中…" });

  const blockedGlobals = [
    "fetch", "XMLHttpRequest", "WebSocket", "EventSource", "WebTransport",
    "Worker", "SharedWorker", "BroadcastChannel", "importScripts"
  ];
  const savedGlobals = new Map(blockedGlobals.map((name) => [name, self[name]]));
  blockedGlobals.forEach((name) => { self[name] = undefined; });

  try {
    pyodide.runPython(`
import contextlib, io, sys, traceback
class _BoundedOutput:
    def __init__(self):
        self.parts = []
        self.length = 0
        self.truncated = False
    def write(self, text):
        available = 32768 - self.length
        if available > 0:
            kept = text[:available]
            self.parts.append(kept)
            self.length += len(kept)
        if len(text) > available:
            self.truncated = True
        return len(text)
    def getvalue(self):
        value = "".join(self.parts)
        return value + ("\\n[输出已截断]" if self.truncated else "")
    def flush(self):
        pass
_solution_out = _BoundedOutput()
_solution_err = _BoundedOutput()
_solution_failed = False
sys.stdin = io.StringIO(_solution_stdin)
try:
    with contextlib.redirect_stdout(_solution_out), contextlib.redirect_stderr(_solution_err):
        exec(compile(_solution_source, "<solution>", "exec"), {"__name__": "__main__"})
except BaseException:
    _solution_failed = True
    _solution_err.write(traceback.format_exc())
finally:
    sys.stdin = sys.__stdin__
`);
    const result = pyodide.runPython(
      "(_solution_out.getvalue(), _solution_err.getvalue(), _solution_failed)"
    );
    const [stdout, stderr, failed] = result.toJs();
    result.destroy();
    send(id, "result", {
      stdout,
      stderr,
      exitCode: failed ? 1 : 0
    });
  } finally {
    blockedGlobals.forEach((name) => { self[name] = savedGlobals.get(name); });
  }
}

async function runCpp({ id, source, stdin }, setFailurePhase) {
  send(id, "phase", { phase: "compiling", text: "正在加载 C++ 编译器并编译（首次使用需下载约 20 MB 工具资源）…" });
  setFailurePhase("compile");
  const [{ compile }, { WASI, File, OpenFile }] = await Promise.all([
    import(BROWSERCC_MODULE),
    import(WASI_MODULE)
  ]);
  class LimitedOutputFile extends OpenFile {
    constructor(file) {
      super(file);
      this.remaining = OUTPUT_LIMIT;
      this.truncated = false;
    }

    fd_write(data) {
      const accepted = data.subarray(0, this.remaining);
      if (accepted.length < data.length) this.truncated = true;
      this.remaining -= accepted.length;
      super.fd_write(accepted);
      return { ret: 0, nwritten: data.length };
    }
  }

  const compilation = await compile({
    source,
    fileName: "main.cpp",
    flags: ["-std=c++17", "-O0", "-fno-exceptions"]
  });
  if (!compilation.module) {
    send(id, "error", { phase: "compile", output: compilation.compileOutput || "编译失败。" });
    return;
  }

  setFailurePhase("runtime");
  const stdoutFile = new File(new Uint8Array());
  const stderrFile = new File(new Uint8Array());
  const stdoutFd = new LimitedOutputFile(stdoutFile);
  const stderrFd = new LimitedOutputFile(stderrFile);
  const wasi = new WASI(
    ["main.wasm"],
    [],
    [
      new OpenFile(new File(new TextEncoder().encode(stdin))),
      stdoutFd,
      stderrFd
    ]
  );
  const instance = await WebAssembly.instantiate(compilation.module, {
    wasi_snapshot_preview1: wasi.wasiImport
  });
  send(id, "phase", { phase: "running", text: "C++ 程序运行中…" });
  const exitCode = wasi.start(instance);
  const decoder = new TextDecoder();
  const stdout = decoder.decode(stdoutFile.data);
  const stderr = decoder.decode(stderrFile.data);
  send(id, "result", {
    stdout: stdoutFd.truncated ? `${stdout}\n[输出已截断]` : stdout,
    stderr: stderrFd.truncated ? `${stderr}\n[输出已截断]` : stderr,
    exitCode
  });
}

self.addEventListener("message", async ({ data }) => {
  let failurePhase = "runtime";
  try {
    if (data.language === "python") {
      await runPython(data);
    } else if (data.language === "cpp") {
      await runCpp(data, (phase) => { failurePhase = phase; });
    } else {
      throw new Error("不支持的编程语言。");
    }
  } catch (error) {
    send(data.id, "error", {
      phase: failurePhase,
      error: String(error),
      output: error?.stack || String(error)
    });
  }
});
