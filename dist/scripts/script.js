// LoadPage
const loader = document.querySelector('.bg-loader');
const main = document.querySelector('.page');

function initLoader() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => {
        main.style.opacity = 1; 
    }, 50);
  }, 4000);
}
initLoader();

// Menu scroll PC
const navBar = document.querySelector(".nav-desctop");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll',() => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fix-nav-desctop');
    } else {
        navBar.classList.remove('fix-nav-desctop');
    }
});

// Hamburger Mobi
const menuHamburger = document.querySelector('.hamburger');
const menuBtn = document.querySelector('.nav-mobi');
menuHamburger.addEventListener('click', () => {
  menuBtn.classList.toggle("open");
})

// Menu scroll Mobi
const navMobi = document.querySelector(".nav-mobi");
const navHeightMobi = navMobi.getBoundingClientRect().height;
window.addEventListener('scroll',() => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeightMobi) {
        navMobi.classList.add('fix-nav-mobi');
    } else {
        navMobi.classList.remove('fix-nav-mobi');
    }
});

// Current menu scroll mobi
const menuProjectBtn = document.querySelector(".menu-project-btn");
const menuProjectOpen = document.querySelector(".menu-project");
menuProjectBtn.addEventListener('click', () => {
    menuProjectOpen.classList.toggle("current");
});
const menublogBtn = document.querySelector(".menu-blog-btn");
const menublogOpen = document.querySelector(".menu-blog");
menublogBtn.addEventListener('click', () => {
    menublogOpen.classList.toggle("current");
});

// Banner
var swiper = new Swiper(".bannerSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  effect: "fade",
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiperBanner-button-next",
    prevEl: ".swiperBanner-button-prev",
  },
});


// Parallax Text banner
var btnNext = document.querySelector(".swiperBanner-button-next");
var btnPrev = document.querySelector(".swiperBanner-button-prev");
// var slideContent = document.querySelectorAll(".banner-content .content-title");
// var slideNumber = document.querySelectorAll(".swiper-slide .number");

    btnNext.addEventListener("click", transitionSlideNext);
    btnPrev.addEventListener("click", transitionSlidePrev);

    function transitionSlideNext() {
      // Title
      var slideActiveText = document.querySelector(".swiper-slide-active .banner-content .content-title"),
      slidePrevText = document.querySelector(".swiper-slide-prev .banner-content .content-title");

      slidePrevText.classList.remove("playText");
      slideActiveText.classList.add("playText");

      // Note
      var slideActiveTextnote = document.querySelector(".swiper-slide-active .banner-content .content-note1"),
      slidePrevTextnote = document.querySelector(".swiper-slide-prev .banner-content .content-note1");
      
      slidePrevTextnote.classList.remove("playTextnote");
      slideActiveTextnote.classList.add("playTextnote");
      
      // Btn
      var slideActiveTextBtn = document.querySelector(".swiper-slide-active .banner-content .content-btn"),
      slidePrevTextBtn = document.querySelector(".swiper-slide-prev .banner-content .content-btn");
      
      slidePrevTextBtn.classList.remove("playTextBtn");
      slideActiveTextBtn.classList.add("playTextBtn");
    };
    
    function transitionSlidePrev() {
      // Title
      var slideActiveText = document.querySelector(".swiper-slide-active .banner-content .content-title"),
      slidePrevText = document.querySelector(".swiper-slide-next .banner-content .content-title");

      slidePrevText.classList.remove("playText");
      slideActiveText.classList.add("playText");
      
      // Note
      var slideActiveTextnote = document.querySelector(".swiper-slide-active .banner-content .content-note1"),
      slidePrevTextnote = document.querySelector(".swiper-slide-next .banner-content .content-note1");
      
      slidePrevTextnote.classList.remove("playTextnote");
      slideActiveTextnote.classList.add("playTextnote");
      
      // Btn
      var slideActiveTextBtn = document.querySelector(".swiper-slide-active .banner-content .content-btn"),
      slidePrevTextBtn = document.querySelector(".swiper-slide-next .banner-content .content-btn");
      
      slidePrevTextBtn.classList.remove("playTextBtn");
      slideActiveTextBtn.classList.add("playTextBtn");
    };
    
    
// Projects
var swiper = new Swiper(".mySwiperProject", {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiperProject-button-next",
      prevEl: ".swiperProject-button-prev",
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        487: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        488: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        987: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
  });

// Vanilla
// VanillaTilt.init(document.querySelectorAll(".vanilla-about"));


// Parallax
jQuery(document).ready(function() {
  $.stellar();
});
// $('.parallax').parallax({imageSrc: './dist/images/text-1.jpg'});

// SWIPEBOX
$('.swipebox').swipebox();  

// AOS
AOS.init();