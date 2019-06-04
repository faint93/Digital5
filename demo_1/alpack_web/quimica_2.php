<!DOCTYPE html>
<html>
	<head>
		<title>ACLIN::Laboratorio Clínico</title>
	


	 <script>
	 
 function buscar()
 {
 	limpiar2();
  //alert("ok");
  // Obtenemos el valor por el id

 var str = "hemo";

  //var str=document.getElementById("codigo").value;  //con este sacamos el valor del input

  
    // document.getElementById("resultado").innerHTML=" \
    //  <br>Respuesta: "+str; 
  //
  var xmlhttp; 
if (str=="")
  {
  document.getElementById("resultado").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
 {
 document.getElementById("resultado").innerHTML=xmlhttp.responseText;
 }
  }
xmlhttp.open("GET","http://186.67.178.3/ACLIN/getcustomer6.asp?q="+str,true);
xmlhttp.send();
  //
    
 }
 </script>



 	 <script>
 function limpiar()
 {

 document.getElementById("resultado").innerHTML="";
    
 }
 </script>



	 <script>
	
 function buscar2()
 {
 	 limpiar();
  //alert("ok");
  // Obtenemos el valor por el id
  var str=document.getElementById("codigo2").value;

  
    // document.getElementById("resultado").innerHTML=" \
    //  <br>Respuesta: "+str; 
  //
  var xmlhttp; 
if (str=="")
  {
  document.getElementById("resultado2").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
 {
 document.getElementById("resultado2").innerHTML=xmlhttp.responseText;
 }
  }
xmlhttp.open("GET","http://186.67.178.3/ACLIN/getcustomer5.asp?q="+str,true);
xmlhttp.send();
  //
    
 }
 </script>



 	 <script>
 function limpiar()
 {

 document.getElementById("resultado").innerHTML="";
    
 }
 </script>


 	 <script>
 function limpiar2()
 {

 document.getElementById("resultado2").innerHTML="";
    
 }
 </script>

		<!-- metas -->
		<meta charset="utf-8">
		<meta name="author" content="ACLIN::Laboratorio Clínico">
		<meta name="keywords" content="ACLIN. Laboratorio Clínico">
		<meta name="description" content="ACLIN::Laboratorio Clínico::">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
		<!--/ metas -->
		
		<!-- styles -->
		<link rel="stylesheet" type="text/css" href="css/layerslider.css">
		<link rel="stylesheet" type="text/css" href="css/fullwidth/skin.css">
		<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
		<link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
		<link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css">
		<link rel="stylesheet" type="text/css" href="css/styles.css">
		<link rel="stylesheet" type="text/css" href="css/estilos_aclin.css">
		<link rel="stylesheet" type="text/css" href="css/color-cyan.css">
