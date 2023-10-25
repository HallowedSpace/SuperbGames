// hi welcome to my script it may be garbage but i am stupid so ignore 
//anyway i added comments so you know the method to my madness
console.log(`%cHello and welcome to the console!`, "color:blue; padding: 10px; background: black; font-size: 30px; border-radius: 15px;");
console.log(`%cIf you understand what you are doing, come work with us here at "https://discord.gg/ubACu5WEMy".`, "color:green; padding: 20px; background: black; font-size: 30px; border-radius: 15px;");

//GEBI (get element by id)
function g(e){
    let o = document.getElementById(e);
    if(o){
        return document.getElementById(e);
    }else{
        return undefined;
    }
}
//qs(a) (query selector (all))
function q(e, z) {
    if(z){
        let o = document.querySelectorAll(e);
        if(o){
            return document.querySelectorAll(e);
        }else{
            return undefined;
        }
    }else{
        let o = document.querySelector(e);
        if(o){
            return document.querySelector(e);
        }else{
            return undefined;
        }
    }
}
//text replace function ty stack overflow <3
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

//gUrl Tree (dont hate pls)
const gUrlTree = {
    slope: ["aHR0cHM6Ly9pbWFnZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zazFieC9XZWJTdGFydGVya2l0QDI3MTk3ZDY4NTUwMjk1MzA2NWUzYTMyNTliNmUzNGY1YWNiOTRlNjUvc3JjL3NwMS41LnhtbA=="],
    googlebaseball: ["aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9sb2dvcy8yMDE5L2p1bHk0dGgxOS9yMy9qdWx5NHRoMTkuaHRtbA=="],
    deathrun3d: ["aHR0cHM6Ly9pbWFnZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zazFieC92ZXJzaW9uQDkzZjdmNjBiMGYwNTRjOTU2Y2E5YjY2MjJmMmRhZWVlYjQ1MDYzMmMvZGVhdGhfcnVuLnhtbA=="],
    run3: ["aHR0cHM6Ly9sZWt1Zy5naXRodWIuaW8vdG42cFM5ZENmMzd4QWhrSnYv"],
    awesometanks2: ["aHR0cHM6Ly9pbWFnZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vMzc0MDY5MTUtNDcxODM2NDAyMjUzODQ3MTQ2LnByZXZpZXcuZWRpdG15c2l0ZS5jb20vdXBsb2Fkcy9iLzEzOTg5MDEyOS0xNjU3Mjc2NzA2NTMzMzY3MDAvZmlsZXMvYXQyLnhtbA=="],
    baldisbasics: ["aHR0cHM6Ly9ncmFuZGNhbnlvbnNodXR0bGVzLmNvbS91cGxvYWRzLzUvNS82LzcvNTU2NzE5NC9jdXN0b21fdGhlbWVzLzY2NjM0NDgyMDg0ODM4MDYzMS9iYWxkaS5odG1s"],
    xv1lol: ["aHR0cHM6Ly9pbWFnZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9rbzFvdi9qZDgzaGYwMmxkNjVsYTMybWRsNEA0NGFjMzIwZWVlMzVhNmYzMzJiM2MwN2MwYTgxZTYxMTI2N2U2NDBjLzF2MS54bWw="],
    xline: ["aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5bWh2OV85VlBQZHJNamtua3FZWmRDRUNkNWxTWTh1cGd1eHp2OVFCVzhLblBlQWZPaVJWaG5zSGp6WnNLZklvblUvZXhlYw=="],
    chess: ["aHR0cHM6Ly9pbWFnZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWFzc2V0c2J1Y2tldC04bGp2eXIxeGN6bWIvOGM0OTFmMjEtNzM1My00ZjFmLWIyYTAtOTU0NDgyNGM0ZDI4JTJGMi1wbGF5ZXItY2hlc3MueG1s"],
    xslices: ["aHR0cHM6Ly9pbWFnZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWFzc2V0c2J1Y2tldC04bGp2eXIxeGN6bWIvMWVlMjA2MjEtNjFiYy00ZWM4LWE4ZWMtNWU4MzljMmU2ZWRjJTJGMy1zbGljZXMueG1s"],
    blackholesquare: ["aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6akNPWGZUSy1EVllxMGlheWIxTXFOcFNhcm96Qm5yeXFodVl6WUV0QWkxdDRva0dMZXhEV0lzejBZY2ppZnVXdXcvZXhlYw=="],
    coreball: ["aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5b2I3SHhraVcyZTB5VDIyUVJpZWpuQV9hbERkVWtQbnJOaXJudkNYMUhZUHJpR1BSNl9HWjJpMVJzZ2xQeXRsRm8vZXhlYw=="],
    towerblocks: ["aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5TFdGWUp4LTJKSGxvSjZONHVyLWRiaTczRzk2OTZhbHh5YU96aS1pa05CMEhJT0k2SmVLMTNickpRYmIyZlU5Q2tzZy9leGVj"],
    spacecraft: ["aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3TGhVc1VqaFR2aHBZeWx0UW54SEd2X1pkNDBUN0J0N2dmb2dDdG5uRWszdnF4eFNKN1BQbERaTkdlYzJwX0NuTm4vZXhlYw=="],
    xthinningsmash: ["aHR0cHM6Ly9pbWFnZXMtb3BlbnNvY2lhbC5nb29nbGV1c2VyY29udGVudC5jb20vZ2FkZ2V0cy9pZnI/dXJsPWh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWFzc2V0c2J1Y2tldC04bGp2eXIxeGN6bWIvOGM0OTFmMjEtNzM1My00ZjFmLWIyYTAtOTU0NDgyNGM0ZDI4JTJGN3RoX2lubmluZ19zbWFzaC54bWw="],
    x0x10: ["aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3TzNoS0MwaTIwQ21oNE5rczB6d0I4U3lxTWtka3g0V0o4dWlObEVoYWJmVl9lNXAzaWwxOWxBUW9HZ3RhbldrXzEvZXhlYw=="]
}
let currentSRCGF;
let currentSRCGFCounter = 0;
function readUrlTree(key) {
    let gUrlKeys = Object.keys(gUrlTree);
    gUrlKeys.forEach(keyCurrent => {
        if(keyCurrent === key){
            currentSRCGF = keyCurrent;
            toggleGFrame(window.atob(gUrlTree[keyCurrent][0]));
        }
    });
}
//better optimized onclick handler
q('.gShowcaseModal', true).forEach(el => el.addEventListener("click", event => {
    if(isNaN(parseInt((el.querySelector("span").innerText).replaceAll(" ", "").replaceAll(".", "").toLowerCase()[0]))){
        readUrlTree((el.querySelector("span").innerText).replaceAll(" ", "").replaceAll(".", "").toLowerCase())
    }else{
        let updatedStr = setCharAt((el.querySelector("span").innerText).replaceAll(" ", "").replaceAll(".", "").toLowerCase(), 0, "x")
        readUrlTree(updatedStr)
    }
}));
//fps checker
const times = [];
let fps;
let fpsDisplay = g('fpsChecker');

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    fpsDisplay.innerText = `FPS: ${fps}`;
    refreshLoop();
  });
}
refreshLoop();
//inframe (checks if in iframe)
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
let favRepCL = g('faviconRepCl');
//favicon fetch and replace
function fetchFaviconAndTitle(url){
    let array = url.split("/")
    array = array.splice(0, 3);
    array.shift();
    let newurl = array.join().replaceAll(",", "");
    let arrayTitle = url.split("/")
    arrayTitle = arrayTitle.splice(0, 3);
    let newUrlTitleCl = arrayTitle.join().replaceAll(",", "/");

    //favicon fetch
        favRepCL.href = `https://icons.duckduckgo.com/ip3/${newurl}.ico`;
        cloakFavicon = `https://icons.duckduckgo.com/ip3/${newurl}.ico`;
        localStorage.setItem("cloakFavicon", `https://icons.duckduckgo.com/ip3/${newurl}.ico`); 
    //fetch title
    fetch(`https://uncors.vercel.app/?url=${newUrlTitleCl}`)
        .then(response => response.text())
        .then((response) => {
            const regex = new RegExp(`<title>(.*)</title>`);
            const found = response.match(regex);
            try {
                found.forEach((foundElem) => {
                    if(foundElem.includes(`<title>`) != true){
                        document.title = foundElem;
                        cloakTitle = foundElem;
                        localStorage.setItem("cloakTitle", foundElem);       
                    }
                }) 
            } catch (error) {

            }
        })
}
//useragent version
function getChromeVersion() {
    if (navigator.userAgent.indexOf("Chrome") > -1) {
        var chromeVersionofUser = navigator.userAgent.match(/Chrome\/(\d+)/)[1];
        return chromeVersionofUser;
      }
}
let chromeVersion = parseInt(getChromeVersion());
if(chromeVersion >= 115){
}else{
    g('filterIcon').style.display = 'none';
}
//fullscreen stuff
// (thanks w3Schools)
function openFullscreen(lkjh) {
  if (lkjh.requestFullscreen) {
    lkjh.requestFullscreen();
  } else if (lkjh.webkitRequestFullscreen) { // Safari
  lkjh.webkitRequestFullscreen();
  } else if (lkjh.msRequestFullscreen) { // IE11
  lkjh.msRequestFullscreen();
  }
}
//available app names for App functions
// gApp (Game App), cApp (Cloaker App), textEdApp (Text Editor), codeExApp (code executor), expApp (Expiriments), devApp (dev), SBapp (searchBlank)
//(must be a string me when typescript)
// (exFr app is to be used only for pre-open)

