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

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 550) {
      $(".navbar").addClass("solid");
      $(".back-to-top").addClass("visible");
    } else {
      $(".navbar").removeClass("solid");
      $(".back-to-top").removeClass("visible");
    }
  });
});
