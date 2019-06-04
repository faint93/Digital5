function cargar_menu() {

    //localStorage.menu = '<div class="sticky-wrapp"> <div class="sticky-container"> <!-- aquui cambiar fondo con fondo--> <!-- logo --> <section class="logo" id="logo" name="logo"> <div> <a href="index.html"><img src="img/logos_1.svg" alt="ANCUD Laboratorio Clínico"></a> </div> </section> <!--/ logo --> <!-- main nav --> <nav class="main-nav"> <ul> <li> <a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a> <ul> <li> <a href="index.html">Ubicación</a> <ul> <li class="text"> <h2>Información</h2> <hr> Tels. (065)-623017 <hr> (065)-623096 <hr> Aníbal Pinto Nº 308 <hr> Ancud - Chile <hr> info@laboratorioancud.cl <hr> <a href="sucursales.html" class="more"><i class="fa fa-angle-double-right"></i></a> </li> </ul> </li> </ul> </li> <li> <a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a> <ul>	</ul> </li> <li> <a href="sucursales.html" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a> <ul>	<li><a href="sucursales.html?var=1">Aníbal Pinto Nº 308</a></li> </ul> </li> <li> <a href="examenes.html" align="center"><i class="fa fa-flask"></i><br>LABORATORIO</a> <ul>	<li><a href="examenes.html?var=1">Examenes Hematológicos</a></li> <li><a href="examenes.html?var=2">Examenes Bioquimicos</a></li> <li><a href="examenes.html?var=3">Examenes Hormonales</a></li> <li><a href="examenes.html?var=4">Examenes Inmunológicos</a></li> <li><a href="examenes.html?var=5">Examenes Microbiológicos</a></li> <li><a href="examenes.html?var=6">Examenes Parasitológicos</a></li> <li><a href="examenes.html?var=7">Examenes Genéticos</a></li> <li><a href="examenes.html?var=8">Examenes de Biología Molecular</a></li> <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li> <li><a href="examenes.html?var=10">Examenes de Paternidad</a></li> <li><a href="examenes.html?var=11">Test Cutáneos</a></li> <li><a href="examenes.html?var=12">Electrocardiogramas</a></li> <li><a href="examenes.html?var=13">Niveles de Drogas</a></li> </ul> </li> <li> <a href="centro_medico.html" align="center"><i class="fa fa-stethoscope"></i><br>CENTRO MEDICO</a> <ul>	<li><a href="centro_medico.html?var=1">Medicina General</a></li> <li><a href="centro_medico.html?var=2">Ginecología</a></li> <li><a href="centro_medico.html?var=3">Neurología</a></li> <li><a href="centro_medico.html?var=4">Neurología Infantil</a></li> <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li> <li><a href="centro_medico.html?var=6">Cirugía</a></li> <li><a href="centro_medico.html?var=7">Traumatología</a></li> <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li> <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li> <li><a href="centro_medico.html?var=10">Vacunatorio</a></li> <li><a href="centro_medico.html?var=11">Kinesiología</a></li> <li><a href="centro_medico.html?var=12">Psicología</a></li> <li><a href="centro_medico.html?var=13">Nutricionista</a></li> <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li> <li><a href="centro_medico.html?var=15">Podología</a></li> </ul> </li> <li> <a href="http://186.67.178.5:8083/Presentacion/loginpaciente.aspx" align="center"><i class="fa fa-file-text"></i><br>RESULTADOS</a> </li> </ul> </nav> <!--/ main nav --> <!-- mobile nav --> <nav id="mobile-main-nav" class="mobile-main-nav"> <i class="fa fa-bars"></i><a href="#" class="opener">LABORATORIO ANCUD :: Menú</a> <ul> <li> <a href="index.html" class="active" align="center"><i class="fa fa-home"></i>INICIO</a> </li> <ul style="display: block;"> <li> <i></i><a href="preguntas.html" align="center">PREGUNTAS</a> <ul> <li class="text"> </li> </ul> </li> </ul> <li> <a href="sucursales.html" align="center"><i class="fa fa-flask"></i>UBICACION</a> </li> <ul style="display: block;"> <li> <i></i><a href="index.html" align="center">LABORATORIO</a> <ul> <li class="text"> </li><li><a href="examenes.html?var=1">Examenes Hematológicos</a></li> <li><a href="examenes.html?var=2">Examenes Bioquimicos</a></li> <li><a href="examenes.html?var=3">Examenes Hormonales</a></li> <li><a href="examenes.html?var=4">Examenes Inmunológicos</a></li> <li><a href="examenes.html?var=5">Examenes Microbiológicos</a></li> <li><a href="examenes.html?var=6">Examenes Parasitológicos</a></li> <li><a href="examenes.html?var=7">Examenes Genéticos</a></li> <li><a href="examenes.html?var=8">Examenes de Biología Molecular</a></li> <li><a href="examenes.html?var=9">Toma de muestras a domicilio</a></li> <li><a href="examenes.html?var=10">Examenes de Paternidad</a></li> <li><a href="examenes.html?var=11">Test Cutáneos</a></li> <li><a href="examenes.html?var=12">Electrocardiogramas</a></li> <li><a href="examenes.html?var=13">Niveles de Drogas</a></li> </ul> </li> </ul> <ul style="display: block;"> <li> <i></i><a href="index.html" align="center">CENTRO MEDICO</a> <ul> <li class="text"> </li><li><a href="centro_medico.html?var=1">Medicina General</a></li> <li><a href="centro_medico.html?var=2">Ginecología</a></li> <li><a href="centro_medico.html?var=3">Neurología</a></li> <li><a href="centro_medico.html?var=4">Neurología Infantil</a></li> <li><a href="centro_medico.html?var=5">Otorrinolaringologo</a></li> <li><a href="centro_medico.html?var=6">Cirugía</a></li> <li><a href="centro_medico.html?var=7">Traumatología</a></li> <li><a href="centro_medico.html?var=8">Control de Niño Sano</a></li> <li><a href="centro_medico.html?var=9">Matrona Control Embarazo</a></li> <li><a href="centro_medico.html?var=10">Vacunatorio</a></li> <li><a href="centro_medico.html?var=11">Kinesiología</a></li> <li><a href="centro_medico.html?var=12">Psicología</a></li> <li><a href="centro_medico.html?var=13">Nutricionista</a></li> <li><a href="centro_medico.html?var=14">Fonoaudiología</a></li> <li><a href="centro_medico.html?var=15">Podología</a></li> </ul> </li> </ul> </ul> </nav> <!--/ mobile nav --> </div> </div>';

    localStorage.menu = '   <div class="sticky-wrapp">            <div class="sticky-container">                <!-- aquui cambiar fondo con    fondo-->                <!-- logo -->                <section class="logo" id="logo" name="logo">                    <div>                        <a href="index.html"><img src="img/logos_1.png" alt="entro Médico y Laboratorio Clínico Frilab"></a>                    </div>                </section>                <!--/ logo -->                <!-- main nav -->                <nav class="main-nav">                    <ul>                        <li>                            <a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a>                            <ul>                                <li class="text">                                    <h3><b>ALPACK</b></h3>                                    Lunes a Viernes                                    <br> 9:00 a 13:00 hrs.                                    <br> 14:00 a 19:00 hrs.                                    <br> Sábado                                    <br> 9:00 a 13:00 hrs.<br>                                    <br>                                </li>                            </ul>                        </li>                        <li>                            <a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="sucursales.html?var=1" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a>                        </li>                        <li>                            <a href="quienessomos.html" align="center"><i class="fa fa-question-circle"></i><br>EMPRESA</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="servcicios.html" align="center"><i class="fa fa-question-circle"></i><br>SERVICIOS</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="noticias.html" align="center"><i class="fa fa-question-circle"></i><br>NOTICIAS</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="contacto.html" align="center"><i class="fa fa-question-circle"></i><br>CONTACTO</a>                            <ul>                            </ul>                        </li>                    </ul>                </nav>                <!--/ main nav -->                <!-- mobile nav -->                <nav id="mobile-main-nav" class="mobile-main-nav">                    <i class="fa fa-bars"></i><a href="#" class="opener">LABORATORIO ANCUD :: Menú</a>                    <ul>                        <li>                            <a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a>                            <ul>                                <li class="text">                                    <h3><b>ALPACK</b></h3>                                    Lunes a Viernes                                    <br> 9:00 a 13:00 hrs.                                    <br> 14:00 a 19:00 hrs.                                    <br> Sábado                                    <br> 9:00 a 13:00 hrs.<br>                                    <br>                                </li>                            </ul>                        </li>                        <li>                            <a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a>                        </li>                        <li>                            <a href="sucursales.html?var=1" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a>                        </li>                        <li>                            <a href="quienessomos.html" align="center"><i class="fa fa-question-circle"></i><br>EMPRESA</a>                        </li>                        <li>                            <a href="servcicios.html" align="center"><i class="fa fa-question-circle"></i><br>SERVICIOS</a>                        </li>                        <li>                            <a href="noticias.html" align="center"><i class="fa fa-question-circle"></i><br>NOTICIAS</a>                        </li>                        <li>                            <a href="contacto.html" align="center"><i class="fa fa-question-circle"></i><br>CONTACTO</a>                        </li>                    </ul>                </nav>                <!--/ mobile nav -->            </div>        </div>    <div class="sticky-container second-sticky">                <!-- aquui cambiar fondo con    fondo-->                <!-- logo -->                <section class="logo" id="logo" name="logo">                    <div>                        <a href="index.html"><img src="img/logos_1.png" alt="entro Médico y Laboratorio Clínico Frilab"></a>                    </div>                </section>                <!--/ logo -->                <!-- main nav -->                <nav class="main-nav">                    <ul>                        <li>                            <a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a>                            <ul>                                <li class="text">                                    <h3><b>ALPACK</b></h3>                                    Lunes a Viernes                                    <br> 9:00 a 13:00 hrs.                                    <br> 14:00 a 19:00 hrs.                                    <br> Sábado                                    <br> 9:00 a 13:00 hrs.<br>                                    <br>                                </li>                            </ul>                        </li>                        <li>                            <a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="sucursales.html?var=1" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a>                        </li>                        <li>                            <a href="quienessomos.html" align="center"><i class="fa fa-question-circle"></i><br>EMPRESA</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="servcicios.html" align="center"><i class="fa fa-question-circle"></i><br>SERVICIOS</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="noticias.html" align="center"><i class="fa fa-question-circle"></i><br>NOTICIAS</a>                            <ul>                            </ul>                        </li>                        <li>                            <a href="contacto.html" align="center"><i class="fa fa-question-circle"></i><br>CONTACTO</a>                            <ul>                            </ul>                        </li>                    </ul>                </nav>                <!--/ main nav -->                <!-- mobile nav -->                <nav id="mobile-main-nav" class="mobile-main-nav">                    <i class="fa fa-bars"></i><a href="#" class="opener">LABORATORIO ANCUD :: Menú</a>                    <ul>                        <li>                            <a href="index.html" class="active" align="center"><i class="fa fa-home"></i><br>INICIO</a>                            <ul>                                <li class="text">                                    <h3><b>ALPACK</b></h3>                                    Lunes a Viernes                                    <br> 9:00 a 13:00 hrs.                                    <br> 14:00 a 19:00 hrs.                                    <br> Sábado                                    <br> 9:00 a 13:00 hrs.<br>                                    <br>                                </li>                            </ul>                        </li>                        <li>                            <a href="preguntas.html" align="center"><i class="fa fa-question-circle"></i><br>PREGUNTAS</a>                        </li>                        <li>                            <a href="sucursales.html?var=1" align="center"><i class="fa fa-street-view"></i><br>UBICACIÓN</a>                        </li>                        <li>                            <a href="quienessomos.html" align="center"><i class="fa fa-question-circle"></i><br>EMPRESA</a>                        </li>                        <li>                            <a href="servcicios.html" align="center"><i class="fa fa-question-circle"></i><br>SERVICIOS</a>                        </li>                        <li>                            <a href="noticias.html" align="center"><i class="fa fa-question-circle"></i><br>NOTICIAS</a>                        </li>                        <li>                            <a href="contacto.html" align="center"><i class="fa fa-question-circle"></i><br>CONTACTO</a>                        </li>                    </ul>                </nav>                <!--/ mobile nav -->            </div>';
}





