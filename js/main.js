$(function(){
	$(".top__slider").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					dots: false
				}
			}
		]
	});
	
	$(".reviews__slider").slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		fade: false, 
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}
			}, 
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			}, 
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	$(".mobile__menu__bttn").on("click", function(){
		$(".header").find(".menu__list").toggleClass("menu__list--active");
	});
});
