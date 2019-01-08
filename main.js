$( document ).ready( function() {    

    var searchItems = function() {
        var nameChannel = $( "#searchInput" ).val() || "",
        // server = "./items.json";
        server = "http://localhost:8080/programm/" + nameChannel;

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
                    content += '<td>' + items[i].time_end + '</td>';
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

    searchItems();

    $( "#searchBtn" ).click( function(){
        $( ".items-block" ).removeClass( "display-block" );
        $( ".empty-block" ).removeClass( "display-block" );
        $( ".load-block" ).removeClass( "display-none" );
        
        searchItems();
    });

    $( document ).on( 'keypress', function(e) {
        if(e.which == 13) {
            $( ".items-block" ).removeClass( "display-block" );
            $( ".empty-block" ).removeClass( "display-block" );
            $( ".load-block" ).removeClass( "display-none" );
            
            searchItems();
        }
    });
});