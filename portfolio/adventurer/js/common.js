$(function() {

		$("#carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
	$("#review_carousel").owlCarousel({
		navigation: false,
		pagination: true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true
	});

	// JQuery Accordion
	$('.accordion h3:first').addClass('active');
	$('.accordion p:not(:first)').hide();
	$(document).on('click', '.accordion h3', function(){
		$(this).next('p').slideDown(500)
		.siblings('p:visible').slideUp(500);
		$(this).addClass("active");
		$(this).siblings('h3').removeClass("active");
	});


});
