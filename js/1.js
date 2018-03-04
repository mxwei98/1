jQuery(document).ready(function($) {
	if ($('.menu').offset().top > 140)
			$('.menu').addClass('mauhong');
	$(window).scroll(function(event) {
		if ($('.menu').offset().top > 140)
			$('.menu').addClass('mauhong');
		else $('.menu').removeClass('mauhong');
	});
	$('.right_menu li').on('click', function(event) {
		var id = $(this).data("id") ;
		$('html,body').animate({scrollTop : $(id).offset().top-80},1000,"easeInOutExpo");
	});
;});