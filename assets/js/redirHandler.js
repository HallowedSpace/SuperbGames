document.addEventListener("keydown", (event) => {
    if(event.keyCode === 81 && event.ctrlKey){
        let array = window.location.href.split("/")
        array = array.splice(0, 3);
        let url = array.join().replaceAll(",", "/");
        location.replace(url + "?app=home");
    }
    if(event.keyCode === 83 && event.ctrlKey){
        event.preventDefault();
    }
    if(event.keyCode === 79 && event.ctrlKey){
        event.preventDefault();
    }
});