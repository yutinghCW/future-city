var width = $(window).width(),
    height = $(window).height(),
    hamClick = 0,
    searchClick = 0;
var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
var android = (navigator.userAgent.match(/android/i) != null);
var iPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || navigator.platform === 'iPad';
var isIE = isIE = (navigator.userAgent.indexOf("MSIE") != -1),
    isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
    isWindows = window.navigator.userAgent.indexOf("Windows")!= -1;

function focusInput() {
    setTimeout(function(){
        document.getElementById("searchInput").focus();
    }, 500)
}

$(function(){
	var headerHeight = $('header').outerHeight();
    if ( iPhone|android|iPad ) {
        $('body').addClass('device-mobile');
        $('.tooltip').addClass('tooltip--disabled');
    }
    $('#btn-hamburger').on('click', function() {
        hamClick < 1 ? hamClick++ : hamClick = 0;
        $(this).toggleClass('icon-close');
        $('#menu').slideToggle();
        $('#search').slideUp();
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
        $('header .sns__group > li.member > .slide').slideUp();
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
        $('header .sns__group > li.member > .slide').slideUp();
        hamClick = 0;
        if (searchClick == 0) {
            $('body, .touch__close--black').removeClass('opened');
            console.log('c');
        } else {
            $('body, .touch__close--black').addClass('opened');
            console.log('d');
        }
    });
    $('.touch__close--black').on('click', function() {
        $('#search, #menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
        $('body, header, .touch__close--black').removeClass('opened');
        hamClick = 0;
        searchClick = 0;
    });
    $('header .sns__group > li.member > button').on('click', function() {
        $(this).siblings('.slide').slideToggle();
        $(this).parent('li.member').siblings('li.member').children('.slide').slideUp();
        $('body, .touch__close--black').removeClass('opened');
        $('#btn-hamburger').removeClass('icon-close');
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
        $('#search, #menu').slideUp();
        hamClick = 0;
        searchClick = 0;
    });

    // Initial state
    var scrollPos = 0;
    // adding scroll event
    window.addEventListener("scroll", function () {
        // detects new state and compares it with the new one
        if (document.body.getBoundingClientRect().top > scrollPos) {
            $("body").addClass("scroll--up");
            $("body").css("padding-top", headerHeight);
        } else {
            $("body").removeClass("scroll--up");
            $("body").css("padding-top", 0);
        }
        // saves the new position for iteration.
        scrollPos = document.body.getBoundingClientRect().top;
    });
});