function cargar_pie() {

    localStorage.pie_de_pagina = '<div class="copyrights">:: ALPACK :: Manuel Montt Nº 480 :: Fono: +56-9 7987 7986  :: Rancagua - Región del Libertador Bernardo O´Higgins - Chile ::</div>';

}






function cargar_horario() {
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



    /* horaqrio normal*/

    localStorage.horario = '<br><label>ALPACK</label><ul><li><b>Lunes a Viernes</b></li><li>09:00 a 13:00</li><li>14:00 a 19:00</li><li><b>S&aacute;bado</b></li><li>09:00 a 13:00 <br></li></ul><i id="tuner-switcher" class="fa">HORARIO</i>';


    /*horario verano*/
    /*
    localStorage.horario='<br><label>Laboratorio</label><ul><li><span><b>Lunes a Viernes</b></span></li><li>Mañana:</li><li>08:30 a 13:00</li><li>Tarde:</li><li>14:30 a 19:15</li></ul><br><label>Centro Médico</label><ul><li><span><b>Lunes a Viernes</b></span></li><li>Mañana:</li><li>08:30 a 13:00</li><li>Tarde:</li><li>14:15 a 20:30</li></ul><i id="tuner-switcher" class="fa">HORARIO</i>';
    */


}



function cargar_derechos_y_deberes() {
    /*	
    			<br>
    				<table style="width:100%">
      <tr>
        <td><img src="img/derechos_y_deberes_1.jpg" alt="inmfs" width="700px"></td>

      </tr>


    </table>
    			<i id="tuner-switcher_2" class="fa">HORARIO</i>
    */

    localStorage.derechos_y_deberes = '<br><img src="img/derechos_y_deberes_1.jpg" width="600px"><i id="tuner-switcher_2" class="fa">Exige tus Derechos</i>';

}











