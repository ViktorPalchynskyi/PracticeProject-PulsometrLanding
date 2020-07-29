
$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 500,
      cssEase: 'linear',
      fade: true,
      nextArrow: `<button type="button" class="slick-next"><img src="img/slider/right_arrow.png" alt="" /></button>`,
      prevArrow: `<button type="button" class="slick-prev"><img src="img/slider/left_arrow.png" alt="" /></button>`,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               dots: true,
               arrows: false
            }
         }]
   });
   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
   });

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', e => {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });
   };
   toggleSlide('.catalog-item__link')
   toggleSlide('.catalog-item__back')
}); 