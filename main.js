$( document ).ready(function() {

    $("#searchBtn").click(function(){
        $.get("./items.json", function(data, status){
            console.log('ITEMS:', data, status);
        });

        // console.log('click!');
      });

});