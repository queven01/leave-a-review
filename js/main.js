jQuery(document).ready(function($) {
$('#reviews input[name="leave_review"]').click(function() {
var leave_review_val = $('#reviews input[name="leave_review"]:checked').val();

$('#reviews .leave_review, #reviews .google, #reviews .yelp').hide();
$('#reviews .leave_review_'+leave_review_val).show();

$('#reviews .leave_review input:checked').removeAttr('checked');
});

$('#reviews input[name="google"]').click(function() {
var google_val = $('#reviews input[name="google"]:checked').val();
$('#reviews .google').hide();

if($('#reviews .google.google_N').hasClass('skip')) {
$('#reviews .google.google_N > h3, #reviews .google.google_N > p').hide();
$('#reviews .google.google_N').css({background: 'none'});
$('#reviews .yelp_N').show();
}

$('#reviews .google_'+google_val).show();

$('#reviews .google input:checked').removeAttr('checked');
});

$('#reviews input[name="yelp"]').click(function() {
var yelp_val = $('#reviews input[name="yelp"]:checked').val();
$('#reviews .yelp').hide();
$('#reviews .yelp_'+yelp_val).show();

$('#reviews .yelp input:checked').removeAttr('checked');
});
});