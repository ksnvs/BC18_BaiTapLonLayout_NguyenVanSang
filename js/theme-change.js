const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

var sunElement = document.querySelector(".fa-sun");
var moonElement = document.querySelector(".fa-moon");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    sunElement.classList.toggle("hide");
    moonElement.classList.toggle("hide");
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  sunElement.classList.toggle("hide");
  moonElement.classList.toggle("hide");
}
toggleSwitch.addEventListener("change", switchTheme, false);
