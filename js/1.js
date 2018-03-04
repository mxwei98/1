jQuery(document).ready(function($) {
	$('.khoi p').slideUp();
	$('.tieude').click(function(event) {
		$(this).next().slideToggle(400);
	});
;});