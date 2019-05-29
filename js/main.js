$(document).ready(function(){

    /* INITIALIZE LIBRARY */
    AOS.init();
    
    /* OPEN AND CLOSE EVENT FOR MENU */
    $(".nav_menu_btn").off();
    $(".nav_menu_btn").on("click",function(){
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


    /* CLICK EVENTS FOR MENU */
    $(".nav_link").off();
    $(".nav_link").on("click",function(){
        $(".nav_menu_btn").removeClass("is-active");
        $(".navigation_menu_open").addClass("hide-me");
        $(".logo_menu_container").removeClass("hide-me");
    });

    /* EMAIL VALIDATION KEY EVENT */
    $(".email_txtbox").on("keyup",function(){

        if( $(this).val() == "")
        {
            $(".email_validation_front").text("");
        }
        else if( isEmailValid( $(this).val() ) )
        {
            $(".email_validation_front").text("Email is valid!");
            $(".email_validation_front").css("color","green");
            $('.message_btn').prop('disabled', false);
        }
        else
        {
            $(".email_validation_front").text("Email is invalid!");
            $(".email_validation_front").css("color","red");
            $('.message_btn').prop('disabled', false);
        }
    })

    /* VERIFIES IF EMAIL IS CORRECT AND RETURN BOOL */
    function isEmailValid(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

});