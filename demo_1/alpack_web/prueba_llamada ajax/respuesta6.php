
<?php  
$array = array("mensaje" => "Hola desde otro punto de la red"); //Por ejemplo
if(isset($_GET['callback'])){ // Si es una petición cross-domain  
  echo $_GET['callback'].'('.json_encode($array).')';
}
else // Si es una normal, respondemos de forma normal  
  echo json_encode($array);
?>