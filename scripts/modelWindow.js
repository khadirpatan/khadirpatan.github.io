var model = document.getElementById('myModel');

showModel = () => {
    model.style.display = "block";
}

closeModel = () => {
    model.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == model) {
        model.style.display = "none";
    }
}
