const scrollTop = document.querySelector(".scrolltop");
const headerEl = document.querySelector(".header-wrapper");


window.addEventListener("scroll", function () {
    let yAxis = window.scrollY;
    if (yAxis >= 100) {
      scrollTop.classList.remove("hidden");
    } else {
      scrollTop.classList.add("hidden");
    }
  });
  
  window.addEventListener("scroll", function () {
    let yAxis = window.scrollY;
    if (yAxis >= 100) {
      headerEl.classList.add("sticky-nav");
    } else {
      headerEl.classList.remove("sticky-nav");
    }
  });
