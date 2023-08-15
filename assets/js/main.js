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
let body = document.body;
//theme
let theme = parseInt(localStorage.getItem("theme"));
let theme1 = g('theme1');
let theme2 = g('theme2');
let theme3 = g('theme3');
let theme4 = g('theme4');
let theme5 = g('theme5');
if(theme === NaN){
    theme = 1;
    body.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
    
}

function swapStage(){ 
    if(currentS === 1){
        s1.style.display = "none";
        s2.style.display = "flex";
        currentS++;
        if(theme === 1){
            body.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
            theme1.classList.add("selectedTheme");
        }else{
            if (theme === 2) {
                body.style.background =  "linear-gradient(124deg, rgba(9,250,41,1) 0%, rgba(19,207,154,1) 33%, rgba(20,132,227,1) 93%)";
                theme2.classList.add("selectedTheme");
            } else {
                if (theme === 3) {
                    theme3.classList.add("selectedTheme");
                    body.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
                }else {
                    if (theme === 4) {
                        theme4.classList.add("selectedTheme");
                        body.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
                    } else {
                        if (theme === 5) {
                            theme5.classList.add("selectedTheme");
                            body.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
                        }
                    }
                };
            };
        };
    }else{
        body.style.background = "white";
        s1.style.display = "flex";
        s2.style.display = "none";
        currentS = 1;
    };
};
theme1.onclick = () => {
    if(localStorage.getItem("theme") === NaN){
    }else{
    document.querySelector(".selectedTheme").classList.remove("selectedTheme");
    };
    theme1.classList.add("selectedTheme");
    localStorage.setItem("theme", 1);
    body.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
    theme = 1;
}
theme2.onclick = () => {
    if(localStorage.getItem("theme") === NaN){
    }else{
    document.querySelector(".selectedTheme").classList.remove("selectedTheme");
    };
    theme2.classList.add("selectedTheme");
    localStorage.setItem("theme", 2);
    body.style.background =  "linear-gradient(124deg, rgba(9,250,41,1) 0%, rgba(19,207,154,1) 33%, rgba(20,132,227,1) 93%)";
    theme = 2;
}
theme3.onclick = () => {
    if(localStorage.getItem("theme") === NaN){

    }else{
    document.querySelector(".selectedTheme").classList.remove("selectedTheme");
    };
    theme3.classList.add("selectedTheme");
    localStorage.setItem("theme", 3);
    body.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
    theme = 3;
}
theme4.onclick = () => {
    if(localStorage.getItem("theme") === NaN){

    }else{
    document.querySelector(".selectedTheme").classList.remove("selectedTheme");
    }
    theme4.classList.add("selectedTheme");
    localStorage.setItem("theme", 4);
    body.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
    theme = 4;
}
theme5.onclick = () => {
    if(localStorage.getItem("theme") === NaN){

    }else{
    document.querySelector(".selectedTheme").classList.remove("selectedTheme");
    }
    theme5.classList.add("selectedTheme");
    localStorage.setItem("theme", 5);
    body.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
    theme = 5;
}

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