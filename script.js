// Swiper Initialization
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ScrollReveal Initialization
ScrollReveal().reveal('.swiper', { delay: 400 });

// GSAP Animations
gsap.from('.bg-gradient-animation', {
  duration: 10,
  ease: 'none',
  backgroundSize: '100% 100%',
  repeat: -1,
  yoyo: true
});
