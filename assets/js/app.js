let bodyTag = document.body;
let headerTag = document.querySelector("header");
let headerName = document.querySelector("#header-name h1");
let contentName = document.getElementById("content-name");
let contentH1 = document.querySelector("#content-name h1");
let contentH2 = document.querySelector("#content-name h2");
let recentWorkH1 = document.querySelector("#recent-work h1");
let paragrahpCheck = document.getElementById("check");
let darkMode = document.getElementById("light-dark");

function changeThemes() {
  if (darkMode.innerText === "Dark Mode") {
    bodyTag.classList.add("header-dark");
    headerName.classList.add("headername-dark");
    contentH1.classList.add("headername-dark");
    contentH2.classList.add("headername-dark");
    recentWorkH1.classList.add("headername-dark");
    paragrahpCheck.classList.add("headername-dark");
    darkMode.innerHTML = "Light Mode";
  } else if (darkMode.innerText === "Light Mode") {
    bodyTag.classList.remove("header-dark");
    headerName.classList.remove("headername-dark");
    contentH1.classList.remove("headername-dark");
    contentH2.classList.remove("headername-dark");
    recentWorkH1.classList.remove("headername-dark");
    paragrahpCheck.classList.remove("headername-dark");
    darkMode.innerHTML = "Dark Mode";
  }
}

darkMode.addEventListener("click", changeThemes);
