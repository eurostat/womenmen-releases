function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

loadScript('../svg-core/js/jquery-3.6.0.min.js', function () {
    $( document ).ready(function() {
        $( "body" ).load( "../svg-core/template/index.html", function( response, status, xhr ) {
            if ( status == "error" ) {
              var msg = "Sorry but there was an error: ";
              alert(msg);
            }else {
                document.getElementById('mainImage').id = uniqueID;
                $("#"+uniqueID).attr("src", imagePath);
            }
          });
        
        });
});

