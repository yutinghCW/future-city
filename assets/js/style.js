function clipboard() {
    var copyText = document.getElementById("copy__input");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $('#copied').fadeIn();
    setTimeout(function(){
        $('#copied').fadeOut();
    }, 2000)
}

function focusInput() {
    setTimeout(function(){
        document.getElementById("searchInput").focus();
    }, 500)
}

$(function(){
    var width = $(window).width();
    var height = $(window).height();
    var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
	var android = (navigator.userAgent.match(/android/i) != null);
	var iPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || navigator.platform === 'iPad';
	var headerHeight = $('header').outerHeight();

    if ( iPhone|android|iPad ) {
        $('.tooltip').addClass('tooltip--disabled');
    }

    $('#btn-hamburger').on('click', function() {
        $(this).toggleClass('icon-close');
        $('#menu').slideToggle();
        $('#search').slideUp();
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
    });
    $('#btn-close-nav').on('click', function() {
        $('#menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
    });
    $('#btn-search').on('click', function() {
        $(this).toggleClass('icon-search icon-close');
        $('#search').slideToggle();
        $('#menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
    });
    $('#btn-newsletter').on('click', function() {
        $('#newsletter').show();
        $('.message__black').addClass('opened');
    });
    $('.message__close, .message__black').on('click', function() {
        $('.message').hide();
        $('.message__black').removeClass('opened');
    });
});