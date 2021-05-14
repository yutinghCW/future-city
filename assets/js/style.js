var width = $(window).width(),
    height = $(window).height(),
    hamClick = 0,
    searchClick = 0;
var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
var android = (navigator.userAgent.match(/android/i) != null);
var iPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || navigator.platform === 'iPad';

function clipboard() {
    var copyText = document.getElementById("copy__input");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $('#copied').fadeIn();
    setTimeout(function(){
        $('#copied').fadeOut();
    }, 1000)
}

function focusInput() {
    setTimeout(function(){
        document.getElementById("searchInput").focus();
    }, 500)
}

$(function(){
	var headerHeight = $('header').outerHeight();

    if ( iPhone|android|iPad ) {
        $('.tooltip').addClass('tooltip--disabled');
    }

    $('#btn-hamburger').on('click', function() {
        hamClick < 1 ? hamClick++ : hamClick = 0;
        $(this).toggleClass('icon-close');
        $('#menu').slideToggle();
        $('#search').slideUp();
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
        searchClick = 0;
        if (hamClick == 0) {
            $('body, .touch__close--black').removeClass('opened');
            console.log('a');
        } else {
            $('body, .touch__close--black').addClass('opened');
            console.log('b');
        }
    });
    $('#btn-close-nav').on('click', function() {
        $('#menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
        $('body, .touch__close--black').removeClass('opened');
    });
    $('#btn-search').on('click', function() {
        searchClick < 1 ? searchClick++ : searchClick = 0;
        $(this).toggleClass('icon-search icon-close');
        $('#search').slideToggle();
        $('#menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
        hamClick = 0;
        if (searchClick == 0) {
            $('body, .touch__close--black').removeClass('opened');
            console.log('c');
        } else {
            $('body, .touch__close--black').addClass('opened');
            console.log('d');
        }
    });
    $('#btn-newsletter, .message__close, .touch__close--black').on('click', function() {
        $('#search, #menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
        hamClick = 0;
        searchClick = 0;
    });
    $('#btn-newsletter').on('click', function() {
        $('#newsletter').show();
        $('.touch__close--black').addClass('opened');
        $('body, header').addClass('opened');
    });
    $('.message__close, .touch__close--black').on('click', function() {
        $('.message').hide();
        $('body, header, .touch__close--black').removeClass('opened');
    });
});