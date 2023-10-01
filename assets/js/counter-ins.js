//dont really know the point of this script but it is to prevent de_/vtools
function detectIns(allow) {
    if(isNaN(+allow)) allow = 100;
    var start = +new Date();
    debugger;
    var end = +new Date();
    if(isNaN(start) || isNaN(end) || end - start > allow) {
      document.querySelector("html").remove();
      location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0");
    }
  }
  if(window.attachEvent) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        detectIns();
      window.attachEvent('onresize', detectIns);
      window.attachEvent('onmousemove', detectIns);
      window.attachEvent('onfocus', detectIns);
      window.attachEvent('onblur', detectIns);
    } else {
        setTimeout(argument.callee, 0);
    }
  } else {
    window.addEventListener('load', detectIns);
    window.addEventListener('resize', detectIns);
    window.addEventListener('mousemove', detectIns);
    window.addEventListener('focus', detectIns);
    window.addEventListener('blur', detectIns);
  }
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};