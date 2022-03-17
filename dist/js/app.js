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

document.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

//Smooth Scroll
const scrollDown = document.querySelector(".scroll-down");
const scrollUp = document.querySelector(".scroll-top");

function smoothScroll(event) {
  event.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function smoothScrollDown(event) {
  event.preventDefault();
  window.scroll({
    top: 800,
    left: 0,
    behavior: "smooth",
  });
}

scrollDown.addEventListener("click", smoothScrollDown);

scrollUp.addEventListener("click", smoothScroll);

function smoothScroll(event) {
  event.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
