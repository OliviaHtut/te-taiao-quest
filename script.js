// Using Swiperjs 
new Swiper('.card-wrapper', {
  loop: true,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
        slidesPerView: 1
    },
    
    1024:{
        slidesPerView:2
    }

  }
  

});