<link rel="shortcut icon" href="img/favicon.png" />

		<link rel="stylesheet" href="fonts/font-awesome-4.3.0/css/font-awesome.min.css">
		
		<!--/ styles -->
		
		<!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->
	</head>
	
	<body>
		<div class="page">

			<!-- page header -->
			<header class="page-header main-page sticky">
				<div class="sticky-wrapp">
					<div class="sticky-container">
						<!-- logo -->
						<section id="logo" class="logo">
							<div>
								<a href="index.html"><img src="img/logos_1.svg" alt="ACLIN"></a>
							</div>
						</section>
						<!--/ logo -->
						
						<!-- main nav -->
						<nav class="main-nav">
							<ul>
								<li>
									<a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a>
									<ul>
										<li>
											<a href="index.html">Ubicación</a>
											<ul>
												<li class="text">
													<h2>Casa Matriz</h2>
													<hr>
													Tel. (56) 032 269 9605
													<hr>
													9 Norte 795 <br> Viña del Mar
													<hr>
													laboratorio@aclin.cl
             <hr>
													<a href="sucursales.html" class="more"><i class="fa fa-angle-double-right"></i></a>
												</li>
											</ul>
										</li>
									</ul>
								</li>

								<li>
									<a href="sucursales.html" align="center"><i class="fa fa-street-view"></i><br>SUCURSALES</a>
								</li>


								<li>
									<a href="en_construccion.html" align="center"><i class="fa fa-flask"></i><br>EXAMENES</a>
									<ul>	
										<li><a href="index.html">Química</a></li>
										<li><a href="index.html">Hematología</a></li>
										<li><a href="index.html">Hormonas</a></li>
										<li><a href="index.html">Orinas</a></li>
										<li><a href="index.html">Microbiología</a></li>
										<li><a href="index.html">Inmunología</a></li>
										<li><a href="index.html">Diagnóstico Molecular</a></li>
										<li><a href="index.html">Cromatografía Líquida</a></li>
										<li><a href="index.html">Otros</a></li>
									</ul>
								</li>
								
								
								<li>
									<a href="http://164.77.130.91/login_Nuevo.asp" align="center"><i class="fa fa-file-text"></i><br>RESULTADOS</a>
								</li>


								<li>
									<a href="http://164.77.130.91/ACLINCONVENIOS/login_Nuevo.asp" align="center"><i class="fa fa-user"></i><br>ACCESO A CONVENIOS</a>
								</li>


							</ul>
					  </nav>
						<!--/ main nav -->
						
						<!-- mobile nav -->
						<nav id="mobile-main-nav" class="mobile-main-nav">
							<i class="fa fa-bars"></i><a href="#" class="opener">ACLIN :: Menú</a>
							<ul>
								<li>
									<a href="index.html" class="active" align="center"><i class="fa fa-home"></i>INICIO</a>
									<ul>
										<li>
											<a href="index.html">Ubicación</a>
											<ul>
												<li class="text">
													<h2>Casa Matriz</h2>
													<hr>
													Tel. (56) 032 269 9605
													<hr>
													9 Norte 795 <br> Viña del Mar
													<hr>
													laboratorio@aclin.cl
             <hr>
												</li>
											</ul>
										</li>
									</ul>
								</li>

								<li>
									<a href="sucursales.html" align="center"><i class="fa fa-street-view"></i>SUCURSALES</a>
								</li>


								<li>
									<a href="en_construccion.html" align="center"><i class="fa fa-flask"></i>EXAMENES</a>
									<ul>	
										<li><a href="index.html">Química</a></li>
										<li><a href="index.html">Hematología</a></li>
										<li><a href="index.html">Hormonas</a></li>
										<li><a href="index.html">Orinas</a></li>
										<li><a href="index.html">Microbiología</a></li>
										<li><a href="index.html">Inmunología</a></li>
										<li><a href="index.html">Diagnóstico Molecular</a></li>
										<li><a href="index.html">Cromatografía Líquida</a></li>
										<li><a href="index.html">Otros</a></li>
									</ul>
								</li>
								
								
								<li>
									<a href="http://164.77.130.91/login_Nuevo.asp" align="center"><i class="fa fa-file-text"></i>RESULTADOS</a>
								</li>


								<li>
									<a href="http://164.77.130.91/ACLINCONVENIOS/login_Nuevo.asp" align="center"><i class="fa fa-user"></i>ACCESO A CONVENIOS</a>
								</li>
							</ul>
						</nav>
						<!--/ mobile nav -->
					</div>
				</div>
			</header>
			<!--/ page header -->
			
			<!-- quick search 
			<form id="quick-search" class="quick-search">
				<fieldset>
					<legend>Búsqueda:</legend>
					
					<input type="text" placeholder="Búsqueda por nombre" id="docname" name="docname" class="ui-autocomplete-input" autocomplete="off">
					
					<select>
						<option value="0">Especialidad</option>
						<option value="1"> Anestesia </option>
<option value="2"> Cardiología </option>
<option value="3"> Cirugía </option>
<option value="4"> Cirugía Pediátrica </option>

