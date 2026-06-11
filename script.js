
const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".navbar");

openBtn.addEventListener("click", () => {
       menu.classList.add("nav-open");
       nav.classList.add("navback")
       openBtn.style.display = "none";
       closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
       menu.classList.remove("nav-open");
       nav.classList.remove("navback")
       closeBtn.style.display = "none";
       openBtn.style.display = "block";
});

const links = document.querySelectorAll(".menu-items");

links.forEach(link => {
       link.addEventListener("click", () => {
              menu.classList.remove("nav-open");

              closeBtn.style.display = "none";
              openBtn.style.display = "block";
       });
});