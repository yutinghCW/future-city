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
	var iPad = navigator.userAgent.match(/iPad/i) != null;
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

    $(window).on('scroll', function() {
        var scorll = window.pageYOffset;
        var articleBodyTop = $('.article__body').offset().top;
        var articleBodyHeight = $('.article__body').outerHeight();
        var articleFootTop = $('.article__foot').offset().top;
    
        if ( (scorll > articleBodyTop) && (scorll <= (articleFootTop - height + 100 )) ) {
            $('.article__share').addClass('show');
        } else {
            $('.article__share').removeClass('show');
        }
        if ( (scorll > (articleBodyTop + (articleBodyHeight/2) )) && (scorll <= (articleFootTop - height + 100 )) ) {
            $('.article__next').addClass('show');
            $('.article__share').addClass('next--show');
        } else {
            $('.article__next').removeClass('show');
            $('.article__share').removeClass('next--show');
        }
        if ( scorll > (articleFootTop - height + 100 ) ) {
            $('.article__share, .article__next').removeClass('show');
        }
    });
});