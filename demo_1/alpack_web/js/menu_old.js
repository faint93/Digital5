

function cargar_menu(){
	
	//localStorage.menu = '<div class="sticky-wrapp"> <div class="sticky-container"> <!-- aquui cambiar fondo con fondo--> <!-- logo --> <section class="logo" id="logo" name="logo"> <div> <a href="index.html"><img src="img/logos_1.svg" alt="ANCUD Laboratorio Clínico"></a> </div> </section> <!--/ logo --> <!-- main nav --> <nav class="main-nav"> <ul> <li> <a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a> <ul> <li> <a href="index.html">Ubicación</a> <ul> <li class="text"> <h2>Información</h2> <hr> Tels. (065)-623017 <hr> (065)-623096 <hr> Aníbal Pinto Nº 308 <hr> Ancud - Chile <hr> info@laboratorioancud.cl <hr> <a href="sucursales.html" class="more"><i class="fa fa-angle-double-right"></i></a> </li> </ul> </li> </ul> </li> <li> <a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a> <ul>	</ul> </li> <li> <a href="sucursales.html" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a> <ul>	<li><a href="sucursales.html?var=1">Aníbal Pinto Nº 308</a></li> </ul> </li> <li> <a href="examenes.html" align="center"><i class="fa fa-flask"></i><br>LABORATORIO</a> <ul>	<li><a href="examenes.html?var=1">Examenes Hematológicos</a></li> <li><a href="examenes.html?var=2">Examenes Bioquimicos</a></li> <li><a href="examenes.html?var=3">Examenes Hormonales</a></li> <li><a href="examenes.html?var=4">Examenes Inmunológicos</a></li> <li><a href="examenes.html?var=5">Examenes Microbiológicos</a></li> <li><a href="examenes.html?var=6">Examenes Parasitológicos</a></li> <li><a href="examenes.html?var=7">Examenes Genéticos</a></li> <li><a href="examenes.html?var=8">Examenes de Biología Molecular</a></li> <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li> <li><a href="examenes.html?var=10">Examenes de Paternidad</a></li> <li><a href="examenes.html?var=11">Test Cutáneos</a></li> <li><a href="examenes.html?var=12">Electrocardiogramas</a></li> <li><a href="examenes.html?var=13">Niveles de Drogas</a></li> </ul> </li> <li> <a href="centro_medico.html" align="center"><i class="fa fa-stethoscope"></i><br>CENTRO MEDICO</a> <ul>	<li><a href="centro_medico.html?var=1">Medicina General</a></li> <li><a href="centro_medico.html?var=2">Ginecología</a></li> <li><a href="centro_medico.html?var=3">Neurología</a></li> <li><a href="centro_medico.html?var=4">Neurología Infantil</a></li> <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li> <li><a href="centro_medico.html?var=6">Cirugía</a></li> <li><a href="centro_medico.html?var=7">Traumatología</a></li> <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li> <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li> <li><a href="centro_medico.html?var=10">Vacunatorio</a></li> <li><a href="centro_medico.html?var=11">Kinesiología</a></li> <li><a href="centro_medico.html?var=12">Psicología</a></li> <li><a href="centro_medico.html?var=13">Nutricionista</a></li> <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li> <li><a href="centro_medico.html?var=15">Podología</a></li> </ul> </li> <li> <a href="http://186.67.178.5:8083/Presentacion/loginpaciente.aspx" align="center"><i class="fa fa-file-text"></i><br>RESULTADOS</a> </li> </ul> </nav> <!--/ main nav --> <!-- mobile nav --> <nav id="mobile-main-nav" class="mobile-main-nav"> <i class="fa fa-bars"></i><a href="#" class="opener">LABORATORIO ANCUD :: Menú</a> <ul> <li> <a href="index.html" class="active" align="center"><i class="fa fa-home"></i>INICIO</a> </li> <ul style="display: block;"> <li> <i></i><a href="preguntas.html" align="center">PREGUNTAS</a> <ul> <li class="text"> </li> </ul> </li> </ul> <li> <a href="sucursales.html" align="center"><i class="fa fa-flask"></i>UBICACION</a> </li> <ul style="display: block;"> <li> <i></i><a href="index.html" align="center">LABORATORIO</a> <ul> <li class="text"> </li><li><a href="examenes.html?var=1">Examenes Hematológicos</a></li> <li><a href="examenes.html?var=2">Examenes Bioquimicos</a></li> <li><a href="examenes.html?var=3">Examenes Hormonales</a></li> <li><a href="examenes.html?var=4">Examenes Inmunológicos</a></li> <li><a href="examenes.html?var=5">Examenes Microbiológicos</a></li> <li><a href="examenes.html?var=6">Examenes Parasitológicos</a></li> <li><a href="examenes.html?var=7">Examenes Genéticos</a></li> <li><a href="examenes.html?var=8">Examenes de Biología Molecular</a></li> <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li> <li><a href="examenes.html?var=10">Examenes de Paternidad</a></li> <li><a href="examenes.html?var=11">Test Cutáneos</a></li> <li><a href="examenes.html?var=12">Electrocardiogramas</a></li> <li><a href="examenes.html?var=13">Niveles de Drogas</a></li> </ul> </li> </ul> <ul style="display: block;"> <li> <i></i><a href="index.html" align="center">CENTRO MEDICO</a> <ul> <li class="text"> </li><li><a href="centro_medico.html?var=1">Medicina General</a></li> <li><a href="centro_medico.html?var=2">Ginecología</a></li> <li><a href="centro_medico.html?var=3">Neurología</a></li> <li><a href="centro_medico.html?var=4">Neurología Infantil</a></li> <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li> <li><a href="centro_medico.html?var=6">Cirugía</a></li> <li><a href="centro_medico.html?var=7">Traumatología</a></li> <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li> <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li> <li><a href="centro_medico.html?var=10">Vacunatorio</a></li> <li><a href="centro_medico.html?var=11">Kinesiología</a></li> <li><a href="centro_medico.html?var=12">Psicología</a></li> <li><a href="centro_medico.html?var=13">Nutricionista</a></li> <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li> <li><a href="centro_medico.html?var=15">Podología</a></li> </ul> </li> </ul> </ul> </nav> <!--/ mobile nav --> </div> </div>';

localStorage.menu='<div class="sticky-wrapp">					<div class="sticky-container"> <!-- aquui cambiar fondo con    fondo-->						<!-- logo -->						<section class="logo" id="logo" name="logo">							<div>								<a href="index.html"><img src="img/logos_1.svg" alt="ANCUD Laboratorio Clínico"></a>														</div>						</section>						<!--/ logo -->						<!-- main nav -->						<nav class="main-nav">														<ul>								<li>									<a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a>									<ul>																			<li class="text">													<h2>Centro Médico</h2>													<hr>													Tels. (65)-2-623 017 <hr> (65)-2-623 096													<hr>													<h2>Laboratorio</h2>													<hr>													Tels. (65)-2-622 254													<hr>													Aníbal Pinto Nº 308 <hr> Ancud - Chile													<hr>													contacto@laboratorioancud.cl             <hr>													<a href="sucursales.html" class="more"><i class="fa fa-angle-double-right"></i></a>												</li>																			</ul>								</li>																<li>								<a href="img/derechos_y_deberes_1.jpg" align="center" class="fancybox"> <i class="fa fa-eye"></i><p style="font-size:10px; line-height:1;">DERECHOS<br>Y DEBERES</p></a>								</li>																<li>									<a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a>									<ul>										</ul>								</li>                                                                								<li>									<a href="sucursales.html?var=1" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a>								</li>                                								<li>									<a href="examenes.html" align="center"><i class="fa fa-flask"></i><br>LABORATORIO</a>									<ul>											<li><a href="examenes.html?var=1">Exámenes Hematológicos</a></li>                                        <li><a href="examenes.html?var=2">Exámenes Bioquimicos</a></li>                                        <li><a href="examenes.html?var=3">Exámenes Hormonales</a></li>                                        <li><a href="examenes.html?var=4">Exámenes Inmunológicos</a></li>                                        <li><a href="examenes.html?var=5">Exámenes Microbiológicos</a></li>                                        <li><a href="examenes.html?var=6">Exámenes Parasitológicos</a></li>                                        <li><a href="examenes.html?var=7">Exámenes Genéticos</a></li>                                        <li><a href="examenes.html?var=8">Exámenes de Biología Molecular</a></li>                                        <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li>                                        <li><a href="examenes.html?var=10">Exámenes de Paternidad</a></li>                                        <li><a href="examenes.html?var=11">Test Cutáneos</a></li>                                        <li><a href="examenes.html?var=12">Electrocardiogramas</a></li>                                        <li><a href="examenes.html?var=13">Niveles de Drogas</a></li>										</ul>								</li>                                                                                                                                <li>									<a href="centro_medico.html" align="center"><i class="fa fa-stethoscope"></i><br>CENTRO MEDICO</a>									<ul>											<li><a href="centro_medico.html?var=1">Medicina General</a></li>                                        <li><a href="centro_medico.html?var=2">Ginecología</a></li>                                        <li><a href="centro_medico.html?var=3">Neurología</a></li>										<li><a href="centro_medico.html?var=4">Neurología Infantil</a></li>                                        <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li>                                        <li><a href="centro_medico.html?var=6">Cirugía</a></li>										<li><a href="centro_medico.html?var=7">Traumatología</a></li>                                        <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li>                                        <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li>                                        <li><a href="centro_medico.html?var=10">Vacunatorio</a></li>                                        <li><a href="centro_medico.html?var=11">Kinesiología</a></li>                                        <li><a href="centro_medico.html?var=12">Psicología</a></li>                                        <li><a href="centro_medico.html?var=13">Nutricionista</a></li>                                        <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li>                                        <li><a href="centro_medico.html?var=15">Podología</a></li>										<li><a href="centro_medico.html?var=16">Dermatología</a></li>										<li><a href="centro_medico.html?var=17">Psicopedagogía</a></li>										<li><a href="centro_medico.html?var=18">Cardiología</a></li>										<li><a href="centro_medico.html?var=19">Quiropráctico</a></li>										</ul>								</li>																                                								<li>									<a href="http://190.13.138.218/irispaciente/login_Nuevo.asp" align="center"><i class="fa fa-file-text"></i><br>RESULTADOS</a>								</li>							</ul>					  </nav>						<!--/ main nav -->												<!-- mobile nav -->						<nav id="mobile-main-nav" class="mobile-main-nav">							<i class="fa fa-bars"></i><a href="#" class="opener">LABORATORIO ANCUD :: Menú</a>							<ul>																						<li>									<a href="index.html" align="center">INICIO</a>								</li>																								<li>								<a href="img/derechos_y_deberes_1.jpg" align="center" class="fancybox">DERECHOS Y DEBERES</a>								</li>																								<li>									<a href="preguntas.html" align="center">PREGUNTAS</a>								</li>																										<li>									<a href="sucursales.html" align="center">UBICACION</a>								</li>																																																	<ul style="display: block;">										<li>											<i></i><a href="index.html" align="center">LABORATORIO</a>											<ul>												<li class="text">										</li><li><a href="examenes.html?var=1">Exámenes Hematológicos</a></li>                                        <li><a href="examenes.html?var=2">Exámenes Bioquimicos</a></li>                                        <li><a href="examenes.html?var=3">Exámenes Hormonales</a></li>                                        <li><a href="examenes.html?var=4">Exámenes Inmunológicos</a></li>                                        <li><a href="examenes.html?var=5">Exámenes Microbiológicos</a></li>                                        <li><a href="examenes.html?var=6">Exámenes Parasitológicos</a></li>                                        <li><a href="examenes.html?var=7">Exámenes Genéticos</a></li>                                        <li><a href="examenes.html?var=8">Exámenes de Biología Molecular</a></li>                                        <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li>                                        <li><a href="examenes.html?var=10">Exámenes de Paternidad</a></li>                                        <li><a href="examenes.html?var=11">Test Cutáneos</a></li>                                        <li><a href="examenes.html?var=12">Electrocardiogramas</a></li>                                        <li><a href="examenes.html?var=13">Niveles de Drogas</a></li>																							</ul>										</li>									</ul>																																																<ul style="display: block;">										<li>											<i></i><a href="index.html" align="center">CENTRO MEDICO</a>											<ul>												<li class="text">										</li><li><a href="centro_medico.html?var=1">Medicina General</a></li>                                        <li><a href="centro_medico.html?var=2">Ginecología</a></li>                                        <li><a href="centro_medico.html?var=3">Neurología</a></li>										<li><a href="centro_medico.html?var=4">Neurología Infantil</a></li>                                        <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li>                                        <li><a href="centro_medico.html?var=6">Cirugía</a></li>										<li><a href="centro_medico.html?var=7">Traumatología</a></li>                                        <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li>                                        <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li>                                        <li><a href="centro_medico.html?var=10">Vacunatorio</a></li>                                        <li><a href="centro_medico.html?var=11">Kinesiología</a></li>                                        <li><a href="centro_medico.html?var=12">Psicología</a></li>                                        <li><a href="centro_medico.html?var=13">Nutricionista</a></li>                                        <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li>                                        <li><a href="centro_medico.html?var=15">Podología</a></li>										<li><a href="centro_medico.html?var=16">Dermatología</a></li>										<li><a href="centro_medico.html?var=17">Psicopedagogía</a></li>										<li><a href="centro_medico.html?var=18">Cardiología</a></li>										<li><a href="centro_medico.html?var=19">Quiropráctico</a></li>																							</ul>										</li>									</ul>																								<li>									<a href="http://190.13.138.218/irispaciente/login_Nuevo.asp" align="center">RESULTADOS</a>								</li>							</ul>						</nav>						<!--/ mobile nav -->				  </div>				</div>							<div class="sticky-container second-sticky"> <!-- aquui cambiar fondo con    fondo-->						<!-- logo -->						<section class="logo" id="logo" name="logo">							<div>								<a href="index.html"><img src="img/logos_1.svg" alt="ANCUD Laboratorio Clínico"></a>														</div>						</section>						<!--/ logo -->						<!-- main nav -->						<nav class="main-nav">														<ul>								<li>									<a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a>									<ul>																			<li class="text">													<h2>Centro Médico</h2>													<hr>													Tels. (65)-2-623 017 <hr> (65)-2-623 096													<hr>													<h2>Laboratorio</h2>													<hr>													Tels. (65)-2-622 254													<hr>													Aníbal Pinto Nº 308 <hr> Ancud - Chile													<hr>													contacto@laboratorioancud.cl             <hr>													<a href="sucursales.html" class="more"><i class="fa fa-angle-double-right"></i></a>												</li>																			</ul>								</li>																<li>								<a href="img/derechos_y_deberes_1.jpg" align="center" class="fancybox"> <i class="fa fa-eye"></i><p style="font-size:10px; line-height:1;">DERECHOS<br>Y DEBERES</p></a>								</li>																<li>									<a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a>									<ul>										</ul>								</li>                                                                								<li>									<a href="sucursales.html?var=1" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a>								</li>                                								<li>									<a href="examenes.html" align="center"><i class="fa fa-flask"></i><br>LABORATORIO</a>									<ul>											<li><a href="examenes.html?var=1">Exámenes Hematológicos</a></li>                                        <li><a href="examenes.html?var=2">Exámenes Bioquimicos</a></li>                                        <li><a href="examenes.html?var=3">Exámenes Hormonales</a></li>                                        <li><a href="examenes.html?var=4">Exámenes Inmunológicos</a></li>                                        <li><a href="examenes.html?var=5">Exámenes Microbiológicos</a></li>                                        <li><a href="examenes.html?var=6">Exámenes Parasitológicos</a></li>                                        <li><a href="examenes.html?var=7">Exámenes Genéticos</a></li>                                        <li><a href="examenes.html?var=8">Exámenes de Biología Molecular</a></li>                                        <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li>                                        <li><a href="examenes.html?var=10">Exámenes de Paternidad</a></li>                                        <li><a href="examenes.html?var=11">Test Cutáneos</a></li>                                        <li><a href="examenes.html?var=12">Electrocardiogramas</a></li>                                        <li><a href="examenes.html?var=13">Niveles de Drogas</a></li>										</ul>								</li>                                                                                                                                <li>									<a href="centro_medico.html" align="center"><i class="fa fa-stethoscope"></i><br>CENTRO MEDICO</a>									<ul>											<li><a href="centro_medico.html?var=1">Medicina General</a></li>                                        <li><a href="centro_medico.html?var=2">Ginecología</a></li>                                        <li><a href="centro_medico.html?var=3">Neurología</a></li>										<li><a href="centro_medico.html?var=4">Neurología Infantil</a></li>                                        <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li>                                        <li><a href="centro_medico.html?var=6">Cirugía</a></li>										<li><a href="centro_medico.html?var=7">Traumatología</a></li>                                        <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li>                                        <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li>                                        <li><a href="centro_medico.html?var=10">Vacunatorio</a></li>                                        <li><a href="centro_medico.html?var=11">Kinesiología</a></li>                                        <li><a href="centro_medico.html?var=12">Psicología</a></li>                                        <li><a href="centro_medico.html?var=13">Nutricionista</a></li>                                        <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li>                                        <li><a href="centro_medico.html?var=15">Podología</a></li>										<li><a href="centro_medico.html?var=16">Dermatología</a></li>										<li><a href="centro_medico.html?var=17">Psicopedagogía</a></li>										<li><a href="centro_medico.html?var=18">Cardiología</a></li>										<li><a href="centro_medico.html?var=19">Quiropráctico</a></li>										</ul>								</li>																                                								<li>									<a href="http://190.13.138.218/irispaciente/login_Nuevo.asp" align="center"><i class="fa fa-file-text"></i><br>RESULTADOS</a>								</li>							</ul>					  </nav>						<!--/ main nav -->												<!-- mobile nav -->						<nav id="mobile-main-nav" class="mobile-main-nav">							<i class="fa fa-bars"></i><a href="#" class="opener">LABORATORIO ANCUD :: Menú</a>							<ul>																						<li>									<a href="index.html" align="center">INICIO</a>								</li>																								<li>								<a href="img/derechos_y_deberes_1.jpg" align="center" class="fancybox">DERECHOS Y DEBERES</a>								</li>																								<li>									<a href="preguntas.html" align="center">PREGUNTAS</a>								</li>																										<li>									<a href="sucursales.html" align="center">UBICACION</a>								</li>																																																	<ul style="display: block;">										<li>											<i></i><a href="index.html" align="center">LABORATORIO</a>											<ul>												<li class="text">										</li><li><a href="examenes.html?var=1">Exámenes Hematológicos</a></li>                                        <li><a href="examenes.html?var=2">Exámenes Bioquimicos</a></li>                                        <li><a href="examenes.html?var=3">Exámenes Hormonales</a></li>                                        <li><a href="examenes.html?var=4">Exámenes Inmunológicos</a></li>                                        <li><a href="examenes.html?var=5">Exámenes Microbiológicos</a></li>                                        <li><a href="examenes.html?var=6">Exámenes Parasitológicos</a></li>                                        <li><a href="examenes.html?var=7">Exámenes Genéticos</a></li>                                        <li><a href="examenes.html?var=8">Exámenes de Biología Molecular</a></li>                                        <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li>                                        <li><a href="examenes.html?var=10">Exámenes de Paternidad</a></li>                                        <li><a href="examenes.html?var=11">Test Cutáneos</a></li>                                        <li><a href="examenes.html?var=12">Electrocardiogramas</a></li>                                        <li><a href="examenes.html?var=13">Niveles de Drogas</a></li>																							</ul>										</li>									</ul>																																																<ul style="display: block;">										<li>											<i></i><a href="index.html" align="center">CENTRO MEDICO</a>											<ul>												<li class="text">										</li><li><a href="centro_medico.html?var=1">Medicina General</a></li>                                        <li><a href="centro_medico.html?var=2">Ginecología</a></li>                                        <li><a href="centro_medico.html?var=3">Neurología</a></li>										<li><a href="centro_medico.html?var=4">Neurología Infantil</a></li>                                        <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li>                                        <li><a href="centro_medico.html?var=6">Cirugía</a></li>										<li><a href="centro_medico.html?var=7">Traumatología</a></li>                                        <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li>                                        <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li>                                        <li><a href="centro_medico.html?var=10">Vacunatorio</a></li>                                        <li><a href="centro_medico.html?var=11">Kinesiología</a></li>                                        <li><a href="centro_medico.html?var=12">Psicología</a></li>                                        <li><a href="centro_medico.html?var=13">Nutricionista</a></li>                                        <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li>                                        <li><a href="centro_medico.html?var=15">Podología</a></li>										<li><a href="centro_medico.html?var=16">Dermatología</a></li>										<li><a href="centro_medico.html?var=17">Psicopedagogía</a></li>										<li><a href="centro_medico.html?var=18">Cardiología</a></li>										<li><a href="centro_medico.html?var=19">Quiropráctico</a></li>																							</ul>										</li>									</ul>																								<li>									<a href="http://190.13.138.218/irispaciente/login_Nuevo.asp" align="center">RESULTADOS</a>								</li>							</ul>						</nav>						<!--/ mobile nav -->				  </div>';}





