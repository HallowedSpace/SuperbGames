//GEBI
function g(e){
    let o = document.getElementById(e);
    if(o){
        return document.getElementById(e);
    }else{
        return undefined;
    }
}
//elements
var sSw = g('settingsSwitch');
var sSb = g('settingSidebar');
var sCon = g('settingsContainer');
var info = g('infoSVG');
var exitInfo = g('exitInfo');
var infoPopup = g('infoContainer');

//other
let infoOpen = false;
let settingsOpen = 0;

//settings button
sSw.onclick = () => {
    if (settingsOpen === 0) {
      document.querySelector('body').style.overflow = "hidden";
      sSw.style.transform = "rotate(360deg)";
      sSw.style.marginLeft = "calc(100% - 60px)";
      sSb.style.width = "100%";
      sCon.style.opacity = 1;
      settingsOpen++;
    } else {
        document.querySelector('body').style.overflow = "visible";
        sSw.style.transform = "rotate(0deg)";
        sSw.style.marginLeft = "0";
        sSb.style.width = "0";
        sCon.style.opacity = 0;
        settingsOpen = 0;
    }
  };
//info button
info.onclick = () => {
    if(settingsOpen = 1){
        document.querySelector('body').style.overflow = "visible";
        sSw.style.transform = "rotate(0deg)";
        sSw.style.marginLeft = "0";
        sSb.style.width = "0";
        sCon.style.opacity = 0;
        settingsOpen = 0;
    }
    infoPopup.style.display = "flex";
    infoOpen = true;
}

exitInfo.onclick = () => {
    infoPopup.style.display = "none";
    infoOpen = false;
}