function buscar3() {
    // limpiar();
    var str = document.getElementById("codigo2").value; //OBTENEMOS EL VALOR DEL INPUT

    //alert(str);

    // window.open("http://186.67.178.3/ACLIN/getcustomer5.asp?q="+str);

    //window.open("http://186.67.178.3/ACLIN/getcustomer5.asp?q="+str, "_blank", "status=no, scrollbars=yes, resizable=yes, top=100, width=340, height=600");


    //window.open("guest.asp?q="+str, "_blank", "status=no, scrollbars=yes, resizable=yes, top=100, width=340, height=600");

    //var x2 = '<iframe style="width:90%;" src="guest.asp?q="+'+str+' ></iframe>';

    var x = "guest.asp?q=" + str;

    alert(x);

    document.getElementById("respuesta_busqueda").src = x;

    console.log(x);
    localStorage.respuesta_busqueda = x;
    // document.getElementById("respuesta_busqueda").innerHTML = 

}








function buscar_indicaciones_2() {
    // Obtenemos el valor por el id
    var str = document.getElementById("codigo2").value;


    // document.getElementById("resultado").innerHTML=" \
    //     <br>Respuesta: "+str; 
    //
    var xmlhttp;
    if (str == "") {
        //document.getElementById("someFrame2").innerHTML="";
        return;
    }
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            document.getElementById('respuesta_final').innerHTML = xmlhttp.responseText;

        }
    }
    xmlhttp.open("GET", "http://186.67.178.5:8085/web_ancud/guest.asp?q=" + str, true);
    xmlhttp.send();
    //

}








