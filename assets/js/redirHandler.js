document.addEventListener("keydown", (event) => {
    if(event.key === "q" && event.ctrlKey){
        let array = window.location.href.split("/")
        array = array.splice(0, 3);
        let url = array.join().replaceAll(",", "/");
        location.replace(url + "?app=home");
    }
    if(event.key === "s" && event.ctrlKey){
        event.preventDefault();
    }
    if(event.key === "o" && event.ctrlKey){
        event.preventDefault();
    }
});