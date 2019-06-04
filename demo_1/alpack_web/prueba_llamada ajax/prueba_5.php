<script>
var url = 'http://186.67.178.2/ajax/respuesta2.html?callback=envoltorio'
$.ajax(
   { url: 'http://186.67.178.2/ajax/',
     type: 'GET',//tipo de petición
     dataType: 'jsonp', //tipo de datos
     jsonpCallback: 'envoltorio',  //nombre de la funcion que envuelve la respuesta
     error: function(xhr, status, error) {
        alert("error");
     },
     success: function(jsonp) {
        alert("peticion correcta")
     }
    }
);
</script>