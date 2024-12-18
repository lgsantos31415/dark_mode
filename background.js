chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("https://www.buildyourownlisp.com/")
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: darkMode,
    });
  }
});

function darkMode() {
  const colors = {
    bg: "#000",
    co: "#fff",
    sub: "#c1c1c1",
    bg2: "#242424",
    a: "#a2a2a2",
  };

  document.body.style.background = colors.bg;
  document.body.style.color = colors.co;

  let a = document.body.querySelectorAll("a");
  a.forEach((a) => {
    if (a.parentElement.outerHTML.includes("h3")) {
      a.style.color = colors.co;
    } else {
      a.style.color = colors.a;
    }
  });

  let button = document.body.querySelectorAll("button");
  button.forEach((button) => {
    button.style.background = colors.bg2;
    button.style.border = "none";
  });

  let alert_warning = document.body.querySelectorAll(".alert-warning");
  alert_warning.forEach((div) => {
    div.style.background = colors.bg2;
    div.style.border = "none";
    div.style.color = colors.sub;

    let kids = Array.from(div.children);

    kids.forEach((tag) => {
      let grandSon = Array.from(tag.children);
      if (grandSon.some((tag) => tag.tagName === "STRONG")) {
        grandSon.forEach((tag) => {
          if (tag.tagName === "STRONG") tag.style.color = colors.co;
        });
      }
    });
  });

  let small = document.body.querySelectorAll("small");
  small.forEach((small) => (small.style.color = colors.sub));

  let code = document.body.querySelectorAll("code");
  code.forEach((code) => {
    code.style.background = colors.bg2;
    code.style.color = colors.co;
  });

  let pre = document.body.querySelectorAll("pre");
  pre.forEach((pre) => {
    pre.style.background = colors.bg2;
    pre.style.color = colors.co;
    pre.style.border = `1px solid ${colors.a}`;
  });

  let preprocessor = document.body.querySelectorAll(".preprocessor");
  preprocessor.forEach((tag) => (tag.style.color = colors.co));

  let type = document.body.querySelectorAll(".type");
  type.forEach((tag) => (tag.style.color = colors.co));

  let operator = document.body.querySelectorAll(".operator");
  operator.forEach((tag) => (tag.style.color = colors.sub));

  let keyword = document.body.querySelectorAll(".keyword");
  keyword.forEach((tag) => (tag.style.color = colors.sub));

  let constant = document.body.querySelectorAll(".constant");
  constant.forEach((tag) => (tag.style.color = colors.sub));
}