function buscar_indicaciones() {

    var texto_busqueda = document.getElementById("codigo2").value;

    if (texto_busqueda != "") {


        try {

            //alert(texto_busqueda);		
            document.getElementById("tabla_4").style.display = "block";

            var url;
            url = "http://186.67.178.5:8088/webservice_laboratorio_frilab/webservice_laboratorio_frilab/Service1.svc/";

            valor = '{"texto_busqueda":"' + texto_busqueda + '"}';

            $.ajax({
                type: 'Post',
                data: valor,
                url: url + 'obtener_especificaciones',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                //async:true,
                // beforeSend: enviarAntes_validar,
                // complete: enviarFinal_validar,

                success: function(msg) {
                    var resultado = msg.obtener_especificacionesResult;

                    //alert("respuesta: "+resultado);
                    //console.log(resultado);

                    if (resultado.e_codigo == "") {
                        alert("Registro no encontrado..., ¿Cometió un error al escribir?, ...intente nuevamente.");
                    }


                    if (resultado.e_codigo == "error") {
                        alert("Ha ocurrido el siguiente error: " + resultado.e_especificacion + " ,por favor, realice nuevamente la busqueda");
                        console.log("error");

                    }


                    if (resultado.e_codigo != "error" && resultado.e_codigo != "") {

                        //alert("resultado: "+resultado);
                        $('#respuesta_final').empty();

                        var i = 0;
                        //$("td:odd").text(i);					
                        for (i = 0; i <= resultado.length - 1; i++) {

                            document.getElementById("respuesta_final").innerHTML += "<tr>" +
                                "<td class='texto_negrita'><b> " + resultado[i].e_codigo + " </b></td>" +
                                "<td class='texto_normal'> <p align='center'>" + resultado[i].e_examen + "</p> <p class='texto_negrita_rojo'> " + resultado[i].e_especificacion + " </p></td>" +
                                "</tr>";

                        }
                        document.getElementById("respuesta_pie").innerHTML = "<span class='texto_negrita'>© 2016 - <a>www.IrisLAB.cl </a></span>";
                        $("tr:odd").css("background-color", "#daecff");
                        $("tr:even").css("background-color", "#ffffff");
                    }
                },

                error: function(e) {
                    alert("Ha ocurrido un " + e.statusText + " ,por favor, realice nuevamente la busqueda");
                }

            });

        } catch (err) {
            alert("Se perdió la conección vuelva a iniciar sesión " + err);

        }


    } //fin if

}