function cargar_pie(){
	
localStorage.pie_de_pagina='<div class="copyrights">:: Laboratorio Clínico y Centro Médico Ancud :: Aníbal Pinto Nº 308 - Esq. Pedro Montt :: Fono/Fax: (65)-2-623 017 - (65)-2-623 096 :: Ancud - Región de Los Lagos - Chile ::</div>';			

}






function cargar_horario(){
/*	
			<br>
			<label>Laboratorio</label>
			<ul>
				<li><span><b>Lunes a Viernes</b></span></li>
				<li>Mañana:</li>
				<li>08:30 a 13:00</li>
				<li>Tarde:</li>
				<li>14:30 a 19:15</li>
				<li><span><b>Sábado</b></span></li>
				<li>Mañana:</li>
				<li>09:00 a 13:00</li>

			</ul><br>
			<label>Centro Médico</label>
			<ul>
				<li><span><b>Lunes a Viernes</b></span></li>
				<li>Mañana:</li>
				<li>08:30 a 13:00</li>
				<li>Tarde:</li>
				<li>14:15 a 20:30</li>
				<li><span><b>Sábado</b></span></li>
				<li>Mañana:</li>
				<li>09:00 a 13:00</li>

			</ul>
			<i id="tuner-switcher" class="fa">HORARIO</i>
*/			
	
localStorage.horario='<br><label>Laboratorio</label><ul><li><span><b>Lunes a Viernes</b></span></li><li>Mañana:</li><li>08:30 a 13:00</li><li>Tarde:</li><li>14:30 a 19:15</li><li><span><b>Sábado</b></span></li><li>Mañana:</li><li>09:00 a 13:00</li></ul><br><label>Centro Médico</label><ul><li><span><b>Lunes a Viernes</b></span></li><li>Mañana:</li><li>08:30 a 13:00</li><li>Tarde:</li><li>14:15 a 20:30</li><li><span><b>Sábado</b></span></li><li>Mañana:</li><li>09:00 a 13:00</li></ul><i id="tuner-switcher" class="fa">HORARIO</i>';			

}



