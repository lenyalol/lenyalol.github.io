$(function() {

	$("#carousel").owlCarousel({
    navigation : true,
    slideSpeed : 600,
    paginationSpeed : 400,
    singleItem:true,
    navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
  $("#carousel_light").owlCarousel({

    navigation : true, // Show next and prev buttons
    slideSpeed : 600,
    paginationSpeed : 400,
    singleItem:true,
    navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    
  });

	$('.accordion h2:first').addClass('active');
	$('.accordion p:not(:first)').hide();
	$(document).on('click', '.accordion h2', function(){
		$(this).next('p').slideDown()
		.siblings('p:visible').slideUp();
		$(this).addClass("active");
		$(this).siblings('h2').removeClass("active");
	});

	$('.masonry').masonry({
		itemSelector: '.portfolio_item'
	});

});
