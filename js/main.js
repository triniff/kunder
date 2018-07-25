$(".open-menu").click(function(){
    $(this).addClass("open");
    $(this).mouseleave(function(){
        $(this).removeClass("open");
    })
});
$(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $('.menu-lateral').toggleClass("open-menu-lateral");
});