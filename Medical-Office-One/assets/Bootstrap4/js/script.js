//console.log("usman");

/*================== Read More Text ==================*/
$(function () {
    var showChar = 300;
    var moretext = "Learn More" + '<i class="right-circle fas fa-arrow-right fa-sm ml-2" style="font-weight:600"></i>';
    var lesstext = "Learn Less" + '<i class="right-circle fas fa-arrow-left fa-sm text-white ml-2" style="font-weight:600"></i>';
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents" style="display:block"><span>' + hide_content +
                '</span><a href="" class="morelinks learn-text" style="display:block;margin-top:68px">' + moretext + '</a>'
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
    var showChar = 130;
    var moretext = "READ MORE...";
    var lesstext = "READ LESS...";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents" style="display-block"><span> ' + hide_content +
                '</span><a href="#" class="morelinkss read-text" style="display:block;float:right;margin-top:25px;" >' + moretext + '</a>'
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
$(function () {
    var showChar = 120;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-spacess').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents" style="display:block"><span>' + hide_content +
                '</span><a href="" class="morelinksss read-text-1" style="display:block;margin-top:30px;text-align:center">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

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
    var showChar = 120;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-space2').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents" style="display:block"><span>' + hide_content +
                '</span><a href="" class="morelink2 read-text-2" style="display:block;margin-top:30px;text-align:center">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelink2").click(function () {

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
    var showChar = 120;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-space-1').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents" style="display:block"><span>' + hide_content +
                '</span><a href="" class="morelink1 read-text-3" style="display:block;margin-top:30px;text-align:center">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelink1").click(function () {

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

$(function () {
    $('.card-header').on('click',
        function () {
            $('.card-header').removeClass('accordion-color');
            $(this).addClass('accordion-color');
        });
});
$(function () {

});
$(function () {
    $('.media-tab-mt').on('click',
        function () {
            $('.media-tab-mt').removeClass('dark-active');
            $(this).addClass('dark-active');
        });
});
/* ==================== Js Function to give the class on Scroll ================== */
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            //$("nav").addClass("nav-bg-color");
            $("nav").css("background-color", "rgba(255, 255, 255,1)");
            $("nav").css("opacity", "1");
        } else {
            $("nav").css("background-color", "rgba(255, 255, 255,0.702)");
            $("nav").css("opacity", "0.702");
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
        margin: 30,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });
});
/*===================== Owl Carousel Slider ======================*/
$(function () {
    $("#adult").show();
    $("#forensic").hide();
    $("#general").hide();
    $("#acute").hide();
    $("#emergncey").hide();
    $("#radiology").hide();

    $("#adult-click").click((e) => {

        $("#adult").show();
        $("#forensic").hide();
        $("#general").hide();
        $("#acute").hide();
        $("#emergncey").hide();
        $("#radiology").hide();
    });
    $("#forensic-click").click((e) => {
        $("#forensic").show();
        $("#adult").hide();
        $("#general").hide();
        $("#acute").hide();
        $("#emergncey").hide();
        $("#radiology").hide();

    });
    $("#rad-click").click((e) => {
        $("#forensic").hide();
        $("#adult").hide();
        $("#general").hide();
        $("#acute").hide();
        $("#emergncey").hide();
        $("#radiology").show();

    });
    $("#acute-click").click((e) => {
        $("#forensic").hide();
        $("#adult").hide();
        $("#general").hide();
        $("#acute").show();
        $("#emergncey").hide();
        $("#radiology").hide();

    });
    $("#general-click").click((e) => {
        $("#forensic").hide();
        $("#adult").hide();
        $("#general").show();
        $("#acute").hide();
        $("#emergncey").hide();
        $("#radiology").hide();

    });
    $("#emergncey-click").click((e) => {
        $("#forensic").hide();
        $("#adult").hide();
        $("#general").hide();
        $("#acute").hide();
        $("#emergncey").show();
        $("#radiology").hide();

    });
});