<option value="6"> Diagnóstico por Imágenes </option>
<option value="7"> Educacion Superior </option>
<option value="8"> Enfermería </option>
<option value="9"> Gastroenterología </option>
<option value="10"> Ginecología Y Obstetricia </option>
<option value="11"> Infectología </option>
<option value="12"> Kinesiología </option>
<option value="13"> Laboratorio Clínico </option>
<option value="14"> Medicina Legal </option>
<option value="15"> Medico Clínico </option>
<option value="16"> Medico Familia </option>
<option value="17"> Medico Laboral </option>
<option value="18"> Nefrología </option>
<option value="19"> Neurociencia </option>
<option value="20"> Nutrición </option>
<option value="21"> Odontología </option>
<option value="22"> Oftalmología </option>
<option value="23"> Oncología Clínica </option>
<option value="24"> Ortesis y Prótesis </option>
<option value="25"> Pediatría </option>
<option value="26"> Radiología </option>
<option value="27"> Reumatología </option>
<option value="28"> Terapia Intensiva </option>
<option value="29"> Trabajo Social </option>
<option value="30"> Traumatología </option>
<option value="31"> Urología </option>

					</select>
					
					<select>
						<option value="0">Consultorio</option>
						<option value="1">Central</option>
						<option value="2">Sede 1</option>
						<option value="3">Sede 2</option>
						
					</select>
					
					<button type="submit">Buscar</button>
					<div class="switcher">
						<button id="quick-search-switcher" type="button">Mi Médico</button>
					</div>
				</fieldset>				
			</form>
			<!--/ quick search -->
<!--/ HEADERS -->

			<!-- page title -->
			<section class="page-title">
				<div class="grid-row clearfix">
					<h1>Exámenes</h1>
					<br>
					<h3> :::: Química, Hematología, Hormonas, Orinas, Microbiología, Inmunología y Otros</h3>
				</div>
			</section>
			<!--/ page title -->



					



<!-- FOOTERS -->
			<!-- page footer 
			<footer class="page-footer">
				<a href="#" id="top-link" class="top-link"><i class="fa fa-angle-double-up"></i></a>
				
				<div class="grid-row">
					<div class="grid-col grid-col-3">
						<!-- last news 
						<section class="widget-alt last-news">
							<div class="widget-icon"></div>
							<div class="widget-title">Clinico</div>
							<ul>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin justo non odio molestie, sed venenatis elit, consectetur adipiscing.</li>
								<li>Donec quis condimentum leo, et congue dolor. Integer auctor facilisis odio. Duis vitae nibh tristique, consectetur lacus a, facilisis rutrum enim.</li>
								<li>Cras fermentum interdum dapibus. Maecenas imperdiet, consectetur adipiscing magna nec odio cursus, vitae consequat ante.</li>
							</ul>
						</section>
						<!--/ last news 
					</div>
					
					<div class="grid-col grid-col-3">
						<!-- location
						<section class="widget-alt location">
							<div class="widget-icon"></div>
							<div class="widget-title">Ubicación</div>
							<address>Dirección 1234 - Copiapó - 1530000, Chile</address>
							<ul>
								<li><i class="fa fa-phone"></i>(+56) 52 9 47677800</li>
								<li><i class="fa fa-at">@</i>info@saludcadelaria.com</li>
								<li><i class="fa fa-skype"></i>La Candelaria Salud</li>
							</ul>
							<nav>
								
								<a href="#" class="fa fa-facebook"></a>
								
							</nav>
						</section>
						<!--/ location 	
					</div>
					
					<div class="grid-col grid-col-3">
						<!-- last news 
						<section class="widget-alt recent-posts">
							<div class="widget-icon"></div>
							<div class="widget-title">Recent Posts</div>
							<ul>
								<li>
									<a href="#"><img src="pic/post/1.png" width="80" height="80" alt=""></a>
									<p><a href="#">New study links lutein with eye health benefits, consectetur adipiscing</a><br>5 months ago</p>
								</li>
								<li>
									<a href="#"><img src="pic/post/2.png" width="80" height="80" alt=""></a>
									<p><a href="#">Pets may reduce risk of heart disease, et congue dolor heart</a><br>8 months ago</p>
								</li>
								<li>
									<a href="#"><img src="pic/post/3.png" width="80" height="80" alt=""></a>
									<p><a href="#">Discoveries offer a new explanation for diabetes, consectetur</a><br>10 months ago</p>
								</li>
							</ul>
						</section>
						<!--/ last news					
					</div>
					
					<div class="grid-col grid-col-3">
						<!-- work time
						<section class="widget-alt work-time">
							<div class="widget-icon"></div>
							<dl>
								<dt>Lun</dt>
								<dd>08:00 am - 7:00 pm</dd>
								<dt>Mar</dt>
								<dd>01:00 am - 7:00 pm</dd>
								<dt>Mié</dt>
								<dd>08:00 am - 7:00 pm</dd>
								<dt>Jue</dt>
								<dd>08:00 am - 7:00 pm</dd>
								<dt>Vie</dt>
								<dd>08:00 am - 7:00 pm</dd>
								<dt>Sáb</dt>
								<dd>08:00 am - 5:00 pm</dd>
								<dt>Dom</dt>
								<dd>08:00 am - 5:00 pm</dd>
							</dl>
							<a href="contacto.html" class="button">Consulte ahora</a>
						</section>
						<!--/ work time 						
					</div>
				</div>
			</footer>
			<!--/ page footer -->
			






