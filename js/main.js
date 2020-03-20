$(document).ready(function(){
    $.ajax({
        url: "js/projects.json",
        dataType: "json",
        success: function(data){
            console.log("json load success");
            appendProjectsList(data);
            twemoji.parse(document.body);
        },
        error: function(e){
            console.log("failed to load json");
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

    function appendProjectsList(projectsList){
        var sHtml = "";
        for(var i = 0; i < projectsList.length; i++)
        {
            if(projectsList[i].tags != undefined)
            {
                sTags = "";

                for(var j = 0; j < projectsList[i].tags.length; j++)
                {
                    /*
                        html
                        css
                        javascript
                        python
                        shell
                    */

                   sTags += '<div class="code-tags tag-'+projectsList[i].tags[j]+'">'+projectsList[i].tags[j].toUpperCase()+'</div>';

                }
            }
            
            var prg = ((projectsList[i].progress == 'complete') ? "✅" : (projectsList[i].progress == 'incomplete') ? "🔨" : (projectsList[i].progress == 'inprogress') ? "🛠" : "" );
            
            sHtml += '<li class=""><div><a href="'+projectsList[i].link+'">'+ prg +projectsList[i].name+'</a>'+sTags+'<br>'+projectsList[i].description+'</div></li>';
        }
        $("#projects-list").append(sHtml);
    }

});