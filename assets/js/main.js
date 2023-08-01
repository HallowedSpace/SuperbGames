//GEBI
function g(e){
    return document.getElementById(e);
}
//variables
let article = g('article');

//event listener
document.addEventListener("keydown", (event) => {
    if(event.keyCode === 81 && event.ctrlKey){
        alert("sus");
    }
})