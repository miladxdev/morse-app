const oceanTheme = document.getElementById("ocean");
const darkTheme = document.getElementById("dark");

function setTheme() {
  let currentTheme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", currentTheme || "dark");
}

setTheme();

oceanTheme.addEventListener("click", () => {
  localStorage.setItem("theme", "ocean");
  setTheme();
});

darkTheme.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  setTheme();
});
