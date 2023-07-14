$(document).ready(function() {
	$('.header__play').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

$(function () {
	var mixer = mixitup(".blog__list");
  
	$(".blog__filter-btn").on("click", function () {
	  $(".blog__filter-btn").removeClass("blog__filter-btn--active")
	  $(this).addClass("blog__filter-btn--active")
	})
 
  
//   $(".feedback__slider").slick({
// 	arrows: false,
// 	dots: true,
//   })


  $('.slider__slider').slick({

  });

});


