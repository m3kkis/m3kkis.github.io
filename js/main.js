$(document).ready(function(){

    AOS.init();
    
    $(".nav_menu_btn").off();
    $(".nav_menu_btn").on("mousedown touchstart",function(){
        if($(this).hasClass("is-active"))
        {
            $(this).removeClass("is-active");
            $(".navigation_menu_open").addClass("hide-me");
            $(".logo_menu_container").removeClass("hide-me");
        }
        else
        {
            $(this).addClass("is-active");
            $(".navigation_menu_open").removeClass("hide-me");
            $(".logo_menu_container").addClass("hide-me");
        }
        
    });

});