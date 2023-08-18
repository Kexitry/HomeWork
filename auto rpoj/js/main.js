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
 
  
  $(".feedback__slider").slick({
	arrows: false,
	dots: true,
	Infinite: true,
	AppendArrows: $(".feedback__slider-arrow"),
	appendDots: $('.feedback__dots')
  })
  $('.slider-prev').on('click', function(e) {
	e.preventDefault()
	$('.feedback__slider').slick('slickPrev')
  })
  $('.slider-next').on('click', function(e) {
	e.preventDefault()
	$('.feedback__slider').slick('slickNext')
  })


});

$(function () {
	$(".accord__link").on("click", function (e) {
	  e.preventDefault();
	  if ($(this).hasClass("accord__link--active")) {
		$(this).removeClass("accord__link--active");
		$(this).children(".accord__item-text").slideUp();
	  } else {
		$(".accord__link").removeClass(
		  "accord__link--active"
		);
		$(".accord__item-text").slideUp();
  
		$(this).addClass("accord__link--active");
		$(this).children(".accord__item-text").slideDown();
	  }
	});
  });


