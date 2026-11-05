document.querySelectorAll(".solution:not(.output-check)").forEach((solution) => {
  const language = solution.querySelector(".language-select");
  const editor = solution.querySelector(".code-editor");
  const filename = solution.querySelector(".file-name");
  const status = solution.querySelector(".editor-status");

  function updateLanguage() {
    filename.textContent = language.value === "python" ? "main.py" : "main.cpp";
    status.textContent = editor.value.trim()
      ? "已切换语言，当前代码已保留；请确认代码符合所选语言。"
      : "";
  }

  language.addEventListener("change", updateLanguage);
  solution.querySelector(".reset-code").addEventListener("click", () => {
    editor.value = "";
    status.textContent = "代码已清空。";
    editor.focus();
  });
});

document.querySelectorAll(".output-check").forEach((check) => {
  const sampleSelect = check.querySelector(".sample-select");
  const sampleInput = check.querySelector(".sample-input pre");
  const output = check.querySelector(".program-output");
  const status = check.querySelector(".compare-status");
  const cases = Array.from(check.querySelectorAll(".sample-case"));

  function showSample() {
    const sample = cases[Number(sampleSelect.value)];
    sampleInput.textContent = sample.dataset.input || "（本题无输入）";
    output.value = "";
    status.textContent = "";
    status.className = "compare-status";
  }

  sampleSelect.addEventListener("change", showSample);
  check.querySelector(".compare-output").addEventListener("click", () => {
    if (!output.value.trim()) {
      status.textContent = "请先填写程序输出。";
      status.className = "compare-status incorrect";
      return;
    }
    const sample = cases[Number(sampleSelect.value)];
    const normalize = (value) => value.replace(/\r\n?/g, "\n").trimEnd();
    const matches = normalize(output.value) === normalize(sample.content.textContent);
    status.textContent = matches ? "样例输出正确。" : "输出不一致，请检查结果、空格和换行。";
    status.className = `compare-status ${matches ? "correct" : "incorrect"}`;
  });
  showSample();
});
