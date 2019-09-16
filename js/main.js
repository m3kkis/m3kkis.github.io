$(document).ready(function(){
    new GitHubCalendar(".calendar", "m3kkis");

    $(".nav_menu_btn").off();
    $(".nav_menu_btn").on("click",function(){
        if($(this).hasClass("is-active"))
        {
            $(this).removeClass("is-active");
        }
        else
        {
            $(this).addClass("is-active");
        }
        
    });
});