<main class="page-content">
				<div class="grid-row">
					<div class="grid-col grid-col-9">
						<section class="detailed-services wpb_content_element">
							<div class="widget-title"> Exámenes</div>



<dl>



<dt id="service4" onclick="buscar()"><i class="fa fa-check"></i>Química</dt>

<dd>
									
	<div class="row" align="center">

		<div class="">
			<ul>

<!--	<div>
																																										
	<form id="form1">

     <h1>Ingrese Código o Nombre del Exámen<h1>
  
    <div>
     	<input class="contenido_input" type="search" placeholder="Buscar" name="Código" value="" id="codigo">
     	<br>
     <input class="btn_verde" type="button" value="Buscar" onclick="buscar()">
     	<br>
 			  <input name="bt_limpiar" type="reset" class="btn" value="Limpiar" onclick="limpiar()">
			</div>
    </form>

    </div>	

			</ul>
		</div>-->
<div align="center" class="recuadro_respuesta_ancho" id="resultado"></div>



 <br><br>
    <div>
    	
    </div>   



	</div>

</dd>

   

<dt id="service4"><i class="fa fa-check"></i>Hematología</dt>

<dd>
									
	<div class="row">

		<div class="col">
			<ul>
															
				<div class="grid-row">
					<div class="testimonial_2">
						<div class="clearfix">

															
							<!--quimica-->



							<table class="contenido_input" width="100%" height="120" border="0" align="center" cellpadding="0" cellspacing="30">
								  <tr>
										 <th scope="col">302001</th>
										 <th scope="col">Acetona</th>
										 <th scope="col">Cualitativa	En el día</th>
										 <th scope="col">Sin preparación</th>
										  </tr>
										  <tr>
										 <th scope="col">302001</th>
										 <th scope="col">Cetonemia</th>
										 <th scope="col">En el día</th>
										 <th scope="col">Sin preparación</th>
										  </tr>
										 <tr>
										 <th scope="col">302004</th>
										 <th scope="col">Ácido Láctico (lactato)</th>
										 <th scope="col">En el día</th>
										 <th scope="col">Ayuno 8 hrs.</th>
								  </tr>
							</table>


						</div>

					</div>
				</div>


			</ul>
		</div>

	</div>

