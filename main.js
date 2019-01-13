
$( document ).ready( function() {

    var searchItems = function() {
        var nameChannel = $( "#searchInput" ).val() || "all",
        server = "./items.json";
        // server = "http://localhost:8080/programm/" + nameChannel;

        $.get(server, function( data, status ){
            console.log( 'ITEMS:', data, status, nameChannel );
            var items = data || [];

            if(status == 'success' && items.length) {
                $( ".items-block" ).addClass( "display-block" );
                $( ".load-block" ).addClass( "display-none" );
                var content = '';

                for (var i = 0; i < items.length; i++) {
                    content += '<tr>';
                    content += '<td>' + items[i].Name + '</td>';
                    content += '<td>' + items[i].Name_channel + '</td>';
                    content += '<td>' + items[i].time_start + '</td>';
                    content += '</tr>';
                }

                $('.items-block table tbody').html(content);
            } else {
                $( ".items-block" ).removeClass( "display-block" );
                $( ".empty-block" ).addClass( "display-block" );
                $( ".load-block" ).addClass( "display-none" );
            }
        });
    }

    function setChannelFn(nameChannel) {

    }
    /*searchItems();*/


    $( "#searchBtn" ).click( function(){
        $( ".items-block" ).removeClass( "display-block" );
        $( ".empty-block" ).removeClass( "display-block" );
        $( ".load-block" ).removeClass( "display-none" );
        $(".channel-block").removeClass("display-block");

        searchItems();
    });

    $( document ).on( 'keypress', function(e) {
        if(e.which == 13) {
            $( ".items-block" ).removeClass( "display-block" );
            $( ".empty-block" ).removeClass( "display-block" );
            $( ".load-block" ).removeClass( "display-none" );
            $(".channel-block").removeClass("display-block");
            searchItems();
        }
    });



    var getChannelList = function(){
        // var server = "http://localhost:8080/programm/";
        var server = "./channels.json";
        
        $.get(server, function( data, status ){
            console.log( 'ITEMS:', data, status );
            var items = data || [];

            if(status == 'success' && items.length) {
                $(".items-block").removeClass("display-block");
                $(".channel-block").addClass("display-block");
                $(".load-block").addClass("display-none");
                var content = '';
                    for (var i = 0; i < items.length; i++) {
                    content +="<li> <a class = 'nameChannel' id='"+items[i].Name_channel +"'>" +items[i].Name_channel +" </a></li>";
                }
                $('.channel-block ul').html(content);

            }
        });
    }

     $( ".channel-block ul" ).on("click", ".nameChannel", function(){
        $("#searchInput").val(this.id);
        $( ".items-block" ).removeClass( "display-block" );
        $( ".empty-block" ).removeClass( "display-block" );
        $( ".load-block" ).removeClass( "display-none" );
        $(".channel-block").removeClass("display-block");
        searchItems();
     });

    getChannelList();

    $( "#channelLink" ).click( function(){
        $( ".items-block" ).removeClass( "display-block" );
        $( ".empty-block" ).removeClass( "display-block" );
        $( ".load-block" ).removeClass( "display-none" );
        $(".channel-block").removeClass("display-block");
        getChannelList();
    });

    $( "#programmLink" ).click( function(){
        $( ".items-block" ).removeClass( "display-block" );
        $( ".empty-block" ).removeClass( "display-block" );
        $( ".load-block" ).removeClass( "display-none" );
        $(".channel-block").removeClass("display-block");
        searchItems();
    });
});