function enviar_correo2() {

    var nombre = document.getElementById("nombre").value;
    var ciudad = document.getElementById("ciudad").value;
    var fono = document.getElementById("fono").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    /*
    document.getElementById("validar_nombre").value = "";
    document.getElementById("validar_ciudad").value = "";
    document.getElementById("validar_fono").value = "";
    document.getElementById("validar_email").value = "";
    document.getElementById("validar_comentario").value = "";*/

    if (nombre == "") {
        document.getElementById("validar_nombre").style.display = "block";
        document.getElementById("validar_nombre").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Nombre</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_nombre").style.display = "none";
    }

    if (ciudad == "") {
        document.getElementById("validar_ciudad").style.display = "block";
        document.getElementById("validar_ciudad").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Ciudad</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_ciudad").style.display = "none";
    }

    if (fono == "") {
        document.getElementById("validar_fono").style.display = "block";
        document.getElementById("validar_fono").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Fono</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_fono").style.display = "none";
    }

    if (email == "") {
        document.getElementById("validar_email").style.display = "block";
        document.getElementById("validar_email").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... E-mail</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_email").style.display = "none";
    }

    if (comentario == "") {
        document.getElementById("validar_comentario").style.display = "block";
        document.getElementById("validar_comentario").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Comentario</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_comentario").style.display = "none";
    }


    if (nombre != "" && ciudad != "" && fono != "" && email != "" && comentario != "") {

        try {

            //document.getElementById("validar").style.display = "none";

            var url;
            url = "http://186.67.178.5:8088/webservice_laboratorio_frilab/webservice_laboratorio_frilab/Service1.svc/";

            valor = '{"nombre":"' + nombre + '", "ciudad":"' + ciudad + '", "fono":"' + fono + '", "email":"' + email + '", "comentario":"' + comentario + '"}';
            console.log(valor);
            $.ajax({
                type: 'Post',
                data: valor,
                url: url + 'enviar_correo',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                //async:true,
                // beforeSend: enviarAntes_validar,
                // complete: enviarFinal_validar,
                success: function(msg) {
                    var resultado = msg.enviar_correoResult;

                    //alert("respuesta: " + resultado);
                    //console.log(resultado);
                    document.getElementById("nombre").value = "";
                    document.getElementById("ciudad").value = "";
                    document.getElementById("fono").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("comentario").value = "";

                },

                error: function(e) {
                    console.log(e);
                    //alert("Ha ocurrido un " + e.statusText + " ,intente de nuevo por favor");
                }

            });

        } catch (err) {

            alert("Se perdió la conección vuelva a iniciar sesión " + err);
        }
        alert("Envío OK");

    } //fin if

}



