//GEBI
function g(e){
    let o = document.getElementById(e);
    if(o){
        return document.getElementById(e);
    }else{
        return undefined;
    }
}
//functions
function stage2Variables(){
    window.sSwitch = g('settingsSwitch');
    window.s_sBar = g('settingsSidebar');
}
function stage2(){ 
    try {
        document.body.innerHTML = ``;
        stage2Variables();
        return true;  
    } catch (e) {
        return false;
        console.log(e);
    }
}
//variables
//global
const welcomeMsg = ["Welcome!", "Hello there!", "Greetings!", "Salutations!", "Nice to see ya!", "Glad you could make it!", "Enjoy!", "Have a good time!", "Hope you have a good time!"];
let settingsOpen = 0;
//stage1
let article_S1 = g('article-stage1');
let topbar_S1 = g('topbar-stage1');
let body_S1 = g('body-stage1');
//stage 2


//event listener
document.addEventListener("keydown", (event) => {
    if(event.keyCode === 81 && event.ctrlKey){
        window.stage2 = stage2();
        console.log(window.stage2)
    }
})