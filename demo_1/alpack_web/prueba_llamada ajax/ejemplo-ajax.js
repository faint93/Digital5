var data = {hemograma};
$.ajax({ 
    url: 'http://186.67.178.3/ACLIN/getcustomer5.asp',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    type : 'POST',
    format : 'json',
    data: (data),
    success: function(respuesta){ 
        //respuesta es el json del servidor
    },
    error: function(xhr, ajaxOptions, thrownError){
        
    } 
});