$(function() {

	$("#owl-carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	$('.masonry').masonry({
		itemSelector: '.portfolio_item',
		columnWidth: '.grid-sizer'
	});
	$('.blog_main').masonry({
		itemSelector: '.blog_post',
		columnWidth: '.grid-sizer'
	});

});
