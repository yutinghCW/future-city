$(function(){
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

    var scrollableElement = document.body; //document.getElementById('scrollableElement');
    scrollableElement.addEventListener('wheel', checkScrollDirection);
    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            $("body").addClass("scroll--up");
            $("body").css("padding-top", headerHeight);
        } else {
            $("body").removeClass("scroll--up");
            $("body").css("padding-top", 0);
        }
    }
    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }

    $(window).on('scroll', function() {
        var scorll = window.pageYOffset;
        var articleBodyTop = $('.article__body').offset().top;
        var articleBodyHeight = $('.article__body').outerHeight();
    
        if ( scorll > articleBodyTop ) {
            $('.article__share').addClass('show');
        } else {
            $('.article__share').removeClass('show');
        }
        if ( scorll > (articleBodyTop + (articleBodyHeight/2) ) ) {
            $('.article__next').addClass('show');
            $('.article__share').addClass('next--show');
        } else {
            $('.article__next').removeClass('show');
            $('.article__share').removeClass('next--show');
        }
    });
});