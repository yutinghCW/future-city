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

    // 判斷 button 是否 disabled
    $('#newsletter-input').on('change keyup copy paste cut', function() {
        if (!this.value) {
            $(this).siblings().attr('disabled', true);
        } else {
            $(this).siblings().attr('disabled', false);
        }
    });
    // 判斷 mail 格式及隱私權後，是否繼續 form
    $('#newsletter-submit').on('click', function() {
        var mail = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test($(this).siblings('input').val());
        if(!mail) {
            $(this).parent('.form').addClass('form--error');
            $(this).siblings('.form__helper--highlight').text('您填寫的 e-mail 格式有誤');
            return false;
        } else {
            $(this).parent('.form').removeClass('form--error');
            $(this).siblings('.form__helper--highlight').text('　');
            $('#newsletter').hide();
            $('#newsletter-conform').show();
        }
    });
});