$(function(){
    var width = $(window).width();
    var height = $(window).height();
	var headerHeight = $('header').outerHeight();

    $('.article__right').css('padding-top', ($('.article__head').outerHeight() + $('.article__body').outerHeight()/2))

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