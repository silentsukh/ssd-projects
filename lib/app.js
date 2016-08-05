(function() {
    function bodyClick(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    	$('.main-content').off('click', bodyClick);
    }
    $(".navbar-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");

        $('.main-content').on('click', bodyClick);
    });
    $('.featured-section .panel').click(function(e){
    	location.href = $(this).data('url');
    });
    $('.scrollToTop').click(function(e){
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: 0
    	}, 500);
    })
    $(window).on('scroll', function(e){
    	if ($(this).scrollTop() != 0) {
    		$('.scrollToTop').addClass('fadeIn');
    	} else {
    		$('.scrollToTop').removeClass('fadeIn');
    	}
    });

})();