</dd>
								





								<dt id="service4"><i class="fa fa-check"></i>Hormonas</dt>
								<dd>
									<div class="details">
										<div class="clearfix">
											<img src="img/servicios/suc_vina.png" width="185" height="110" alt="">
												<ul>
												<li>Atención:</li>
												<li>1 Oriente 458<br>(032) 254 1478</li>
												<li>Viña del Mar, Chile</li>
											</ul>
											<ul>
												<li>Horario de Atención</li>
												<li>Lunes a Viernes 7:45 a 13:30 Hrs. / 15:00 - 18:30.<br>Sábado 8:30 a 11:00 Hrs.</li>
											</ul>
											<ul>
												<li>Horario de Toma de Muestra</li>
												<li>Lunes a Viernes 7:45 a 12:45 Hrs.<br>Sábado 8:30 a 10:30 Hrs.</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<!--
										--><div class="col">
											<ul>
												
												

											</ul>
										</div><!--
										-->
									</div>
								</dd>




								<dt id="service4"><i class="fa fa-check"></i>Orinas</dt>
								<dd>
									<div class="details">
										<div class="clearfix">
											<img src="img/servicios/suc_vina.png" width="185" height="110" alt="">
												<ul>
												<li>Atención:</li>
												<li>1 Oriente 458<br>(032) 254 1478</li>
												<li>Viña del Mar, Chile</li>
											</ul>
											<ul>
												<li>Horario de Atención</li>
												<li>Lunes a Viernes 7:45 a 13:30 Hrs. / 15:00 - 18:30.<br>Sábado 8:30 a 11:00 Hrs.</li>
											</ul>
											<ul>
												<li>Horario de Toma de Muestra</li>
												<li>Lunes a Viernes 7:45 a 12:45 Hrs.<br>Sábado 8:30 a 10:30 Hrs.</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<!--
										--><div class="col">
											<ul>
												
												

											</ul>
										</div><!--
										-->
									</div>
								</dd>




								<dt id="service4"><i class="fa fa-check"></i>Microbiología</dt>
								<dd>
									<div class="details">
										<div class="clearfix">
											<img src="img/servicios/suc_vina.png" width="185" height="110" alt="">
												<ul>
												<li>Atención:</li>
												<li>1 Oriente 458<br>(032) 254 1478</li>
												<li>Viña del Mar, Chile</li>
											</ul>
											<ul>
												<li>Horario de Atención</li>
												<li>Lunes a Viernes 7:45 a 13:30 Hrs. / 15:00 - 18:30.<br>Sábado 8:30 a 11:00 Hrs.</li>
											</ul>
											<ul>
												<li>Horario de Toma de Muestra</li>
												<li>Lunes a Viernes 7:45 a 12:45 Hrs.<br>Sábado 8:30 a 10:30 Hrs.</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<!--
										--><div class="col">
											<ul>
												
												

											</ul>
										</div><!--
										-->
									</div>
								</dd>





								<dt id="service4"><i class="fa fa-check"></i>Inmunología</dt>
								<dd>
									<div class="details">
										<div class="clearfix">
											<img src="img/servicios/suc_vina.png" width="185" height="110" alt="">
												<ul>
												<li>Atención:</li>
												<li>1 Oriente 458<br>(032) 254 1478</li>
												<li>Viña del Mar, Chile</li>
											</ul>
											<ul>
												<li>Horario de Atención</li>
												<li>Lunes a Viernes 7:45 a 13:30 Hrs. / 15:00 - 18:30.<br>Sábado 8:30 a 11:00 Hrs.</li>
											</ul>
											<ul>
												<li>Horario de Toma de Muestra</li>
												<li>Lunes a Viernes 7:45 a 12:45 Hrs.<br>Sábado 8:30 a 10:30 Hrs.</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<!--
										--><div class="col">
											<ul>
												
												

											</ul>
										</div><!--
										-->
									</div>
								</dd>





								<dt id="service4"><i class="fa fa-check"></i>Diagnóstico Molecular</dt>
								<dd>
									<div class="details">
										<div class="clearfix">
											<img src="img/servicios/suc_vina.png" width="185" height="110" alt="">
												<ul>
												<li>Atención:</li>
												<li>1 Oriente 458<br>(032) 254 1478</li>
												<li>Viña del Mar, Chile</li>
											</ul>
											<ul>
												<li>Horario de Atención</li>
												<li>Lunes a Viernes 7:45 a 13:30 Hrs. / 15:00 - 18:30.<br>Sábado 8:30 a 11:00 Hrs.</li>
											</ul>
											<ul>
												<li>Horario de Toma de Muestra</li>
												<li>Lunes a Viernes 7:45 a 12:45 Hrs.<br>Sábado 8:30 a 10:30 Hrs.</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<!--
										--><div class="col">
											<ul>
												
												

											</ul>
										</div><!--
										-->
									</div>
								</dd>





								<dt id="service4"><i class="fa fa-check"></i>Cromatografía Líquida</dt>
								<dd>
									<div class="details">
										<div class="clearfix">
											<img src="img/servicios/suc_vina.png" width="185" height="110" alt="">
												<ul>
												<li>Atención:</li>
												<li>1 Oriente 458<br>(032) 254 1478</li>
												<li>Viña del Mar, Chile</li>
											</ul>
											<ul>
												<li>Horario de Atención</li>
												<li>Lunes a Viernes 7:45 a 13:30 Hrs. / 15:00 - 18:30.<br>Sábado 8:30 a 11:00 Hrs.</li>
											</ul>
											<ul>
												<li>Horario de Toma de Muestra</li>
												<li>Lunes a Viernes 7:45 a 12:45 Hrs.<br>Sábado 8:30 a 10:30 Hrs.</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<!--
										--><div class="col">
											<ul>
												
												

											</ul>
										</div><!--
										-->
									</div>
								</dd>




								<dt id="service4"><i class="fa fa-check"></i>Otros</dt>
								<dd>
									<div class="details">
										<div class="clearfix">
											<img src="img/servicios/suc_vina.png" width="185" height="110" alt="">
												<ul>
												<li>Atención:</li>
												<li>1 Oriente 458<br>(032) 254 1478</li>
												<li>Viña del Mar, Chile</li>
											</ul>
											<ul>
												<li>Horario de Atención</li>
												<li>Lunes a Viernes 7:45 a 13:30 Hrs. / 15:00 - 18:30.<br>Sábado 8:30 a 11:00 Hrs.</li>
											</ul>
											<ul>
												<li>Horario de Toma de Muestra</li>
												<li>Lunes a Viernes 7:45 a 12:45 Hrs.<br>Sábado 8:30 a 10:30 Hrs.</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<!--
										--><div class="col">
											<ul>
												
												

											</ul>
										</div><!--
										-->
									</div>
								</dd>




							</dl>



						
					</div>

					<div class="grid-col grid-col-3">
						<!-- appointment -->
						
							
	<section class="detailed-services wpb_content_element">
							<div class="widget-title"> Búsqueda General</div>														

			<form align="center" id="form2">
     <h1>Ingrese Código o Nombre del Exámen<h1>
  
    <div align="center">
     	<input class="contenido_input" type="search" placeholder="Buscar" name="Código" value="" id="codigo2">
     	<br>
     <input class="btn_verde" type="button" value="Buscar" onclick="buscar2()">
     <br>
 			  <input name="bt_limpiar" type="reset" class="btn" value="Limpiar" onclick="limpiar2()">
 			  <br>
 			  <div class="recuadro_respuesta" id="resultado2"></div>  

			</div>

    </form>



								
							

						
						<!--/ appointment -->

						
						
					</div>

				</div>
			</main>




















			<!-- copyrights -->
		  <div class="copyrights">:: Laboratorio Clínico Ancud :: Aníbal Pinto Nº 308 - Esq. Pedro Montt :: Fono/Fax: 065-623017 - 065-623096 :: Ancud - Región de Los Lagos - Chile ::</div>
			<!--/ copyrights -->

		</div>
		
		<!-- scripts -->
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui.min.js"></script>
		<script type="text/javascript" src="js/jquery.migrate.min.js"></script>
		<script type="text/javascript" src="js/owl.carousel.min.js"></script>
		<script type="text/javascript" src="js/jquery.isotope.min.js"></script>
		<script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
		<script type="text/javascript" src="js/jquery.fancybox-media.js"></script>
		<script type="text/javascript" src="js/jquery.flot.js"></script>
		<script type="text/javascript" src="js/jquery.flot.pie.js"></script>
		<script type="text/javascript" src="js/jquery.flot.categories.js"></script>
		<script type="text/javascript" src="js/greensock.js"></script>
		<script type="text/javascript" src="js/layerslider.transitions.js"></script>
		<script type="text/javascript" src="js/layerslider.kreaturamedia.jquery.js"></script>

	<!-- Superscrollorama -->		
		<script type="text/javascript" src="js/jquery.superscrollorama.js"></script>
		<script type="text/javascript" src="js/TweenMax.min.js"></script>
		<script type="text/javascript" src="js/TimelineMax.min.js"></script>
	<!--/ Superscrollorama -->
	
		<script type="text/javascript" src="js/jquery.ui.core.min.js"></script>
		<script type="text/javascript" src="js/jquery.ui.widget.min.js"></script>
		<script type="text/javascript" src="js/jquery.ui.tabs.min.js"></script>
		<script type="text/javascript" src="js/jquery-ui-tabs-rotate.js"></script>
		<script type="text/javascript" src="js/jquery.ui.accordion.min.js"></script>
		<script type="text/javascript" src="js/jquery.tweet.js"></script>
	<!-- EASYPIECHART -->
		<script type="text/javascript" src="js/jquery.easypiechart.js"></script>
	<!--/ EASYPIECHART -->
		<script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
		<!--/ scripts -->
		
	</body>
</html>