function cargar_derechos_y_deberes(){
/*	
			<br>
				<table style="width:100%">
  <tr>
    <td><img src="img/derechos_y_deberes_1.jpg" alt="inmfs" width="700px"></td>

  </tr>


</table>
			<i id="tuner-switcher_2" class="fa">HORARIO</i>
*/			
	
localStorage.derechos_y_deberes='<br><img src="img/derechos_y_deberes_1.jpg" width="600px"><i id="tuner-switcher_2" class="fa">Exige tus Derechos</i>';			

}











 function buscar3()
 {
 	// limpiar();
 var str=document.getElementById("codigo2").value; //OBTENEMOS EL VALOR DEL INPUT

  //alert(str);

 // window.open("http://186.67.178.3/ACLIN/getcustomer5.asp?q="+str);

  //window.open("http://186.67.178.3/ACLIN/getcustomer5.asp?q="+str, "_blank", "status=no, scrollbars=yes, resizable=yes, top=100, width=340, height=600");

  
  //window.open("guest.asp?q="+str, "_blank", "status=no, scrollbars=yes, resizable=yes, top=100, width=340, height=600");
  
  //var x2 = '<iframe style="width:90%;" src="guest.asp?q="+'+str+' ></iframe>';
  
  var x = "guest.asp?q="+str;
  
  alert(x);

  document.getElementById("respuesta_busqueda").src = x;

  console.log(x);
  localStorage.respuesta_busqueda = x;
 // document.getElementById("respuesta_busqueda").innerHTML = 

 }

 
 
 
 
 
 

    function buscar_indicaciones_2()
    {
        // Obtenemos el valor por el id
        var str=document.getElementById("codigo2").value;

        
       // document.getElementById("resultado").innerHTML=" \
       //     <br>Respuesta: "+str; 
        //
        var xmlhttp;    
if (str=="")
  {
  //document.getElementById("someFrame2").innerHTML="";
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
console.log(xmlhttp.responseText);
    document.getElementById('respuesta_final').innerHTML=xmlhttp.responseText;

    }
  }
