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
    if ( android ) {
        $('body').addClass('android__mode');
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
    $('#btn-newsletter, #btn-newsletter-m, .message__close, .touch__close--black').on('click', function() {
        $('#newsletter, #newsletter-conform').hide();
        $('#search, #menu').slideUp();
        $('#btn-hamburger').removeClass('icon-close');
        $('#btn-search').removeClass('icon-close').addClass('icon-search');
        hamClick = 0;
        searchClick = 0;
    });
    $('#btn-newsletter, #btn-newsletter-m').on('click', function() {
        $('#newsletter').show();
        $('.touch__close--black').addClass('opened');
        $('body, header').addClass('opened');
    });
    $('.message__close, .touch__close--black').on('click', function() {
        $(this).parent().parent('.message').hide();
        $('body, header, .touch__close--black').removeClass('opened');
    });
    $('.btn__close').on('click', function() {
        $(this).parent().parent().parent('.message').hide();
        $('body, header, .touch__close--black').removeClass('opened');
    });
    $('header .sns__group > li.member > button').on('click', function() {
        $(this).children('.icon').toggleClass('icon-close');
        $(this).siblings('.slide').slideToggle();
        $(this).parent('li.member').siblings('li.member').children('.slide').slideUp();
        $(this).parent('li.member').siblings('li.member').children('button').children('.icon').removeClass('icon-close');
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

    // ?????? button ?????? disabled
    $('#newsletter-input').on('change keyup copy paste cut', function() {
        if (!this.value) {
            $(this).siblings().attr('disabled', true);
        } else {
            $(this).siblings().attr('disabled', false);
        }
    });
    // ?????? mail ???????????????????????????????????? form
    $('#newsletter-submit').on('click', function() {
        var mail = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test($(this).siblings('input').val());
        if(!mail) {
            $(this).parent('.form').addClass('form--error');
            $(this).siblings('.form__helper--highlight').text('???????????? e-mail ????????????');
            return false;
        } else {
            $(this).parent('.form').removeClass('form--error');
            $(this).siblings('.form__helper--highlight').text('???');
            $('#newsletter').hide();
            $('#newsletter-conform').show();
        }
    });
});