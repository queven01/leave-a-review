$(document).ready(function() {
	var hideGmail = $('.review-gmail .review-content').addClass('hidden');
	var showGmail = $('.review-gmail .review-content').removeClass('hidden');
	var hideFacebook = $('.review-facebook .review-content').addClass('hidden');
	var showFacebook = $('.review-facebook .review-content').removeClass('hidden');
	var hideYelp = $('.review-yelp .review-content').addClass('hidden');
	var showYelp = $('.review-yelp .review-content').removeClass('hidden');
	$('.review-gmail img').mouseover( function() {
		$('.review-gmail .review-content').removeClass('hidden');
		$('.review-facebook .review-content').addClass('hidden');
		$('.review-yelp .review-content').addClass('hidden');
	
	});
	$('.review-facebook img').mouseover( function() {
		$('.review-facebook .review-content').removeClass('hidden');
		$('.review-gmail .review-content').addClass('hidden');		
		$('.review-yelp .review-content').addClass('hidden');
	});
	$('.review-yelp img').mouseover( function() {
		$('.review-yelp .review-content').removeClass('hidden');
		$('.review-gmail .review-content').addClass('hidden');		
		$('.review-facebook .review-content').addClass('hidden');
	});
	$('.social-acct').mouseleave( function() {
		$('.review-gmail .review-content').addClass('hidden');		
		$('.review-facebook .review-content').addClass('hidden');
		$('.review-yelp .review-content').addClass('hidden');		
	});

	$('.review-footer a').click(function() {
		$('.other-acct').toggleClass('hidden');
		
	});
	// 	$('.review-footer a').click(function() {
	// 	$('.other-acct').slideUp('');
		
	// });
	 $(document).on('click', function(event) {
          if (!$(event.target).closest('.review-footer')) {
                $(".sub-list").removeClass("show-menu");
          }
        });

	
});