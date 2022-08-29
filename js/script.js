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
    centerMode: true,
    centerPadding: '450px',
    slidesToShow: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});