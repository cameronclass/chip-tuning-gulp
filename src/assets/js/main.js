const headerOpenBtn = document.querySelector(".header-open-menu-js");
const headerMenu = document.querySelector(".header__menu_block");
const headerCloseMenu = document.querySelector(".header__menu_block");

headerOpenBtn.onclick = () => {
  headerMenu.classList.add("active");
};

headerCloseMenu.onclick = () => {
  headerMenu.classList.remove("active");
};

new Swiper(".projects__slider", {
  navigation: {
    nextEl: ".projects .swiper-button-next",
    prevEl: ".projects .swiper-button-prev",
  },
  loop: false,
  keyboard: true,
});

new Swiper(".blog__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".blog .swiper-button-next",
    prevEl: ".blog .swiper-button-prev",
  },

  loop: false,
  keyboard: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

new Swiper(".reviews__slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".reviews .swiper-button-next",
    prevEl: ".reviews .swiper-button-prev",
  },

  loop: false,
  keyboard: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

new Swiper(".videos__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".videos .swiper-button-next",
    prevEl: ".videos .swiper-button-prev",
  },

  loop: false,
  keyboard: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
