
        <!DOCTYPE html>
          <html>
              <head>
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                   <script>
                   var data = {};
$.ajax({ 
    url: 'http://186.67.178.2/ajax/respuesta7.json',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    type : 'POST',
    format : 'json',
    data: (data),
    success: function(respuesta){ 
        alert("ok");
    },
    error: function(xhr, ajaxOptions, thrownError){
        alert("error");
    } 
});
                   </script>
              </head>

              <body>
                   <h1></h1>
              </body>
          </html>

    



