let toggle = document.getElementById('toggleDark');

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

// darkmood
toggle.onclick = function () {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        toggle.classList = "fa-solid fa-sun";
    } else {
        toggle.classList = "fa-solid fa-moon"
    }
};

// just test

let portfolioCard = document.querySelectorAll(".portfolio-card");
let portfolioimage = document.querySelectorAll(".portfolio-card img")

//nav hide

navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})
let nav = document.querySelector(".navbar")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")
    }
}

// slick slider with JQUERY

$('.testimonias-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
              