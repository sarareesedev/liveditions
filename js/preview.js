/* -------------------- *\
    #PREVIEW SETUP (TO BE REMOVED ON A PRODUCTION SITE)
\* -------------------- */

/**
 * Preloader
 */

$(window).load(function () {
    $('.preloader-alt__img').fadeOut(500);
    $('.preloader_alt').delay(1000).fadeOut(500);
});


/**
 * Add color & navbar options menu
 */

if (!$("body").hasClass("preview__body")) {


    var menu = "";
    menu += "    <ul class=\"preview-setup hidden-xs\">";
    menu += "      <li class=\"orange\" title=\"Orange scheme\">";
    menu += "        <a href=\"#\" data-stylesheet=\"style.css\"><\/a>";
    menu += "      <\/li>";
    menu += "      <li class=\"green\" title=\"Green scheme\">";
    menu += "        <a href=\"#\" data-stylesheet=\"style_green.css\"><\/a>";
    menu += "      <\/li>";
    menu += "      <li class=\"blue\" title=\"Blue scheme\">";
    menu += "        <a href=\"#\" data-stylesheet=\"style_blue.css\"><\/a>";
    menu += "      <\/li>";
    menu += "      <li class=\"yellow\" title=\"Yellow scheme\">";
    menu += "        <a href=\"#\" data-stylesheet=\"style_yellow.css\"><\/a>";
    menu += "      <\/li>";
    menu += "      <li class=\"red\" title=\"Red scheme\">";
    menu += "        <a href=\"#\" data-stylesheet=\"style_red.css\"><\/a>";
    menu += "      <\/li>";
    menu += "      <li id=\"menu_top\" title=\"Navbar menu\">";
    menu += "        <a href=\"#\"><span class=\"oi oi-expand-down\"><\/span><\/a>";
    menu += "      <\/li>";
    menu += "      <li id=\"menu_side\" title=\"Sidebar menu\">";
    menu += "        <a href=\"#\"><span class=\"oi oi-expand-right\"><\/span><\/a>";
    menu += "      <\/li>";
    menu += "    <\/ul>";

    $("body").prepend(menu);


    /**
	 * Toggle stylesheets
	 */

    $(".preview-setup > li").not("#menu_top #menu_side").on("click", "a", function () {
        var stylesheet = $(this).data("stylesheet");
        $("head").append("<link href=\"assets/css/" + stylesheet + "\" rel=\"stylesheet\">");
    });


    /**
	 * Toggle navbar position
	 */

    $(".preview-setup > #menu_side > a").on("click", function () {
        $(".navbar").removeClass("hidden show").addClass("hidden");
        $(".sidebar__btn").removeClass("hidden show").addClass("show");
    });

    $(".preview-setup > #menu_top > a").on("click", function () {
        $(".navbar").removeClass("hidden show").addClass("show");
        $(".sidebar__btn").removeClass("hidden show").addClass("hidden");
        $(".sidebar__menu").addClass("sidebar__menu_hidden");
    });

};