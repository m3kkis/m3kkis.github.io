$(document).ready(function(){

    /* INITIALIZE LIBRARY */
    AOS.init();
    new GitHubCalendar(".calendar", "m3kkis");

    /* CHANGE NAV COLOR ON SCROLL */
    $(document).on("scroll",function(){
        var me = this;

        //$(document).scrollTop();

        var iScrollBanner = $(".section_banner").offset().top
        var iScrollAbout = $(".section_about").offset().top
        var iScrollSkills = $(".section_skills").offset().top
        var iScrollCalendar = $(".section_calendar").offset().top
        var iScrollProjects = $(".section_projects").offset().top
        var iScrollWork = $(".section_work").offset().top
        var iScrollContact = $(".section_contact").offset().top

        if( $(document).scrollTop() > iScrollBanner ) 
            $(".logo_menu").css("color","#212529");
        if( $(document).scrollTop() > iScrollAbout ) 
            $(".logo_menu").css("color","white");
        if( $(document).scrollTop() > iScrollSkills ) 
            $(".logo_menu").css("color","#212529");
        if( $(document).scrollTop() > iScrollProjects ) 
            $(".logo_menu").css("color","white");
        if( $(document).scrollTop() > iScrollCalendar ) 
            $(".logo_menu").css("color","#212529");
        if( $(document).scrollTop() > iScrollWork ) 
            $(".logo_menu").css("color","white");
        if( $(document).scrollTop() > iScrollContact ) 
            $(".logo_menu").css("color","white");
    });
    

    
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