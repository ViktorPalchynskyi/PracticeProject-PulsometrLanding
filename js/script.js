
$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1000,
      cssEase: 'linear',
      nextArrow: `<button type="button" class="slick-next"><img src="../img/slider/right_arrow.png" alt="" /></button>`,
      prevArrow: `<button type="button" class="slick-prev"><img src="../img/slider/left_arrow.png" alt="" /></button>`,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               dots: true,
               arrows: false
            }
         }]
   });
}); 