function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("data-light-mode", "dark");
}

function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") 
    {
    localStorage.lightMode = "light";
    app.setAttribute("data-light-mode", "light");
    } 
    else 
    {
    localStorage.lightMode = "dark";
    app.setAttribute("data-light-mode", "dark");
    }
    console.log("lightMode = " + localStorage.lightMode);
}

document.getElementById('dark-mode-btn').addEventListener('click', function (e) {
    const toggler = document.body;
    toggler.classList.toggle('dark-mode');
    const target = e.target;
    target.classList.toggle('fa-moon');
    target.classList.toggle('fa-sun');
});