//App functions
function openApp(appName) {
    let app = g(appName);
    if(appName === "textEdApp"){
            textOpen = true;
            teArea.focus();
    }
    try {
        app.style.display = "grid";
        setTimeout(() => {
            app.style.opacity = 1;
        }, 0);
    } catch (err) {
        console.error(err);
    }
};
function closeApp(appName) {
    let app = g(appName);
    try {
        app.style.opacity = 0;
        setTimeout(() => {
           app.style.display = "none";
        }, 601);
    } catch (err) {
        console.error(err);
    }
}
//Gframe handling
let frameOpen = false;
let fullscreenGFrame = g('iframeGFullscreen');
let exitIframeGContainer = g('exitIframeGContainer');
function toggleGFrame(src){
    let frameGContainer = g('iframeGContainer');
    let GFrame = g('iframeGFrame');
    if (frameOpen) {
        frameOpen = false;
        GFrame.src = ``;
        frameGContainer.style.opacity = `0`;
        setTimeout(() => {
            frameGContainer.style.display = `none`;
        }, 501);
    } else {
        frameOpen = true;
        GFrame.src = src;
        frameGContainer.style.opacity = `1`;
        setTimeout(() => {
            frameGContainer.style.display = `flex`;
        }, 501);
    }
}
iframeGFullscreen.onclick = () => {
    openFullscreen(g("iframeGFrame"));
}
exitIframeGContainer.onclick = () => {
    toggleGFrame(``);
}
//blankp
//flags must be an array
// i wil probably just switch to typescript later on because yes

function openBlank(enableV2, url, flags) {
    if (typeof enableV2 != boolean) {
        return void(0);
    }
    if (typeof url != string) {
        return void(0);
    }
    if (typeof flags != array) {
        return void(0);
    }
    var inframe = inIframe();
    let appliedFlags = flags;
    //flags
    let availableFlags = ["selfClose", "openSelf"];
    let selfClose = false;
    let openSelf = false;
    let exp_V3 = false;
    for (let t = 0; t < appliedFlags.length; t++) {
        let appliedFlag = appliedFlags[t];
        for (let w = 0; w < availableFlags.length; w++) {
            let comparationFlag = availableFlags[w];
            if(comparationFlag === appliedFlag){
                if (appliedFlag.includes("selfClose")) {
                    selfClose = true;
                } else {
                    if (appliedFlag.includes("openSelf")) {
                        openSelf = true;
                    }
                }
            }
        }
        
    }
    if (enableV2 === true) {            
        var win;
        win = window.open();
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframeh = win.document.createElement('iframe');
        iframeh.style.border = 'none';
        iframeh.style.width = '100%';
        iframeh.style.height = '100%';
        iframeh.style.margin = '0';
        if(url.startsWith("https://") || url.startsWith("http://") || url.startsWith("data:text/html;") || url === ("about:blank")){
            iframeh.src = url;
        }else{
            if (openSelf === true && inframe === false) {
                iframeh.src = window.location.href;
            } else {
                url = "https://" + url;
                iframeh.src = url;
            }
        }        
        win.document.body.appendChild(iframeh);
        var div = document.createElement('div');
        div.innerHTML = '<div id="link">🔗</div><div id="popup"><input id="popupInput" value="" placeholder="Put Link Here." autocomplete="on" type="text" autofocus/><button id="popupButton" role="button">Go to URL</button></div>'
        win.document.body.appendChild(div);
        var script = document.createElement("script");
        script.innerHTML = 'var url=document.getElementById("popupInput");document.getElementById("popupButton").onclick=function(){"https://"!==url.value.substring(0,8)&&"http://"!==url.value.substring(0,7)?url.value="https://"+url.value.split("https://").pop():"http://"==url.value.substring(0,7)&&(url.value="https://"+url.value.split("http://").pop()),document.getElementsByTagName("iframe")[0].src=url.value};let i=0;var popup=document.getElementById("popup");document.getElementById("link").onclick=function(){0===i?(popup.style.visibility="visible",i++):(popup.style.visibility="hidden",i=0)};'
        win.document.body.appendChild(script);1191
        var style = document.createElement('style')
        style.innerHTML = "#popup,input{border-radius:30px}#link,#popup{position:absolute;right:10px;bottom:10px;display:grid}#popupButton,input{font-family:trebuchet MS}#link{height:50px;width:50px;border-radius:50%;background:rgb(0,0,0);text-align:center;justify-items:stretch;align-items:center;font-size:30px;z-index:999999999999999999}#link:hover{transform:translateY(-3px);cursor:pointer}#popup{visibility:hidden;z-index:1000000;background:#161616;border:2px solid #0a0a0a;width:50%;height:15%;align-content:center}input{width:98%;margin:5px 0;border:3px solid #000;color:#000;padding:12px 20px;box-sizing:border-box}#popupButton{border-radius:30px;background:#101010;border:3px solid #070707;width:150px;height:30px;cursor:pointer;text-align:center;filter:drop-shadow(-1px 13px 4px #000);color:#fff;margin:10px}#popupButton:hover{transform:translateY(-2px);filter:drop-shadow(-1px 15px 4px #000)}#popupButton:active{transform:translateY(2px);filter:drop-shadow(-1px 11px 4px #000)}"
        win.document.body.appendChild(style);
        win.document.head.insertAdjacentHTML("afterbegin","<link rel=\"shortcut icon\" href=\"https://ssl.gstatic.com/classroom/favicon.png\" type=\"image/x-icon\"><title>Classes</title>");
        if(selfClose === true && inframe === false){
            window.close('','_parent','');
        }
    }else{
        var win;
        win = window.open();
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframeh = win.document.createElement('iframe');
        iframeh.style.border = 'none';
        iframeh.style.width = '100%';
        iframeh.style.height = '100%';
        iframeh.style.margin = '0';
        if(url.startsWith("https://") || url.startsWith("http://") || url.startsWith("data:text/html;") || url === ("about:blank")){
            iframeh.src = url;
        }else{
            if (openSelf === true && inframe === false) {
                iframeh.src = window.location.href;
            } else {
                url = "https://" + url;
                iframeh.src = url;
            }
        }
        win.document.body.appendChild(iframeh);
        if(selfClose === true && inframe === false){
            window.close('','_parent','');
        }
    }
}
//functions
function saveTextAsFile() {
    var textToWrite = teArea.value;
    console.log(textToWrite);
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    console.log(textFileAsBlob);
    var fileNameToSaveAs = `${docTitle}.txt`;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement();
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  }
  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }
  function TextPopupBar(text) {
    tePopupBar.innerText = text;
    tePopupBar.style.top = "10px";
    setTimeout(() => {
        tePopupBar.style.top = "-100px";
    }, 3000);
  }
  function openTextPW(windowElement) {
    windowElement.style.display = "flex";
  }
  function closeTextPW(windowElement) {
    windowElement.style.display = "none";
  }
