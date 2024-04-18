let toggler = document.getElementById("switch1")

toggler.addEventListener('click', () => {
    if (toggler.checked === true) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
    }
});