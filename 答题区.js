document.querySelectorAll(".solution:not(.run-result)").forEach((solution) => {
  const language = solution.querySelector(".language-select");
  const editor = solution.querySelector(".code-editor");
  const filename = solution.querySelector(".file-name");
  const status = solution.querySelector(".editor-status");
  const runButton = solution.querySelector(".run-code");
  const result = document.querySelector(".run-result");
  const sampleSelect = result.querySelector(".sample-select");
  const sampleInput = result.querySelector(".sample-input pre");
  const output = result.querySelector(".program-output");
  const resultStatus = result.querySelector(".compare-status");
  const cases = Array.from(result.querySelectorAll(".sample-case"));
  let worker = null;
  let timeout = null;
  let runId = 0;

  function updateLanguage() {
    filename.textContent = language.value === "python" ? "main.py" : "main.cpp";
    status.textContent = editor.value.trim()
      ? "已切换语言，当前代码已保留；请确认代码符合所选语言。"
      : "";
    output.textContent = "点击“运行并评测”查看输出。";
    resultStatus.textContent = "";
    resultStatus.className = "compare-status";
  }

  function showSample() {
    const sample = cases[Number(sampleSelect.value)];
    sampleInput.textContent = sample.dataset.input || "（本题无输入）";
    output.textContent = "点击“运行并评测”查看输出。";
    resultStatus.textContent = "";
    resultStatus.className = "compare-status";
  }

  function stopWorker() {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (worker) {
      worker.terminate();
      worker = null;
    }
  }

  function finish(message, isError) {
    runButton.disabled = false;
    language.disabled = false;
    sampleSelect.disabled = false;
    runButton.textContent = "运行并评测";
    status.textContent = "";
    if (message) {
      resultStatus.textContent = message;
      resultStatus.className = `compare-status ${isError ? "incorrect" : ""}`;
    }
  }

  function ensureWorker() {
    if (worker) return worker;

    try {
      worker = new Worker("运行器.js", { type: "module" });
    } catch (error) {
      output.textContent = String(error);
      finish("请通过 HTTP/HTTPS 打开题目页面后再运行。", true);
      return null;
    }
    worker.addEventListener("message", (event) => {
      const message = event.data;
      if (message.id !== runId) return;

      if (message.type === "phase") {
        const compilingCpp = language.value === "cpp" &&
          (message.phase === "loading" || message.phase === "compiling");
        const duration = compilingCpp ? 300000 : message.phase === "running" ? 8000 : 90000;
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() => {
          stopWorker();
          output.textContent = "运行已超时，已停止程序。";
          finish("程序运行超时。", true);
        }, duration);
        status.textContent = message.text;
        return;
      }

      if (message.type === "error") {
        stopWorker();
        output.textContent = message.output || message.error;
        finish(message.phase === "compile" ? "编译失败，请检查代码和编译信息。" : "程序运行失败。", true);
        return;
      }

      if (message.type === "result") {
        if (timeout !== null) clearTimeout(timeout);
        timeout = null;
        output.textContent = [message.stdout, message.stderr ? `标准错误：\n${message.stderr}` : ""]
          .filter(Boolean)
          .join("\n") || "（程序没有输出）";
        const sample = cases[Number(sampleSelect.value)];
        const normalize = (value) => value.replace(/\r\n?/g, "\n").trimEnd();
        const matches = message.exitCode === 0 &&
          normalize(message.stdout) === normalize(sample.content.textContent);
        finish(matches ? "样例输出正确。" : "输出与样例不一致，请检查结果、空格和换行。", !matches);
      }
    });
    worker.addEventListener("error", (event) => {
      stopWorker();
      output.textContent = event.message || "运行器加载失败。";
      finish("运行器启动失败，请确认使用 HTTP/HTTPS 打开页面并检查网络连接。", true);
    });
    return worker;
  }

  language.addEventListener("change", updateLanguage);
  sampleSelect.addEventListener("change", showSample);
  solution.querySelector(".reset-code").addEventListener("click", () => {
    editor.value = "";
    status.textContent = "代码已清空。";
    output.textContent = "点击“运行并评测”查看输出。";
    resultStatus.textContent = "";
    editor.focus();
  });

  runButton.addEventListener("click", () => {
    const source = editor.value;
    if (!source.trim()) {
      status.textContent = "请先编写代码。";
      editor.focus();
      return;
    }
    if (source.length > 100000) {
      status.textContent = "代码过长，请控制在 100,000 个字符以内。";
      return;
    }

    const sample = cases[Number(sampleSelect.value)];
    runId += 1;
    runButton.disabled = true;
    language.disabled = true;
    sampleSelect.disabled = true;
    runButton.textContent = "运行中…";
    status.textContent = "正在启动浏览器运行环境…";
    output.textContent = "";
    resultStatus.textContent = "";
    resultStatus.className = "compare-status";
    const runner = ensureWorker();
    if (!runner) return;
    runner.postMessage({
      id: runId,
      language: language.value,
      source,
      stdin: sample.dataset.input || ""
    });
  });

  showSample();
  window.addEventListener("beforeunload", stopWorker, { once: true });
});
