$(function () {
    $(".nav").on("touchmove", function () {
        event.stopPropagation()
    });

    $(".menu").click(function () {
        $(this).toggleClass("on");
        $(".nav").toggleClass("on");
        event.stopPropagation();
    });
    $(".nav > ul >li").click(function () {
        $(this).children(".sub_menu").stop().slideToggle(300);
        $(this).toggleClass("active");
        $(this).siblings().children(".sub_menu").slideUp(300);
        $(this).siblings().removeClass("active");
        $(this).children("i").toggleClass("on");
        event.stopPropagation();
    });
    $(".wechat i").click(function () {
        $(this).siblings(".wechat_code").toggleClass("on")
        event.stopPropagation()
    });
    $(".footer, .main").click(function () {
        $(".wechat_code").removeClass("on");
        event.stopPropagation()
    });
})