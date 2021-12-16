//Text Effect

//Smooth Scroll
const scrollUp = document.querySelector(".scroll-top");
scrollUp.addEventListener("click", smoothScroll);

function smoothScroll(event) {
  event.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}
