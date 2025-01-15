const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const year = today.getFullYear();

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: <span>${document.lastModified}</span>`;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))