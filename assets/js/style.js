$(function(){
    var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
	var android = (navigator.userAgent.match(/android/i) != null);
	var iPad = navigator.userAgent.match(/iPad/i) != null;

    if ( iPhone|android|iPad ) {
        $('.tooltip').addClass('tooltip--disabled');
    }

    $('#btn-hamburger').on('click', function() {
        $(this).toggleClass('icon-close');
        $('#menu').slideToggle();
        $('#search').slideUp();
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
    });
    $('#btn-search').on('click', function() {
        $(this).toggleClass('icon-search icon-close');
        $('#search').slideToggle();
        $('#menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
    });
});