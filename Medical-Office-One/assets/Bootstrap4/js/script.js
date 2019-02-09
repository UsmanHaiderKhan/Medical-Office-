//console.log("usman");

/*================== Read More Text ==================*/
$(function () {
    var showChar = 100;
    var moretext = "...";
    var lesstext = "...";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content +
                '</span><a href="" class="morelinks link-blue" >' + moretext + "<span class='fas fa-arrow-right'></span>" + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 100;
    var moretext = "...";
    var lesstext = "...";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content +
                '</span><a href="" class="morelinkss link-blue" >' + moretext + "<span class='fas fa-arrow-right'></span>" + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinkss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-link').on('click',
        function () {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        });
});

/* ==================== Js Function to give the class on Scroll ================== */
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("nav").addClass("fixed-top sleep");
        } else {
            $("nav").removeClass("fixed-top sleep");
        }
    });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 6,
        showItems: 3

    });

});

/*===================== Date Picker Function ======================*/
$(function () {
    $("#datepicker").datepicker();
});
/*===================== Owl Carousel Slider ======================*/
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        //autoplay: true,
        margin: 15,
        dots: true,
        responsiveClass: true,
        slideBy: '3',
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});
