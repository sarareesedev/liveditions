/* -------------------- *\
    GENERAL
\* -------------------- */

/**
 * Preloader
 */

$(window).load(function () {

    $('.preloader__img').fadeOut(500);
    setTimeout(function () {
        $('.preloader').addClass('active').delay(1000).fadeOut(500);
    }, 1000);

});


/**
 * Sidebar
 */

$(function () {

    $(".sidebar__btn").on('click', function () {
        $(".sidebar__btn_open").toggleClass("show hidden");
        $(".sidebar__menu").toggleClass("sidebar__menu_hidden");
        return false;
    });

});


/**
 * Navbar
 */

// Collapse navbar back on a link click

$(function () {

    $('.navbar-collapse li > a').on('click', function () {
        if ($('.navbar-collapse').attr("aria-expanded")) {
            $('.navbar-collapse.in').collapse('hide');
        }
    });

});


/**
 * Isotope filtering
 */

$(function () {

    // init Isotope
    var $container = $('.portfolio__items').imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.filter__item',
            layoutMode: 'fitRows'
        });
    });
    // filter items on button click
    $('.portfolio__nav > a').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        return false;
    });

});


/**
 * Text rotator (requires morphext.js, morphext.css, animate.css)
 */

$(function () {

    if ($(".js-rotating").length) {
        $(".js-rotating").Morphext({
            animation: "fadeIn", // default "bounceIn"
            separator: "|", // default ","
            speed: 4000 // default 2000
        });
    }

});


/* -------------------- *\
    CLASSIC LAYOUT
\* -------------------- */

if ($("body.classic").length) {

    /**
     * Make navbar active 
     */

    $(function () {

        $("body").waypoint(function () {
            $(".navbar").toggleClass("navbar__initial");
            return false;
        }, { offset: "-20px" });

    });


    /**
     * Change sidebar link color
     */

    $(function () {

        $("body").waypoint(function () {
            $(".sidebar__btn").toggleClass("sidebar__btn_alt");
            return false;
        }, { offset: "-100%" });

    });


    /**
     * Smooth scroll to anchor
     */

    $(function () {

        $('a[href*="#"]:not([href="#"])').click(function () {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {




                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');







                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }

            }
        });

    });

}



/* -------------------- *\
    CROSSFADING & SLIDING LAYOUTS
\* -------------------- */

$(document).ready(function () {

    if ($("#fullpage").length) {

        //if ($(".backstretch-carousel").length) {

        //    // Init Backstretch

        //    $(".backstretch-carousel").backstretch([
        //        "images/skins/bg_screen_01.jpeg",
        //        "images/screen-bg_2.jpg",
        //        "images/screen-bg_3.jpg",
        //        "images/screen-bg_4.jpg",
        //        "images/screen-bg_5.jpg",
        //        "images/screen-bg_6.jpg",
        //        "images/screen-bg_7.jpg"
        //    ], { duration: 1000, fade: 700 });

        //    // Pause Backstretch

        //    $(".backstretch-carousel").backstretch("pause");

        //}

        var isToucheDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);

        $('#fullpage').fullpage({

            // Plugin setup


            // Navigation
            anchors: ['welcome', 'platform', 'benefits', 'features', 'about', 'team', 'contact'],
            menu: '.fullpage__nav',
            slidesNavigation: 'true',

            // Custom selectors
            sectionSelector: '.site-wrapper',
            slideSelector: '.site-wrapper__slide',

            // Scrolling
            scrollOverflow: true,
            scrollOverflowOptions: {
                click: isToucheDevice
            },

            // Design
            paddingTop: '0',
            paddingBottom: '0',

            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);

                //using index
                if(index == 1){
                    $("#scrollUp").fadeOut("slow");
                    $("#scrollUp").addClass("hide");
                }
            },

            onLeave: function (index, nextIndex, direction) {

                // Make navbar active after leaving 1st section

                if (index == 1 && nextIndex != 1) {
                    $(".navbar").toggleClass("navbar__initial");
                }

                if (index != 1 && nextIndex == 1) {
                    $(".navbar").toggleClass("navbar__initial");
                }

                if (nextIndex == 1) {
                    $("#scrollUp").fadeOut("slow");
                    $("#scrollUp").addClass("hide");
                  
                }

                if (nextIndex != 1) {
                    $("#scrollUp").removeClass("hide");
                    $("#scrollUp").fadeIn("slow");
                   

                   
                }


                // Change Backstretch image on fullPage scroll

                if ($(".backstretch-carousel").length) {

                    $(".backstretch-carousel").backstretch("show", nextIndex - 1);

                }
            }

        });

    };

});


//owl carousel for testimonials
$(document).ready(function () {

    $("#testi-carousel").owlCarousel({
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true,
        autoPlay: true
    });

});


/*----------------------------
    Wow js active
------------------------------ */
new WOW().init();

/*--------------------------------
	Team Slick Carousel
-----------------------------------*/
$('.team-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.slider-nav'
});
/*------------------------------------
	Team Slick Carousel as Nav
--------------------------------------*/
$('.team-image-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.team-text-slider',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [
        {
            breakpoint: 450,
            settings: {
                dots: false,
                slidesToShow: 3,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 420,
            settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]
});
