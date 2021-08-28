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

// load data from local storage
element("#training-checkbox").checked = JSON.parse(localStorage.getItem("training-checkbox"));
if (JSON.parse(localStorage.getItem("training-checkbox"))) {
  element(".practice").style.opacity = "0.8";
} else {
  element(".practice").style.opacity = "0.1";
}

element("#mute-checkbox").checked = JSON.parse(localStorage.getItem("mute-checkbox"));
element("#lowercase-checkbox").checked = JSON.parse(localStorage.getItem("lowercase-checkbox"));

if (!JSON.parse(localStorage.getItem("cheat"))) {
  cheatCode.style.height = "0";
  cheatCode.style.opacity = "0";
} else {
  cheatCode.style.height = "100%";
  cheatCode.style.opacity = "1";
}

if (!JSON.parse(localStorage.getItem("setting"))) {
  settings.style.height = "0";
  settings.style.opacity = "0";
  localStorage.setItem("setting", "false");
} else {
  settings.style.height = "100%";
  settings.style.opacity = "1";
  localStorage.setItem("setting", "true");
}

element("#score").innerHTML = localStorage.getItem("score");
element(".xp").style.width = (score % 100) + "%";
// save toggle changes to local storage
element("#training-checkbox").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("training-checkbox", "true");
  } else {
    localStorage.setItem("training-checkbox", "false");
  }
});

element("#mute-checkbox").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("mute-checkbox", "true");
  } else {
    localStorage.setItem("mute-checkbox", "false");
  }
});

element("#lowercase-checkbox").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("lowercase-checkbox", "true");
  } else {
    localStorage.setItem("lowercase-checkbox", "false");
  }
});

element("#score").addEventListener("change", function () {
  localStorage.setItem("score", this.innerHtml);
});
