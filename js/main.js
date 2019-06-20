$(document).ready(function () {

	$('.burger-opener').on('click', function () {
		$('.nav').toggleClass('show');
		$('.burger-mask').toggleClass('show');
	});

	$('.main-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1250,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 2,
				autoplay: true,
			},
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
			},
		},
		]
	});

	// datepicker
    $( function() {
        $( "#datepicker-hereNew, #datepicker-hereEnd").datepicker({
            minDate: new Date(),
        });
    });
});