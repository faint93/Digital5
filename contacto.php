<?php

//Nombro variables con metodo POST

$evento_nombre = $_POST['nombre'];
$evento_email = $_POST['e-mail'];
$evento_celular = $_POST['celular'];
$evento_consulta = $_POST['consulta'];

$ip_local = $_POST['rhh'];
$ip_publica = $_POST['rhhp'];
$evento_ip = $ip_local ." | ". $ip_publica;

//var_dump($evento_nombre);

if($evento_nombre =="" and $evento_email =="" and $evento_celular =="" and $evento_consulta =="" ){

    echo'<script type="text/javascript">
    alert("Complete todos los datos...");
    </script>';

    exit();
    }

header('Location: index.html');

$destinatario = "contacto@digital5.cl"; 
$asunto = "MENSAJE PARA DIGITAL 5"; 


$cuerpo = ' 
<html> 
<head> 
   <title>MENSAJE PARA DIGITAL5</title> 
</head> 
<body> 
<h1>Hola amig@s!</h1> 
<p> 
<b>Mensaje enviado a Digital 5</b>. Desde www.digital5.cl
</p>
<p>Nombre: '.$evento_nombre.'</p>
<p>E-mail: '.$evento_email.'</p>
<p>Celular: '.$evento_celular.'</p>
<p>Consulta: '.$evento_consulta.'</p>
<p>IP: '.$evento_ip.'</p>
</body> 
</html> 
'; 


//para el env�o en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

//direcci�n del remitente 
$headers .= "From: Contacto - www.digital5.cl <contacto@digital5.cl>\r\n"; 

//direcci�n de respuesta, si queremos que sea distinta que la del remitente 
$headers .= "Reply-To: contacto@digital5.cl\r\n"; 

//ruta del mensaje desde origen a destino 
$headers .= "Return-path: contacto@digital5.cl\r\n"; 

//direcciones que recibi�n copia 
$headers .= "Cc:".$evento_email."\r\n"; 

//direcciones que recibir�n copia oculta 
//$headers .= "Bcc: mjarte@gmail.com\r\n"; 
$headers .= "Bcc: contacto@digital5.cl,alex.navarro@digital5.cl\r\n"; 

mail($destinatario,$asunto,$cuerpo,$headers) 

?>