xmlhttp.open("GET","http://186.67.178.5:8085/web_ancud/guest.asp?q="+str,true);
xmlhttp.send();
        //
          
    }

 
 
 



 
function buscar_indicaciones(){

    try {

        var texto_busqueda = document.getElementById("codigo2").value;
		alert(texto_busqueda);
        var url;
        url = "http://186.67.178.5:8088/webservice_laboratorio_ancud/webservice_laboratorio_ancud/Service1.svc/";

        valor = '{"texto_busqueda":"'+texto_busqueda+'"}';

        $.ajax({
            type: 'Post',
            data: valor,
            url: url + 'obtener_especificaciones',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            //async:true,
           // beforeSend: enviarAntes_validar,
           // complete: enviarFinal_validar,

            success: function (msg) {
                var resultado = msg.obtener_especificacionesResult;

                //alert("respuesta: "+resultado);
                //console.log(resultado);

                if(resultado == "error"){
                    alert("Error: " + resultado);
                    console.log("error");

                }else{

				//alert("resultado: "+resultado);
				$('#respuesta_final').empty();
				
                    var i = 0;
					
					$("td:odd").text(i);
					
                    for (i=0;i<= resultado.length -1;i++){
                       
					   document.getElementById("respuesta_final").innerHTML += "<tr>" +
              "<td> " + resultado[i].e_codigo+" </td>" +
              "<td> " + resultado[i].e_especificacion+" </td>" +
              "<td> " + resultado[i].e_examen+" </td>" +
              "<td style='display: none'></td>" +
              "</tr>";

					   }
					        $("tr:odd").css("background-color", "#daecff");
                            $("tr:even").css("background-color","#ffffff");

                }
            },

            error: function (e) {
                alert("Error  : " + e.statusText);
            }

        });

    }
    catch(err) {
        alert("Se perdió la conección vuelva a iniciar sesión "+err);

    }

}
          

 
 