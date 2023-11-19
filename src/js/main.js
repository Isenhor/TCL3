document.addEventListener("DOMContentLoaded", function () {
  // Owl Carousel Settings
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });

  // Burger
  const burger = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#menu");
  const bodyEl = document.body;

  burger.addEventListener("click", function () {
    if (this.classList.contains("nav-toggle--active")) {
      this.classList.remove("nav-toggle--active");
      bodyEl.classList.remove("lock");
      menu.classList.remove("nav--active");
    } else {
      this.classList.add("nav-toggle--active");
      bodyEl.classList.add("lock");
      menu.classList.add("nav--active");
    }
  });

  menu.addEventListener("click", () => {
    burger.classList.remove("nav-toggle--active");
    bodyEl.classList.remove("lock");
    menu.classList.remove("nav--active");
  });

  // Sticky menu
  const mainHeader = document.getElementById("header");
  const headerHeight = mainHeader.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
      mainHeader.classList.add("fixed");
    } else {
      mainHeader.classList.remove("fixed");
    }
  });

  // Back-to-top
  const backTopBtn = document.querySelector("#backtop");
  backTopBtn.style.opacity = 0;
  document.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      backTopBtn.style.opacity = 1;
    } else {
      backTopBtn.style.opacity = 0;
    }
  });
});
