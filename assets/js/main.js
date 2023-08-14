//GEBI
function g(e){
    let o = document.getElementById(e);
    if(o){
        return document.getElementById(e);
    }else{
        return undefined;
    }
}

//global
const welcomeMsg = ["Welcome!", "Hello there!", "Greetings!", "Salutations!", "Nice to see ya!", "Glad you could make it!", "Enjoy!", "Have a good time!", "Hope you have a good time!"];

let randArticle = Math.round(Math.random() * articles.length);
let settingsOpen = 0;

//stage1
let article_S1 = g('article-stage1');
let topbar_S1 = g('topbar-stage1');
let body_S1 = g('body-stage1');
let art1 = g('art1');
let art2 = g('art2');
let art3 = g('art3');

//stage2
var sSw = g('settingsSwitch');
var sSb = g('settingSidebar');
var sCon = g('settingsContainer');
var info = g('infoSVG');
var exitInfo = g('exitInfo');
var infoPopup = g('infoContainer');

//other
let infoOpen = false;
let settingsOpen = 0;

//util
let s1 = g('s1');
let s2 = g('s2');
let currentS = 1;

if(randArticle < 3){
    article_S1.innerHTML = articles[randArticle];
}else{
    article_S1.innerHTML = articles.length;
};

function swapStage(){ 
    if(currentS === 1){
        s1.style.display = "none";
        s2.style.display = "flex";
        currentS++;
    }else{
        s1.style.display = "flex";
        s2.style.display = "none";
        currentS = 1;
    };
};
//event listener
document.addEventListener("keydown", (event) => {
    if(event.keyCode === 81 && event.ctrlKey){
        swapStage();
    };
});
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
    };
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
    };
    infoPopup.style.display = "flex";
    infoOpen = true;
};

exitInfo.onclick = () => {
    infoPopup.style.display = "none";
    infoOpen = false;
}