//version
//this hurts but i have no choice
let versionCurrent = 'dev build'; //version
let versionWarningWin = g('versionWarningWindow');
let versionWarningPopup = g('versionWarningPopup');
let versionWarningWinClose = g('versionWarningWinClose');
let versionWarningText = g('versionWarningText');
function versionWarningPopupOpen() {
    versionWarningPopup.style.display = "flex";
}
function versionWarningPopupClose() {
    versionWarningPopup.style.display = "none";
}
function versionWarningWindowOpen() {
    versionWarningWin.style.display = "flex";
}
function versionWarningWindowClose() {
    versionWarningWin.style.display = "none";
}
versionWarningPopup.onclick = () => {
    versionWarningPopupClose();
    versionWarningWindowOpen();
}
versionWarningWinClose.onclick = () => {
    versionWarningWindowClose();
}
function fetchVersion(){
    try {
        fetch("https://cdn.jsdelivr.net/gh/hallowedspace/SuperbGames@latest/assets/txt/version.txt")
        .then(response => response.text())
        .then((response) => {
            if(response === versionCurrent){
                console.log(`%cVersion is up to date.`, "color:blue; padding: 10px; background: black; font-size: 30px; border-radius:15px;");
            }else{
                versionWarningPopupOpen();
                versionWarningText.innerHTML = `Site Version is not up to date.<br>If you have deployed this site, please sync it to the newest version. <br> The current version is "${versionCurrent}", whilst the newest version is "${response}".`;
            }
        })
        .catch((err) => {
         console.log(`%cRan into error fetching version: ${err}, Switching to backup to fetch version.`, "color: red; font-size: 20px;background:black;");
         fetch("https://raw.githubusercontent.com/HallowedSpace/SuperbGames/main/assets/txt/version.txt")
        .then(response => response.text())
        .then((response) => {
            if(response === versionCurrent){
             console.log(`%cVersion is up to date.`, "color:blue; padding: 10px; background: black; font-size: 30px; border-radius:15px;");
            }else{
                versionWarningPopupOpen();
                versionWarningText.innerHTML = `Site Version is not up to date.<br>If you have deployed this site, please sync it to the newest version. <br> The current version is "${versionCurrent}", whilst the newest version is "${response}".`;
            }
        })
        .catch(err => {
            console.log(`Ran into error fetching version from backup: '${err}'`);
            versionWarningPopupOpen();
            versionWarningText.innerHTML = `Had a problem fetching the version. Please check the console.`;
    })
     })
    }catch (error) {
        try {
            console.log(`%cRan into error fetching version: ${error}, Switching to backup to fetch version.`, "color: red; font-size: 20px;background:black;");
         fetch("https://raw.githubusercontent.com/HallowedSpace/SuperbGames/main/assets/txt/version.txt")
        .then(response => response.text())
        .then((response) => {
            if(response === versionCurrent){
                console.log(`%cVersion is up to date.`, "color:blue; padding: 10px; background: black; font-size: 30px; border-radius:15px;");
            }else{
                versionWarningPopupOpen();
                versionWarningText.innerHTML = `Site Version is not up to date.<br>If you have deployed this site, please sync it to the newest version. <br> The current version is "${versionCurrent}", whilst the newest version is "${response}".`;
            }
        })
        .catch(err => {
            console.log(`Ran into error fetching version from backup: '${err}'`)
            versionWarningPopupOpen();
            versionWarningText.innerHTML = `Had a problem fetching the version. Please check the console.`;
        })
        } catch (error2) {
            console.log(`Ran into error fetching version from backup: '${err}'`);
            versionWarningPopupOpen();
            versionWarningText.innerHTML = `Had a problem fetching the version. Please check the console.`;
        }
        
    }
}
fetchVersion();
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

//==app variables==
//

//ab search variables
let sbIcon = g('searchBlankIcon');
let sbBack = g('sbBack');

//dev variables
let devIcon = g('devIcon');

//gApp variables
let gIcon = g('activitesIcon');

//exp app variables
let expIcon = g('experimentsIcon');
let expAppBack = g('expAppBack');
let currVersion = g('currentVersion');

//clo Variables
let cIcon = g('cloakIcon');
let cBack = g('cBack');
let cButton = g('cloakButton');
let titleInput = g('titleInput');
let faviconInput = g('faviconInput');

// text editor variables
const invalidChars = ["/", "\\", "<", ">", ":", "?", "~", "|"];
let textIcon = g('textEDIcon');
let teBack = g('textBack');
let teArea = g('TextEditor');
let tePopupBar = g('textPopupBar');
let teToolbar = g('textToolbar');
let docTitle = "text";
let textOpen = false;
let clearText = g("clearTextSVG");
let docTitleSVG = g("docTitleSVG");
let uploadFileInp = g('uploadFileSVG');
let downloadDocSVG = g('downloadDocSVG');
let textAlignSVG = g('textAlignSVG');
let textAlignCurrent = 0;
let fontSizeSVG = g('fontSizeSVG');
let teInfoSVG = g('textInfoSVG');
let teInfoBackSVG = g('textInfoBackSVG');
let docTitlePW = g('docTitlePopupWindow');
let docTitleInput = g('docTitleInput');
let docTitleSubmitButton = g('submitDocTitle');
let docTitleCancelButton = g('cancelDocTitle');
let infoPW = g('infoTextPopupWindow');

//code executor
let JSIcon = g('JSexIcon');
let JSback = g('codeExArrow');
let codeInput = g('codeInput');
let executeBtn = g('executeCodeButton');

//abC-LocalStorage variables
let cloakTitle = localStorage.getItem("cloakTitle");
let cloakFavicon = localStorage.getItem("cloakFavicon");
let favicon = document.querySelector("link[rel='shortcut icon']");
let atr = localStorage.getItem("antiTab");
let abCloaked = localStorage.getItem("abCloaked");
let abTog = g('abToggle');
let atTog = g('atToggle');
//ab handling
if(atr === 'true'){
    atTog.checked = "true";
    window.onbeforeunload = () => {
        return 0;
    }
}else{
    window.onbeforeunload = () => {
        //do nothing (clears it)
    }
}
if(abCloaked === 'true'){
    abTog.checked = true;
};
    if(abCloaked === 'true'){
        var inframe = inIframe();
        if(inframe === false){
        var iul = window.open();
        iul.document.body.style.margin = '0';
        iul.document.body.style.height = '100vh';
        var ignk = iul.document.createElement('iframe');
        ignk.style.border = 'none';
        ignk.style.width = '100%';
        ignk.style.height = '100%';
        ignk.style.margin = '0';
        ignk.src = window.location.href;
        iul.document.body.appendChild(ignk);
        if(cloakTitle != null){
            iul.document.head.insertAdjacentHTML("afterbegin",`<title>${cloakTitle}</title>`);
        }else{
            iul.document.head.insertAdjacentHTML("afterbegin","<title>Home</title>");
        }
        if(cloakFavicon != null){
            iul.document.head.insertAdjacentHTML("afterbegin",`<link rel="shortcut icon" href="${cloakFavicon}" type="image/x-icon">`);
        }else{
            iul.document.head.insertAdjacentHTML("afterbegin","<link rel=\"shortcut icon\" href=\"https://ssl.gstatic.com/classroom/favicon.png\" type=\"image/x-icon\">");

        }
        setInterval(() => {
            location.replace('https://classroom.google.com');
        },0)
        }
    };
