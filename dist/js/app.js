//Type Effect

//Hamburger
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelectorAll(".menu-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navItems.forEach(item =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Smooth Scroll
const scrollUp = document.querySelector(".scroll-top");
scrollUp.addEventListener("click", smoothScroll);

function smoothScroll(event) {
  event.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}
