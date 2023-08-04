//GEBI
function g(e){
    let o = document.getElementById(e);
    if(o){
        return document.getElementById(e);
    }else{
        return undefined;
    }
}
var sSw = g('settingsSwitch');
var sSb = g('settingSidebar');
let settingsOpen = 0;
sSw.onclick = function () {
    if (settingsOpen === 0) {
      document.querySelector('body').style.overflow = "hidden";
      sSw.style.transform = "rotate(360deg)";
      sSw.style.marginLeft = "calc(100% - 50px)";
      sSb.style.width = "100%";
      settingsOpen++;
    } else {
        document.querySelector('body').style.overflow = "visible";
        sSw.style.transform = "rotate(0deg)";
        sSw.style.marginLeft = "0";
        sSb.style.width = "0";
        settingsOpen = 0;
    }
  };