//util
let s1 = g('s1');
let s2 = g('s2');
let currentS = 1;
let body = document.body;
//time
let dateElement = g("date");
function updateTime() {
    let dateAndTime = new Date();
    let n = dateAndTime.toLocaleTimeString();
    dateElement.innerHTML = "Today is " + dateAndTime.toDateString();
    g("currentTime").innerHTML = n;
}
var timeUpdate = setInterval(() => {
    updateTime();
}, 500);
//theme
let theme = parseInt(localStorage.getItem("theme"));
let theme1 = g('theme1');
let theme2 = g('theme2');
let theme3 = g('theme3');
let theme4 = g('theme4');
let theme5 = g('theme5');
let themedBG = document.querySelectorAll(".themedBackground");
if(localStorage.getItem("theme") === null){
    theme = 1;
    var interval = setInterval(() => {
        if(currentS === 2){
            body.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
            clearInterval(interval);
        }
    }, 1);
    theme1.classList.add("selectedTheme");
}
function swapStage(){ 
    if(cloakTitle != null){
        document.title = cloakTitle;
    };
    if(cloakFavicon != null){
        favicon.href = cloakFavicon;
    };
    if(currentS === 1){
        s1.style.display = "none";
        s2.style.display = "grid";
        currentS++;
        if(theme === 1){
            body.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
            theme1.classList.add("selectedTheme");
            themedBG.forEach((element) => {
                element.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
            })
        }else{
            if (theme === 2) {
                body.style.background =  "linear-gradient(124deg, rgba(9,250,41,1) 0%, rgba(19,207,154,1) 33%, rgba(20,132,227,1) 93%)";
                theme2.classList.add("selectedTheme");
                themedBG.forEach((element) => {
                    element.style.background = "linear-gradient(124deg, rgba(9,250,41,1) 0%, rgba(19,207,154,1) 33%, rgba(20,132,227,1) 93%)";
                })
            } else {
                if (theme === 3) {
                    theme3.classList.add("selectedTheme");
                    body.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
                    themedBG.forEach((element) => {
                        element.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
                    })
                }else {
                    if (theme === 4) {
                        theme4.classList.add("selectedTheme");
                        body.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
                        themedBG.forEach((element) => {
                            element.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
                        })
                    } else {
                        if (theme === 5) {
                            theme5.classList.add("selectedTheme");
                            body.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
                            themedBG.forEach((element) => {
                                element.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
                            })
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

//theme buttons (settings)
theme1.onclick = () => {
document.querySelector(".selectedTheme").classList.remove("selectedTheme");
    themedBG.forEach((element) => {
        element.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
    })
    theme1.classList.add("selectedTheme");
    localStorage.setItem("theme", 1);
    body.style.background = "linear-gradient(127deg, rgba(6,0,172,1) 0%, rgba(102,0,255,1) 100%)";
    theme = 1;
}
theme2.onclick = () => {
document.querySelector(".selectedTheme").classList.remove("selectedTheme");
        themedBG.forEach((element) => {
        element.style.background = "linear-gradient(124deg, rgba(9,250,41,1) 0%, rgba(19,207,154,1) 33%, rgba(20,132,227,1) 93%)";
    })
    theme2.classList.add("selectedTheme");
    localStorage.setItem("theme", 2);
    body.style.background =  "linear-gradient(124deg, rgba(9,250,41,1) 0%, rgba(19,207,154,1) 33%, rgba(20,132,227,1) 93%)";
    theme = 2;
}
theme3.onclick = () => {
document.querySelector(".selectedTheme").classList.remove("selectedTheme");
        themedBG.forEach((element) => {
        element.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
    })
    theme3.classList.add("selectedTheme");
    localStorage.setItem("theme", 3);
    body.style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)";
    theme = 3;
}
theme4.onclick = () => {
document.querySelector(".selectedTheme").classList.remove("selectedTheme");
        themedBG.forEach((element) => {
        element.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
    })
    theme4.classList.add("selectedTheme");
    localStorage.setItem("theme", 4);
    body.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
    theme = 4;
}
theme5.onclick = () => {
document.querySelector(".selectedTheme").classList.remove("selectedTheme");
themedBG.forEach((element) => {
    element.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
    })
    theme5.classList.add("selectedTheme");
    localStorage.setItem("theme", 5);
    body.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
    theme = 5;
}
//settings button
sSw.onclick = () => {
    if (settingsOpen === 0) {
      document.querySelector('body').style.overflow = "hidden";
      sSw.style.transform = "rotate(360deg)";
      sSw.style.marginLeft = "calc(100% - 60px)";
      sSb.style.width = "100%";
      sCon.style.display = "flex";
      sCon.style.opacity = 1;
      settingsOpen++;
    } else {
        document.querySelector('body').style.overflow = "visible";
        sSw.style.transform = "rotate(0deg)";
        sSw.style.marginLeft = "0";
        sSb.style.width = "0";
        sCon.style.opacity = 0;
        setTimeout(() => {
            sCon.style.display = "none";
        }, 500);
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

//===APP HANDLING===
//variables at lines 304-374 (ctrl + g)

//gApp
let gmIcon = g("activitesIcon");
let gmBack = g("gmBack");

gmIcon.onclick = () => {
    openApp("gApp");
}
gmBack.onclick = () => {
    closeApp("gApp");
}

//jsExec (like 3 lines of code lol)
exitInfo.onclick = () => {
    infoPopup.style.display = "none";
    infoOpen = false;
}

JSIcon.onclick = () => {
    openApp("codeExApp");
};
JSback.onclick = () => {
    closeApp("codeExApp");
}
executeBtn.onclick = () => {
    try {
        eval(codeInput.value);
    } catch (error) {
        codeInput.value = error;
    }
};
//dex_tensi-fy
let f6Rw6;
let filterIcon = g('filterIcon');
filterIcon.onclick = () => {
    f6Rw6 = window.open();
    f6Rw6.document.body.style.margin = '0';
    f6Rw6.document.body.style.height = '100vh';
    var iframeh = f6Rw6.document.createElement('iframe');
    iframeh.style.border = 'none';
    iframeh.style.width = '100%';
    iframeh.style.height = '100%';
    iframeh.style.margin = '0';
    iframeh.src = `data:text/html;base64,PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz1lbj48dGl0bGU+RGV4dGVuc2lmeTwvdGl0bGU+PG1ldGEgY2hhcnNldD11dGYtOD48bWV0YSBjb250ZW50PXdpZHRoPWRldmljZS13aWR0aCBuYW1lPXZpZXdwb3J0PjxzdHlsZT4qe2ZvbnQtZmFtaWx5OlNhbnMtc2VyaWY7Y29sb3I6I2Q0ZDNkYX1he2NvbG9yOiM2ZGFlYmR9YTpob3ZlciB7Y29sb3I6IzRmOWViMH1jb2RlLHByZXtmb250LWZhbWlseTptb25vc3BhY2U7YmFja2dyb3VuZC1jb2xvcjojMWUyMzI0O3BhZGRpbmc6NHB4O292ZXJmbG93LXg6YXV0b31wcmV7cGFkZGluZzo4cHh9cHJlIGNvZGV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtwYWRkaW5nOjB9Ym9keXtiYWNrZ3JvdW5kLWNvbG9yOiMxZTIzMjQ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MH1idXR0b257YmFja2dyb3VuZC1jb2xvcjojMzM2MjZjO3BhZGRpbmc6NnB4O3BhZGRpbmctbGVmdDo4cHg7cGFkZGluZy1yaWdodDo4cHg7Ym9yZGVyOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZToxNXB4fSNtYWluX2RpdnttYXgtd2lkdGg6ODAwcHg7b2JqZWN0LWZpdDpjb250YWluO2JhY2tncm91bmQtY29sb3I6IzI1MmIyZDtwYWRkaW5nOjRweDtwYWRkaW5nLWxlZnQ6MTZweDtwYWRkaW5nLXJpZ2h0OjE2cHg7bWFyZ2luOjE2cHg7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30jYnV0dG9uc19jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo4cHh9PC9zdHlsZT48c2NyaXB0PmxldCBmcm9tX2lkPWE9PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpO2xldCBleHRlbnNpb25zPXsic2VjdXJseV9uZXciOntuYW1lOiJTZWN1cmx5Iix1cmw6ImNocm9tZS1leHRlbnNpb246Ly9qb2ZsbWtjY2lia29vcGxhZW9pbmVjamJtZGViZ2xhYi9mb250cy9NZXRyb3BvbGlzLmNzcyJ9LCJzZWN1cmx5X29sZCI6e25hbWU6IlNlY3VybHkgKG9sZCkiLHVybDoiY2hyb21lLWV4dGVuc2lvbjovL2loZW9iYWdqa2ZrbG5saWtnaWhhbmxoY2Rkam9paGtnL2ZvbnRzL01ldHJvcG9saXMuY3NzIn0sImdvZ3VhcmRpYW4iOntuYW1lOiJHb2d1YXJkaWFuIix1cmw6ImNocm9tZS1leHRlbnNpb246Ly9oYWxkbGdsZHBsZ25nZ2tqYWFmaGVsZ2lhZ2xhZmFuaC95b3V0dWJlX2luamVjdGlvbi5qcyJ9LCJsYW5zY2hvb2wiOntuYW1lOiJMQU5TY2hvb2wiLHVybDoiY2hyb21lLWV4dGVuc2lvbjovL2JhbGVpb2puanBnZW9qb2hoaGZiaWNoY29kZ2xqbW5qL2Jsb2NrZWQuaHRtbCJ9LCJsaW5ld2l6ZSI6e25hbWU6IkxpbmV3aXplIix1cmw6ImNocm9tZS1leHRlbnNpb246Ly9kZGZia2hwbWNkYmNpZWplbmZjb2xhYWllYm5qY2JmYy9iYWNrZ3JvdW5kL2Fzc2V0cy9wYWdlcy9kZWZhdWx0LWJsb2NrZWQuaHRtbCJ9LCJibG9ja3NpIjp7bmFtZToiQmxvY2tzaSIsdXJsOiJjaHJvbWUtZXh0ZW5zaW9uOi8vZ2hscG1sZG1qamhtZGdtbmVvYWliYmVna2pqYm9uYmsvcGFnZXMvYmxvY2tQYWdlLmh0bWwifSwiZm9ydGlndWFyZCI6e25hbWU6IkZvcnRpZ3VhcmQiLHVybDoiY2hyb21lLWV4dGVuc2lvbjovL2lnYmdwZWhuYm1oZ2RnamJoa2twZWRvbW1nbWZiZWFvL3lvdXR1YmVfaW5qZWN0aW9uLmpzIn0sImNpc2NvIjp7bmFtZToiQ2lzY28gVW1icmVsbGEiLHVybDoiY2hyb21lLWV4dGVuc2lvbjovL2pjZGhtb2pmZWNqZm1iZHBjaGloYmVpbG9oZ25iZGNpL2Jsb2NrZWQuaHRtbCJ9LCJjb250ZW50a2VlcGVyIjp7bmFtZToiQ29udGVudEtlZXBlciIsdXJsOiJjaHJvbWUtZXh0ZW5zaW9uOi8vamRvZ3BoYWtvbmRmZG1jYW5wYXBmYWhrZG9tYWljZmEvaW1nL2NrYXV0aDE5eC5wbmcifSwic2VjdXJseWNsYXNzcm9vbSI6e25hbWU6IlNlY3VybHkgQ2xhc3Nyb29tIix1cmw6ImNocm9tZS1leHRlbnNpb246Ly9qZmJlY2ZtaWVnY2pkZGVuamhsYmhsaWtjYmZtbmFmZC9ub3Rmb3VuZC5odG1sIn0sImhhcGFyYSI6e25hbWU6IkhhcGFyYSIsdXJsOiJjaHJvbWUtZXh0ZW5zaW9uOi8va2JvaGFmY29wZnBpZ2tqZGltZGNkZ2VubGhrbWhibmMvYmxvY2tlZC5odG1sIn0sImlib3NzIjp7bmFtZToiaWJvc3MiLHVybDoiY2hyb21lLWV4dGVuc2lvbjovL2ttZmZlaGJpZGxhbGliZmVrbGFlZm5ja3BpZGJvZGZmL3Jlc3RyaWN0ZWQuaHRtbCJ9LCJsaWdoc3BlZWQiOntuYW1lOiJMaWdodHNwZWVkIix1cmw6ImNocm9tZS1leHRlbnNpb246Ly9hZGtjcGtwZ2hhaG1ib3BramNob2JpZWNrZW9hb2VlbS9pY29uLTEyOC5wbmcifSwiaW50ZXJjbGFzcyI6e25hbWU6IkludGVyQ0xBU1MgRmlsdGVyaW5nIFNlcnZpY2UiLHVybDoiY2hyb21lLWV4dGVuc2lvbjovL2piZGRnamdsZ2trbmVvbm5pbmVhb2hkaGFiamJnb3BpL3BhZ2VzL21lc3NhZ2UtcGFnZS5odG1sIn0sImludGVyc2FmZSI6e25hbWU6IkludGVyU2FmZSBHYXRld2F5Q29ubmVjdGlvbiBBZ2VudCIsdXJsOiJjaHJvbWUtZXh0ZW5zaW9uOi8vZWNqb2doY2NuamxvZGpsbWtnbW5ibmtkY2JuamdkZW4vcmVzb3VyY2VzL29wdGlvbnMuanMifSwiZ29waGVyX2J1ZGR5Ijp7bmFtZToiR29waGVyIEJ1ZGR5Iix1cmw6ImNocm9tZS1leHRlbnNpb246Ly9jZ2JiYmptZ2RwbmlmaWpjb25oYW1nZ2plaGxhbWNpZi9pbWFnZXMvZ29waGVyLWJ1ZGR5XzEyOHgxMjhfY29sb3IucG5nIn0sImxhbnNjaG9vbF9oZWxwZXIiOntuYW1lOiJMYW5TY2hvb2wgV2ViIEhlbHBlciIsdXJsOiJjaHJvbWUtZXh0ZW5zaW9uOi8vaG9uamNuZWZla2Zub21wYW1wY3BtY2RhZGlibWpobGsvYmxvY2tlZC5odG1sIn0sImltdGxhemFydXMiOntuYW1lOiJJTVRMYXphcnVzIix1cmw6ImNocm9tZS1leHRlbnNpb246Ly9jZ2lnb3BqYWtrZWNsaGdnY2hnbmhtcG1oZ2hjYm5hZi9tb2RlbHMvbW9kZWwuanNvbiJ9LCJtb2JpbGVfZ3VhcmRpYW4iOntuYW1lOiJNb2JpbGUgR3VhcmRpYW4iLHVybDoiY2hyb21lLWV4dGVuc2lvbjovL2ZnbWFmaGRvaGprZGhmYWFjZ2JnY2xtZmdrZ29rZ21iL2Jsb2NrLmh0bWwifX07YXN5bmMgZnVuY3Rpb24gY2hlY2tfdXJsKGEpe2xldCBiPW5ldyBBYm9ydENvbnRyb2xsZXIoKTtsZXQgYz1zZXRUaW1lb3V0KCgpPT5iLmFib3J0KCksNTAwKTt0cnl7YXdhaXQgZmV0Y2goYSx7c2lnbmFsOmIuc2lnbmFsfSk7cmV0dXJuIHRydWV9Y2F0Y2goZCl7bGV0IGU9ZCsgIiI7cmV0dXJuIGUuaW5jbHVkZXMoIkFib3J0RXJyb3IiKX19YXN5bmMgZnVuY3Rpb24gZGV0ZWN0X2V4dGVuc2lvbnMoKXtsZXQgYT1bXTtmb3IobGV0IGIgb2YgT2JqZWN0LnZhbHVlcyhleHRlbnNpb25zKSl7bGV0IGM9YXdhaXQgY2hlY2tfdXJsKGIudXJsKTtpZihjKXthLnB1c2goYil9fTtyZXR1cm4gYX1hc3luYyBmdW5jdGlvbiBtYWluKCl7bGV0IGE9YXdhaXQgZGV0ZWN0X2V4dGVuc2lvbnMoKTtsZXQgYj1mcm9tX2lkKCJidXR0b25zX2NvbnRhaW5lciIpO2lmKCF3aW5kb3cuY2hyb21lKXtiLmlubmVySFRNTD1gPHA+PGI+RXJyb3I6IFlvdSBhcmUgbm90IHJ1bm5pbmcgYSBDaHJvbWl1bS1iYXNlZCBicm93c2VyLjwvYj48L3A+YDtyZXR1cm59ZWxzZSBpZihhLmxlbmd0aD09PTApe2IuaW5uZXJIVE1MPWA8cD48Yj5FcnJvcjogTm8gc3VwcG9ydGVkIGV4dGVuc2lvbnMgZGV0ZWN0ZWQuPC9iPjwvcD5gO2IuaW5uZXJIVE1MKz1gPHAgc3R5bGU9Im1hcmdpbi10b3A6IC0xNnB4OyI+SWYgeW91IHdhbnQgc3VwcG9ydCBmb3IgYSBzcGVjaWZpYyBleHRlbnNpb24gYWRkZWQsIHBsZWFzZSBjb250YWN0IDxjb2RlPmFsbGVuQGFkaW5nLmRldjwvY29kZT4sIGFuZCBwcm92aWRlIHRoZSBleHRlbnNpb24gSUQgYW5kIG1hbmlmZXN0LjwvcD5gO3JldHVybn1lbHNle2IuaW5uZXJIVE1MPSIifTtmb3IobGV0IGMgb2YgYSl7bGV0IGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiYnV0dG9uIik7ZC5pbm5lclRleHQ9YEZyZWV6ZSAke2MubmFtZX1gO2Qub25jbGljaz0oKT0+e2NyZWF0ZV9pZnJhbWVzKGMudXJsKX07Yi5hcHBlbmQoZCl9fWZ1bmN0aW9uIGNyZWF0ZV9pZnJhbWVzKGEpe2xldCBiPVtdO2xldCBjPTU7d2hpbGUodHJ1ZSl7bGV0IGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaWZyYW1lIik7ZG9jdW1lbnQuYm9keS5hcHBlbmQoZCk7Yi5wdXNoKGQpO2xldCBlPU1hdGgubWF4KDIsMjAwLSBjKTtmb3IobGV0IGY9MDtmPDUwO2YrKyl7bGV0IGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaWZyYW1lIik7Zy5zcmM9YTtnLnN0eWxlLndpZHRoPWcuc3R5bGUuaGVpZ2h0PSIxcHgiO2QuY29udGVudERvY3VtZW50LmJvZHkuYXBwZW5kKGcpfTt3aGlsZShiLmxlbmd0aD5NYXRoLm1heCgzLDEwLSBjKSl7YlswXS5yZW1vdmUoKTtiLnNoaWZ0KCl9O2MrK319d2luZG93Lm9ubG9hZD1tYWluPC9zY3JpcHQ+PGJvZHk+PGRpdiBpZD1tYWluX2Rpdj48aDEgc3R5bGU9bWFyZ2luLXRvcDo4cHg+RGV4dGVuc2lmeTwvaDE+PHA+RGV4dGVuc2lmeSBpcyBhbiBleHBsb2l0IHdoaWNoIGxldHMgeW91IGRpc2FibGUgbW9zdCBhZG1pbi1pbnN0YWxsZWQgQ2hyb21lIGV4dGVuc2lvbnMgZnJvbSBhbnkgd2VicGFnZS48aDI+SW5zdHJ1Y3Rpb25zPC9oMj48b2w+PGxpPk9wZW4gY2hyb21lOi8vZXh0ZW5zaW9ucyBpbiBhIG5ldyB0YWIuIEtlZXAgdGhpcyBwYWdlIG9wZW4uPGxpPkdvIHRvIHRoZSBzZXR0aW5ncyBwYWdlIGZvciB0aGUgZXh0ZW5zaW9uIHlvdSB3YW50IHRvIGRpc2FibGUuPGxpPk9uIHRoaXMgcGFnZSwgY2xpY2sgdGhlICJmcmVlemUgZXh0ZW5zaW9uIiBidXR0b24uPGxpPkJhY2sgb24gdGhlIGNocm9tZTovL2V4dGVuc2lvbnMgcGFnZSwgc3BhbSB0aGUgImFsbG93IGFjY2VzcyB0byBmaWxlIFVSTHMiIHN3aXRjaCBmb3IgYSBmZXcgc2Vjb25kcy48bGk+VGhlIGV4dGVuc2lvbiBzaG91bGQgbm93IGJlIHRlbXBvcmFyaWx5IGRpc2FibGVkLiBGb3IgdGhpcyBlZmZlY3QgdG8gcGVyc2lzdCwgZmxpcCB0aGUgImFsbG93IGFjY2VzcyB0byBmaWxlIFVSTHMiIGFnYWluIGV2ZXJ5IGZldyBtaW51dGVzLCBvciBpZiBwYWdlcyBzdGFydCBnZXR0aW5nIGJsb2NrZWQgYWdhaW4uPGxpPllvdSBtYXkgYWxzbyBuZWVkIHRvIHJlb3BlbiB0aGlzIHBhZ2UgZXZlcnkgb25jZSBpbiBhIHdoaWxlIHRvIHByZXZlbnQgYW4gdW5hdm9pZGFibGUgbWVtb3J5IGxlYWsgZnJvbSBjcmFzaGluZyB0aGUgc3lzdGVtLjwvb2w+PHA+RHVyaW5nIHRoaXMgcHJvY2VzcywgeW91ciBDaHJvbWVib29rIG1heSBoYW5nIG1vbWVudGFyaWx5LiBUaGlzIGlzIG5vcm1hbCwgYW5kIGl0IHNob3VsZCByZXNvbHZlIGl0c2VsZiBhZnRlciBhIGZldyBzZWNvbmRzLjxkaXYgaWQ9YnV0dG9uc19jb250YWluZXI+PHA+PGk+RGV0ZWN0aW5nIGV4dGVuc2lvbnMuLi48L2k+PC9kaXY+PGJyPjxocj48ZGV0YWlscz48c3VtbWFyeSBzdHlsZT1tYXJnaW4tYm90dG9tOjhweD5NYWRlIGJ5IDxhIGhyZWY9aHR0cHM6Ly9hZGluZy5kZXYgdGFyZ2V0PV9ibGFuaz5hZGluZzIyMTA8L2E+LiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLjwvc3VtbWFyeT4gPHByZT5NSVQgTGljZW5zZQpDb3B5cmlnaHQgKGMpIDIwMjMgYWRpbmcyMjEwCgpQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5Cm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICJTb2Z0d2FyZSIpLCB0byBkZWFsCmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMKdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbApjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMKZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczoKClRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbApjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLgoKVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IKSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksCkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRQpBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSCkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sCk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFClNPRlRXQVJFLjwvcHJlPiA8cCBzdHlsZT1mb250LXNpemU6MTNweDt0ZXh0LWFsaWduOnJpZ2h0PjxpPlZlcnNpb24gMS4wLjQ8L2k+PC9wPjwvZGV0YWlscz48L2Rpdj4=`;
    f6Rw6.document.body.appendChild(iframeh);
    if(cloakTitle != null){
        f6Rw6.document.head.insertAdjacentHTML("afterbegin",`<title>${cloakTitle}</title>`);
    }else{
        f6Rw6.document.head.insertAdjacentHTML("afterbegin","<title>Classes</title>");
    }
    if(cloakFavicon != null){
        f6Rw6.document.head.insertAdjacentHTML("afterbegin",`<link rel="shortcut icon" href="${cloakFavicon}" type="image/x-icon">`);
    }else{
        f6Rw6.document.head.insertAdjacentHTML("afterbegin",`<link rel="shortcut icon" href="https://ssl.gstatic.com/classroom/favicon.png" type="image/x-icon">`);
    }
}
//=expApp=
currVersion.innerText = versionCurrent;
expIcon.onclick = () => {
    openApp("expApp");
}
expAppBack.onclick = () => {
    closeApp("expApp");
}

//cApp
let fetchUrlCloakBtn = g('fetchUrlCloakBtn');
let fetchUrlCloakInput = g('fetchUrlCloakInput');
function cloakPopup(duration, text) {
    let cloakPopupC = g('cAppPopup');
    cloakPopupC.style.top = `20px`;
    cloakPopupC.innerText = text;
    setTimeout(() => {
        cloakPopupC.style.top = `-100px`;
        cloakPopupC.innerText = ``;
    }, duration * 1000);
}
fetchUrlCloakBtn.onclick = () => {
    let value = fetchUrlCloakInput.value;
    if(value.startsWith("https://") || value.startsWith("http://")){
        fetchFaviconAndTitle(value);
    }else{
        value = `https://` + value;
        fetchFaviconAndTitle(value);
    }
}
cIcon.onclick = () => {
    openApp("cApp");
};
cBack.onclick = () => {
    closeApp("cApp");
};
cButton.onclick = () => {
    if(titleInput.value === ''){
        document.title = `Dewollah Inc.`;
        localStorage.setItem("cloakTitle", `Dewollah Inc.`);
    }else{
        document.title = titleInput.value;
        localStorage.setItem("cloakTitle", titleInput.value);
    }
    if(faviconInput.value === ''){
        favicon.href = `/assets/img/favicon.png`; 
        localStorage.setItem("cloakFavicon", `/assets/img/favicon.png`); 
    }else{
        favicon.href = faviconInput.value; 
        localStorage.setItem("cloakFavicon", faviconInput.value);  
    }
    if (abTog.checked) {
            var iul = window.open();
            iul.document.body.style.margin = '0';
            iul.document.body.style.height = '100vh';
            var ignk = iul.document.createElement('iframe');
            ignk.style.border = 'none';
            ignk.style.width = '100%';
            ignk.style.height = '100%';
            ignk.style.margin = '0';
            ignk.src = window.location.href;
            iul.document.body.appendChild(ignk);
            if (titleInput.value === '') {
                iul.document.head.insertAdjacentHTML("afterbegin", `<title>Home</title>`);
            } else {
                iul.document.head.insertAdjacentHTML("afterbegin", `<title>${titleInput.value}</title>`);
            }
            if(faviconInput.value === ''){
                iul.document.head.insertAdjacentHTML("afterbegin", `<link rel="shortcut icon" href="https://ssl.gstatic.com/classroom/favicon.png" type="image/x-icon">`); 
            }else{ 
                iul.document.head.insertAdjacentHTML("afterbegin", `<link rel="shortcut icon" href="${faviconInput.value}" type="image/x-icon">`); 
            }
            setInterval(() => {
                location.replace('https://classroom.google.com');
            }, 0);
        }
    };
abTog.onclick = () => {
    if (abTog.checked) {
        localStorage.setItem("abCloaked", "true");
        var inframe = inIframe();
        if (inframe === false) {
            var iul = window.open();
            iul.document.body.style.margin = '0';
            iul.document.body.style.height = '100vh';
            var ignk = iul.document.createElement('iframe');
            ignk.style.border = 'none';
            ignk.style.width = '100%';
            ignk.style.height = '100%';
            ignk.style.margin = '0';
            ignk.src = window.location.href + "?app=cApp";
            iul.document.body.appendChild(ignk);
            if (cloakTitle != null) {
                iul.document.head.insertAdjacentHTML("afterbegin", `<title>${cloakTitle}</title>`);
            } else {
                iul.document.head.insertAdjacentHTML("afterbegin", "<title>Home</title>");
            }
            if (cloakFavicon != null) {
                iul.document.head.insertAdjacentHTML("afterbegin", `<link rel="shortcut icon" href="${cloakFavicon}" type="image/x-icon">`);
            } else {
                iul.document.head.insertAdjacentHTML("afterbegin", "<link rel=\"shortcut icon\" href=\"https://ssl.gstatic.com/classroom/favicon.png\" type=\"image/x-icon\">");
    
            }
            setInterval(() => {
                location.replace('https://classroom.google.com');
            }, 0)
        }
    }else{
        localStorage.setItem("abCloaked", "false");
    }
};
atTog.onclick = () => {
    if (atTog.checked) {
        localStorage.setItem("antiTab", "true");
        atr = 'true';
    } else {
        localStorage.setItem("antiTab", "false");
        atr = 'false';
    }
    if(atr === 'true'){
        window.onbeforeunload = () => {
            return 0;
        }
    }else{
        window.onbeforeunload = () => {
            //do nothing (clears it)
        }
    }
}
textIcon.onclick = () => {
    openApp("textEdApp");
    teArea.focus();
}
textBack.onclick = () => {
    closeApp("textEdApp");
    textOpen = false;
}
clearText.onclick = () => {
    teArea.value = '';
    TextPopupBar("Cleared The Text");
}
docTitleSVG.onclick = () => {
    openTextPW(docTitlePW);
    docTitleInput.value = docTitle;
}
docTitleCancelButton.onclick = () => {
    closeTextPW(docTitlePW);
}
docTitleSubmitButton.onclick = () => {
    let invalid = false;
    if(docTitleInput.value === ''){
        TextPopupBar("Title must be at least 1 character long");
        invalid = true;
        return void(0);
    }
    for (let i = 0; i < invalidChars.length; i++) {
        let value = docTitleInput.value;
        const element = invalidChars[i];
        if(value.includes(element)){
            TextPopupBar(`Invalid Character "${element}"`);
            invalid = true;
            return void(0);
        }
    }
    if(invalid === false){
        docTitle = docTitleInput.value;
        closeTextPW(docTitlePW);
        TextPopupBar("Successfully Set Title");
    }
}
//read files lmao
let filesUploaded = "False";
uploadFileInp.onchange = () => {
        let files = uploadFileInp.files;
        let file = files[0];
        let elementFilename = file.name;
        if(file.type === "text/plain" || file.type === "text/javascript" || file.type === "text/html" || file.type === "text/css"){
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function() {
                let fileContent = reader.result;
                teArea.value = fileContent;
                docTitle = elementFilename.split(".")[0];
                filesUploaded = "True";
            }
        }else{
            TextPopupBar("Error: Wrong File Type");
        }
    }
downloadDocSVG.onclick = () => {
    saveTextAsFile()
    TextPopupBar("Downloaded File");
}
textAlignSVG.onclick = () => {
    if(textAlignCurrent === 0){
        textAlignCurrent += 1; //align left
        textAlignSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
        teArea.style.textAlign = "left";
    }else{
        if(textAlignCurrent === 1){
            textAlignCurrent += 1; //align right
            textAlignSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
            teArea.style.textAlign = "right";
        }else{
            if(textAlignCurrent === 2){
                textAlignCurrent += 1; //align center
                textAlignSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"/></svg>`;
                teArea.style.textAlign = "center";
            }else{
                if(textAlignCurrent === 3){
                    textAlignCurrent = 0; //align justify
                    textAlignSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"/></svg>`;
                    teArea.style.textAlign = "justify";
                }
            }
        }
    }
}
fontSizeSVG.onclick = () => {
    let fontsize = parseInt(prompt("What would you like the font size to be? (px)", "15"))
    if(isNaN(fontsize) === false){
        teArea.textContent = "";
        teArea.style.fontSize = fontsize + "px";
    }
}
teInfoSVG.onclick = () => {
    let wordCounter = 1;
    g('textWordCounter').innerText = `Words: 0,`;
    for (let i = 0; i < teArea.value.length; i++) {
        let elem = teArea.value[i];
        g('textWordCounter').innerText = `Words: ${wordCounter},`;
        if(teArea.value.length === i){
            if(elem === ' '){
                g('textWordCounter').innerText = `Words: ${wordCounter},`;
               }
        }else{
            if(elem === ' '){
                    wordCounter++;
                    g('textWordCounter').innerText = `Words: ${wordCounter},`;
            }
        }
    }
    g('filesUploadedText').innerText = `Files Uploaded: ${filesUploaded},`;
    g('docTitleInfoText').innerText = `Document Title: "${docTitle}".`;
    openTextPW(infoPW);
}
teInfoBackSVG.onclick = () => {
    closeTextPW(infoPW);
}
//sbApp handling
let urlInputSB = g('sbAppPanelUrlInput');
let openBlankBtnSB = g('sbAppPanelSearchButton');
let v2ClkSwitchSB = g('v2ClkSwitchSB');
let atrClkSwitchSB = g('atrClkSwitchSB');
sbIcon.onclick = () => {
    openApp("sbApp");
}
sbBack.onclick = () => {
    closeApp("sbApp");
}
openBlankBtnSB.onclick = () => {
    let v2ToggledBool = v2ClkSwitchSB.checked;
    let atrToggledBool = atrClkSwitchSB.checked;
        let win;
        win = window.open();
        if (atrToggledBool === true) {
            win.onbeforeunload = () => {return 0;}
        }
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        let iframeh = win.document.createElement('iframe');
        iframeh.style.border = 'none';
        iframeh.style.width = '100%';
        iframeh.style.height = '100%';
        iframeh.style.margin = '0';
        if(urlInputSB.value.startsWith("https://") || urlInputSB.value.startsWith("http://") || urlInputSB.value.startsWith("data:text/html;base64,") || urlInputSB.value.startsWith("data:text/html,") || urlInputSB.value === "about:blank"){
            iframeh.src = urlInputSB.value;
        }else{
            let URLSBAPPCLK = "https://" + urlInputSB.value;
            iframeh.src = URLSBAPPCLK;
        }
        if (v2ToggledBool === true) {
            win.document.body.appendChild(iframeh);
            var div = document.createElement('div');
            div.innerHTML = '<div id="link">🔗</div><div id="popup"><input id="popupInput" value="" placeholder="Put Link Here." autocomplete="on" type="text" autofocus/><button id="popupButton" role="button">Go to URL</button></div>'
            win.document.body.appendChild(div);
            var script = document.createElement("script");
            script.innerHTML = 'var url=document.getElementById("popupInput");document.getElementById("popupButton").onclick=function(){"https://"!==url.value.substring(0,8)&&"http://"!==url.value.substring(0,7)?url.value="https://"+url.value.split("https://").pop():"http://"==url.value.substring(0,7)&&(url.value="https://"+url.value.split("http://").pop()),document.getElementsByTagName("iframe")[0].src=url.value};let i=0;var popup=document.getElementById("popup");document.getElementById("link").onclick=function(){0===i?(popup.style.visibility="visible",i++):(popup.style.visibility="hidden",i=0)};'
            win.document.body.appendChild(script);
            var style = document.createElement('style')
            style.innerHTML = "#popup,input{border-radius:30px}#link,#popup{position:absolute;right:10px;bottom:10px;display:grid}#popupButton,input{font-family:trebuchet MS}#link{height:50px;width:50px;border-radius:50%;background:rgb(0,0,0);text-align:center;justify-items:stretch;align-items:center;font-size:30px;z-index:999999999999999999}#link:hover{transform:translateY(-3px);cursor:pointer}#popup{visibility:hidden;z-index:1000000;background:#161616;border:2px solid #0a0a0a;width:50%;height:15%;align-content:center}input{width:98%;margin:5px 0;border:3px solid #000;color:#000;padding:12px 20px;box-sizing:border-box}#popupButton{border-radius:30px;background:#101010;border:3px solid #070707;width:150px;height:30px;cursor:pointer;text-align:center;filter:drop-shadow(-1px 13px 4px #000);color:#fff;margin:10px}#popupButton:hover{transform:translateY(-2px);filter:drop-shadow(-1px 15px 4px #000)}#popupButton:active{transform:translateY(2px);filter:drop-shadow(-1px 11px 4px #000)}"
            win.document.body.appendChild(style);
            win.document.head.insertAdjacentHTML("afterbegin","<link rel=\"shortcut icon\" href=\"https://ssl.gstatic.com/classroom/favicon.png\" type=\"image/x-icon\"><title>Classes</title>");
        }else{
            win.document.body.appendChild(iframeh);
        }
}
//==important stuff==
//
//app is hovered checker and display
function isHover(e){
    if(e.parentElement.querySelector(':hover') === e){
        return true;
    }else{
        return false;
    }
}  
document.addEventListener('mousemove', (w) => {
    //define selector 'n stuff
    let appSelector = g('appSelector')
    appSelector.innerText = '';

    //define hover stuff idk
    let hoveredCodeEx = isHover(JSIcon);
    let hoveredDev = isHover(devIcon); 
    let hoveredFreezer = isHover(filterIcon);
    let hoveredG = isHover(gIcon);
    let hoveredExp = isHover(expIcon);
    let hoveredC = isHover(cIcon);
    let hoveredEdit = isHover(textIcon);
    let hoveredSB = isHover(sbIcon);
    let hoveredNone = 0;

    //if statements that hurt my brain but i dont feel like using jQuery or any other alternative lmao
    if (hoveredDev === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "Developer Mode";
        hoveredNone = 0;
    }else{
        hoveredNone++;
    };
    if (hoveredCodeEx === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "Code Executor";
        hoveredNone = 0;
    }else{
        hoveredNone++;
    };
    if (hoveredFreezer === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "Extension Freezer";
        hoveredNone = 0;
      }else{
        hoveredNone++;
      };
      if (hoveredG  === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "Games";
        hoveredNone = 0;
      }else{
        hoveredNone++;
      };
      if (hoveredExp === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "Experiments";
        hoveredNone = 0;
      }else{
        hoveredNone++;
      };
      if (hoveredC === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "Cloaker";
        hoveredNone = 0;
      }else{
        hoveredNone++;
      };
      if (hoveredEdit === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "Text Editor";
        hoveredNone = 0;
      }else{
        hoveredNone++;
      };
      if (hoveredSB === true) {
        appSelector.style.display = "block";
        appSelector.innerText = "About:Blank Creator";
        hoveredNone = 0;
      }else{
        hoveredNone++;
      };
      if(hoveredNone === 8){
        appSelector.innerText === ''
        appSelector.style.display = "none";
        hoveredNone = 0;
      }
  });
  //pre-open
if(window.location.href.includes("?app=")){
    let appAr = window.location.href.split(`?app=`);
    swapStage();
    if(appAr[1] === "exFr"){
        filterIcon.click();
    }else{
        if(appAr[1].toLowerCase === "home"){
            console.log("Opened Home");
        }else{
            openApp(appAr[1]);
        }
    }
};
//event listener
document.addEventListener("keydown", (event) => {
    if(event.keyCode === 81 && event.ctrlKey){
        swapStage();
    };
    if (event.keyCode === 77 && event.ctrlKey) {
        momazos();
    }
    if(textOpen === true){
        if(event.keyCode === 83 && event.ctrlKey){
            saveTextAsFile();
            event.preventDefault();
        }
        if(event.keyCode === 79 && event.ctrlKey){
            uploadFileInp.click();
            event.preventDefault();
        }
    }else{
        //disable ctrl + s and ctrl + o keybinds to prevent saving of the html doc
        if(event.keyCode === 83 && event.ctrlKey){
            event.preventDefault();
        }
        if(event.keyCode === 79 && event.ctrlKey){
            event.preventDefault();
        }
    }
});
//contextmenu
let contextMenuOpen = false;
let contextMenu = document.querySelector(`contextmenu`);
contextMenu.style.opacity = 0;
document.addEventListener("contextmenu", (event) => {
    if (currentS === 2) {
        event.preventDefault();
        if (contextMenuOpen) {
            contextMenuOpen = false;
            contextMenu.style.opacity = 0;
            setTimeout(() => {
                contextMenu.style.display = `none`;
            }, 210);
        } else {
            contextMenuOpen = true;
            contextMenu.style.left = event.clientX + "px";
            if(((screen.height / 2) - 20) > event.clientY){
                contextMenu.style.top = event.clientY + "px";
            }else{
                contextMenu.style.top = (event.clientY - 398) + "px";
            }
            contextMenu.style.display = `flex`;
            setTimeout(() => {
                contextMenu.style.opacity = 1;
            }, 100);
        }
    }
});
document.addEventListener(`click`, (event) => {
    if (contextMenuOpen && isHover(contextMenu) === false) {
        contextMenuOpen = false;
        contextMenu.style.opacity = 0;
        setTimeout(() => {
            contextMenu.style.display = `none`;
        }, 210);
    }
})
let inspectCM = g(`inspectUtilityCM`);
let reloadCM = g(`reloadUtilityCM`);
let dupeTabCM = g(`dupeTabCM`);
let abCloakCM = g('abCloakCM');
let switchStageCM = g('switchStageCM');
let openGmCM = g('openGameCM');
let openClkCM = g('openClkCM');
let openInfoCM = g('openInfoCM');
let uglyCM = g('uglyCM');
let pageDestroyCM = g('pageDestroyCM');
let Page3dCM = g('3dPageCM');

inspectCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    eval(`(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init(); eruda.show()} })();`);
}
reloadCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    window.onbeforeunload = () => {};
    let array = window.location.href.split("/")
    array = array.splice(0, 3);
    let url = array.join().replaceAll(",", "/");
   location.replace(url + "?app=home");
}
dupeTabCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    let array = window.location.href.split("/")
    array = array.splice(0, 3);
    let url = array.join().replaceAll(",", "/");
   window.open(url + "?app=home");
}
switchStageCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    swapStage();
}
abCloakCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    let win = window.open();
    win.document.body.style.padding = 0;
    win.document.body.style.margin = 0;
    win.document.write(`<head><title>Home</title> <link rel="shortcut icon" href="https://ssl.gstatic.com/classroom/favicon.png" type="image/x-icon">  </head><body><iframe style="border: none; position: fixed; width: 100%; height: 100%; top: 0; right: 0;" src="${window.location.href}"></iframe></body>`)
}


uglyCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    (function(){var elems=document.getElementsByTagName('*');for(var i = 0; i<elems.length;i++){elems[i].style.fontFamily='Comic Sans MS';elems[i].style.fontSize=Math.random()*75+'px';elems[i].style.color='#'+Math.random().toString(16).slice(2, 8);elems[i].style.backgroundColor='#'+Math.random().toString(16).slice(2,8)}})();document.onclick=function(){(function(){var d=0;setInterval(function(){document.body.style['-webkit-transform']= 'rotate('+ d +'deg)';d+=1},100)}());};
}
pageDestroyCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    (function(){
       var s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);});
}
Page3dCM.onclick = () => {
    contextMenuOpen = false;
    contextMenu.style.opacity = 0;
    setTimeout(() => {
        contextMenu.style.display = `none`;
    }, 210);
    (function(){var js=document.body.appendChild(document.createElement('script'));js.onerror=function(){alert('Sorry, the script could not be loaded.')};js.src='https://rawgit.com/Krazete/bookmarklets/master/tri.js'})();
}
//inspect
//document.onkeydown = (e) => {if (e.ctrlKey && e.shiftKey && e.key == 'I') {eval(`(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init(); eruda.show()} })();`);}if (e.ctrlKey && e.shiftKey && e.key == 'C') {eval(`(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init(); eruda.show()} })();`);}if (e.ctrlKey && e.shiftKey && e.key == 'J') {eval(`(function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init(); eruda.show()} })();`);}}