function GetData() {

    var nombre = document.getElementById("nombre").value;
    var ciudad = document.getElementById("ciudad").value;
    var fono = document.getElementById("fono").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    /*
    document.getElementById("validar_nombre").value = "";
    document.getElementById("validar_ciudad").value = "";
    document.getElementById("validar_fono").value = "";
    document.getElementById("validar_email").value = "";
    document.getElementById("validar_comentario").value = "";*/

    if (nombre == "") {
        document.getElementById("validar_nombre").style.display = "block";
        document.getElementById("validar_nombre").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Nombre</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_nombre").style.display = "none";
    }

    if (ciudad == "") {
        document.getElementById("validar_ciudad").style.display = "block";
        document.getElementById("validar_ciudad").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Ciudad</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_ciudad").style.display = "none";
    }

    if (fono == "") {
        document.getElementById("validar_fono").style.display = "block";
        document.getElementById("validar_fono").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Fono</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_fono").style.display = "none";
    }

    if (email == "") {
        document.getElementById("validar_email").style.display = "block";
        document.getElementById("validar_email").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... E-mail</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_email").style.display = "none";
    }

    if (comentario == "") {
        document.getElementById("validar_comentario").style.display = "block";
        document.getElementById("validar_comentario").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Comentario</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_comentario").style.display = "none";
    }


    if (nombre != "" && ciudad != "" && fono != "" && email != "" && comentario != "") {

        try {

            //var numero = 1;
            //var nombre = 1;
            var url;
            url = "http://186.67.178.5:8088/webservice_laboratorio_frilab/webservice_laboratorio_frilab/Service1.svc/";

            valor = '{"nombre":"' + nombre + '"}';
            console.log(valor);

            $.ajax({
                type: 'Post',
                data: valor,
                url: url + 'prueba_1',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                //async:false,
                // beforeSend: enviarAntes_validar,
                // complete: enviarFinal_validar,
                success: function(msg) {
                    var resultado = msg.prueba_1Result;
                    alert(resultado);
                    console.log(resultado);
                    //window.open(this.href="http://www.laboratorioancud.cl/index.html","_parent");

                },

                error: function(e) {
                    alert("Ha ocurrido un " + e.statusText + ", intente de nuevo por favor");
                }

            });

        } catch (err) {
            alert("Se perdió la conección vuelva a iniciar sesión " + err);
        }

    } //fin if
}





function enviar_correo() {

    //alert("Prueba_1");

    var nombre = document.getElementById("nombre").value;
    var ciudad = document.getElementById("ciudad").value;
    var fono = document.getElementById("fono").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;



    if (nombre == "") {
        document.getElementById("validar_nombre").style.display = "block";
        document.getElementById("validar_nombre").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Nombre</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_nombre").style.display = "none";
    }

    if (ciudad == "") {
        document.getElementById("validar_ciudad").style.display = "block";
        document.getElementById("validar_ciudad").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Ciudad</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_ciudad").style.display = "none";
    }

    if (fono == "") {
        document.getElementById("validar_fono").style.display = "block";
        document.getElementById("validar_fono").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Fono</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_fono").style.display = "none";
    }

    if (email == "") {
        document.getElementById("validar_email").style.display = "block";
        document.getElementById("validar_email").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... E-mail</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_email").style.display = "none";
    }

    if (comentario == "") {
        document.getElementById("validar_comentario").style.display = "block";
        document.getElementById("validar_comentario").innerHTML = "<div class='wpb_alert wpb_alert_error'><h1>Falta Completar... Comentario</h1><p id='validar_campos'></p></div>";
    } else {
        document.getElementById("validar_comentario").style.display = "none";
    }


    if (nombre != "" && ciudad != "" && fono != "" && email != "" && comentario != "") {

        try {


            var url;
            url = "http://186.67.178.5:8088/webservice_laboratorio_ancud/webservice_laboratorio_ancud/Service1.svc/";

            valor = '{"nombre":"' + nombre + '", "ciudad":"' + ciudad + '", "fono":"' + fono + '", "email":"' + email + '", "comentario":"' + comentario + '"}';

            $.ajax({
                type: 'Post',
                data: valor,
                url: url + 'enviar_correo',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                //async:false,
                // beforeSend: enviarAntes_validar,
                // complete: enviarFinal_validar,
                success: function(msg) {
                    var resultado = msg.enviar_correoResult;

                    alert(resultado);
                    //console.log(resultado);			
                    document.getElementById("nombre").value = "";
                    document.getElementById("ciudad").value = "";
                    document.getElementById("fono").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("comentario").value = "";

                    //window.open(this.href="http://www.laboratorioancud.cl/index.html","_parent");

                },

                error: function(e) {
                    alert("Ha ocurrido un " + e.statusText + ", intente de nuevo por favor");
                }

            });

        } catch (err) {
            alert("Se perdió la conección vuelva a iniciar sesión " + err);
        }

    } //fin if

}