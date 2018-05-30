jQuery(document).ready(function($) {

    $('#leave-reviews .leave-review-option a').click(function(){
        event.preventDefault();

        if($(this).text() == 'No' ){
            $('.leave-review-we-tried').show().animate({opacity: '1', top: '0'});
        } else if($(this).text() == 'Yes') {
            $('.leave-review-google').show().animate({opacity: '1', top: '0'});
        }
    });

    $('#leave-reviews .leave-review-google a').click(function(){
        event.preventDefault();

        if($(this).text() == 'No' ){
            $('.leave-review-yelp').show().animate({opacity: '1', top: '0'});
        } else if($(this).text() == 'Yes'){
            $('.yes-google').show().animate({opacity: '1', top: '0'});
        }
    });

    $('#leave-reviews .leave-review-yelp a').click(function(){
        event.preventDefault();

        if($(this).text() == 'No' ){
            $('.leave-review-other').show().animate({opacity: '1', top: '0'});
        } else if($(this).text() == 'Yes') {
            $('.yes-yelp').show().animate({opacity: '1', top: '0'});
        }
    });

    $('#leave-reviews .option a[value="back"]').click(function(){
        event.preventDefault();
        $(this).parent().parent().animate({opacity: '0', top: '-16rem'}, function () {
            $(this).hide();
        });
    });

});