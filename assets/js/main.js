/* Hello World */

console.log('Jekyll Bootstrap - https://github.com/dpstrange/jekyll-bootstrap')

/* Light Mode Switch */

var lightSwitch = document.getElementById("lightSwitch");

if (lightSwitch) {
    initTheme();

    lightSwitch.addEventListener("change", function(event) {
        resetTheme();
    });

    function initTheme() {
        var lightThemeSelected =
            localStorage.getItem("lightSwitch") !== null &&
            localStorage.getItem("lightSwitch") === "light";
        lightSwitch.checked = lightThemeSelected;
        lightThemeSelected
            ? document.body.setAttribute("data-theme", "light")
            : document.body.removeAttribute("data-theme");
    }

    function resetTheme() {
        if (lightSwitch.checked) {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("lightSwitch", "light");
        } else {
            document.body.removeAttribute("data-theme");
            localStorage.removeItem("lightSwitch");
        }
    }
}

/* Anchor.js */

anchors.options = {
    icon: '#'
};
anchors.add('.anchors h1, .anchors h2, .anchors h3, .anchors h4, .anchors h5, .anchors h6');

/* Externalize Links */

$(document).ready(function(){
    // resolve external links in new tab
    $('a[href^="http://"], a[href^="https://"]').not('a[href*="'+location.hostname+'"]').attr('target','_blank').addClass("external");
});