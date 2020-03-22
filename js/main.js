$(document).ready(function(){

    var _PROJ_DATA;
    var _TRANS_DATA;
    
    $.ajax({
        url: "js/projects.json",
        dataType: "json",
        success: function(data){
            console.log("json projects load success");
            _PROJ_DATA = data;
            appendProjectsList(_PROJ_DATA,"en");
            twemoji.parse(document.body);
        },
        error: function(e){
            console.log("failed to load projects json");
        }
    });

    $.ajax({
        url: "js/translation.json",
        dataType: "json",
        success: function(data){
            console.log("json translation load success");
            _TRANS_DATA = data;
            translate(_TRANS_DATA, "en");
        },
        error: function(e){
            console.log("failed to load translation json");
        }
    });

    $('.theme-switch input[type="checkbox"]').on('change',function(e){
        if (e.target.checked) {
            $(document.documentElement).attr('data-theme', 'light');
        }
        else {
            $(document.documentElement).attr('data-theme', 'dark');
        }    
    });

    $(".lang").on('click',function(){
        var me = this;
        appendProjectsList(_PROJ_DATA, $(me).attr("data-lang") );
        translate(_TRANS_DATA, $(me).attr("data-lang"));
    })

    $(".filter-tag").on("click",function(){
        var me = this;
        var tagName = "tag-" + $(me).text().toLowerCase();

        if( !$(me).hasClass(tagName) )
        {
            clearTags();

            $(me).addClass(tagName);

            $("#projects-list > li").each(function(){
                var item = this;

                if( !$(item).find('div').hasClass(tagName) )
                {
                    $(item).addClass("hide-me");
                }
                
            });
        }
        else
        {
            clearTags();

            $("#projects-list > li").each(function(){
                var item = this;

                if( !$(item).find('div').hasClass(tagName) )
                {
                    $(item).removeClass("hide-me");
                }
                
            });
        }

    });

    function clearTags(){
        $("#projects-list > li").each(function(){
            $(this).removeClass("hide-me");
        });
        
        $(".filter-tag").each(function(){
            $(this).attr('class','code-tags filter-tag');
        });
    }

    function appendProjectsList(projectsList, lang){
        $("#projects-list").html('');
        var sHtml = "";
        for(var i = 0; i < projectsList.length; i++)
        {
            if(projectsList[i].tags != undefined)
            {
                sTags = "";

                for(var j = 0; j < projectsList[i].tags.length; j++)
                {
                   sTags += '<div class="code-tags tag-'+projectsList[i].tags[j]+'">'+projectsList[i].tags[j].toUpperCase()+'</div>';
                }
            }
            
            var prg = ((projectsList[i].progress == 'complete') ? "✅" : (projectsList[i].progress == 'incomplete') ? "🔨" : (projectsList[i].progress == 'inprogress') ? "🛠" : "" );
            
            if(lang == 'fr')
            {
                sHtml += '<li class=""><div><a href="'+projectsList[i].link+'">'+ prg +projectsList[i].name+'</a>'+sTags+'<br>'+projectsList[i].description_fr+'</div></li>';
            }
            else if(lang == 'ru')
            {
                sHtml += '<li class=""><div><a href="'+projectsList[i].link+'">'+ prg +projectsList[i].name+'</a>'+sTags+'<br>'+projectsList[i].description_ru+'</div></li>';
            }
            else
            {
                sHtml += '<li class=""><div><a href="'+projectsList[i].link+'">'+ prg +projectsList[i].name+'</a>'+sTags+'<br>'+projectsList[i].description_en+'</div></li>';
            }
            
        }
        $("#projects-list").append(sHtml);
    }

    function translate(translations, lang){
        for(var i = 0; i < translations.length; i++)
        {
            if(translations[i].txtlang == lang)
            {
                Object.keys(translations[i]).forEach( function(key) { 
                    $("#"+key).text(translations[i][key])
                });
            }
        }
    }

});