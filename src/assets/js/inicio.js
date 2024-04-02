var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto', 
    spaceBetween: 30,
    speed: 800, 
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });