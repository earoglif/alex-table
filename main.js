$( document ).ready( function() {

    $( "#searchBtn" ).click( function(){
            $( ".items-block" ).removeClass( "display-block" );
            $( ".empty-block" ).addClass( "display-none" );
            $( ".load-block" ).removeClass( "display-none" );
        
        $.get("./items.json", function( data, status ){
            console.log('ITEMS:', data, status, );
            var items = data || [];

            if(status == 'success' && items.length) {
                $( ".items-block" ).addClass( "display-block" );
                $( ".empty-block" ).addClass( "display-none" );
                $( ".load-block" ).addClass( "display-none" );
                var content = '';

                for (var i = 0; i < items.length; i++) {
                    content += '<tr>';
                    content += '<td>' + items[i].Name + '</td>';
                    content += '<td>' + items[i].Name_channel + '</td>';
                    content += '<td>' + items[i].time_end + '</td>';
                    content += '<td>' + items[i].time_start + '</td>';
                    content += '</tr>';
                }

                $('.items-block table tbody').html(content);
            }
        });
    });

});