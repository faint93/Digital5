<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%>



<%
	Set rst_BM4 = Server.CreateObject("ADODB.Recordset")
%>


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<style type="text/css">
.Texto_Normal {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	color: #666666;
}
.Texto_Negrita {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	color: #666666;
	font-weight: bold;
}
.Texto_Negrita_Rojo {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 10px;
	color: red;
	font-weight: bold;
}
</style>
</head>
<body>



<!--#include file ="ConexionIRIS.asp" -->
<!--#include file="rutinas.asp" -->

<table width="" height="" border="0" align="center">
  <!--DWLayoutTable-->
  <tr>
    <td width="100%" height="" valign="top" bgcolor="#ffffff"><table width="100%" border="0" cellpadding="10" cellspacing="10">
      <!--DWLayoutTable-->
      <tr>
        <td height="" colspan="2" valign="middle" bgcolor="#e6f4ff" class="Texto_Normal"><div align="center" class="Texto_Negrita">Listado de Ex&aacute;menes  </div></td>
      </tr>
      <tr bgcolor="#f0f8ff" class="Estilo10">
        <td width="" valign="middle"><div align="center" class="Texto_Negrita">C&oacute;digo</div></td>
        <td width="" height="" valign="middle" bgcolor="#f0f8ff"><div align="center" class="Texto_Negrita">Descripci&oacute;n</div></td>
        </tr>
      <tr>
	  
<%
	dim g_Validado 
	dim busqueda 'michell'

		Dim Activa_Boton_Imprimir 
		Activa_Boton_Imprimir =0

	set busqueda = request.querystring("q") 'michell'

	busqueda =  "%" &  busqueda & "%" 'michell'
	  
 	set rst_BM4 = connBM3.execute("IRIS_BUSCA_CODIGO_FONASA_POR_NOMBRE_O_CODIGO_PAGINA_WEB  '"& busqueda &"' ")	
 	
	oColor =""




	while not rst_BM4.eof
		oColor = CambioColor(oColor)
		g_CF= rst_BM4("CF_COD") 
		g_Descripcion = rst_BM4("CF_DESC")
		g_TIPO_PAGO = TRIM(rst_BM4("IND_DESC"))

	
%>	  
        <td style="padding:5px;" bgcolor="<%=oColor%>" valign="middle" ><span class="Texto_Negrita"><%=g_CF%></span></div></td>
        <td style="padding:5px;"height="28" valign="middle" bgcolor="<%=oColor%>"><span class="Texto_Normal"><%=g_Descripcion%></span><br />
  <span class="Texto_Negrita_Rojo"><%=g_TIPO_PAGO%></span></td>

			
       	  </tr>

<%		
		rst_BM4.movenext
	Wend	
%>


<strong></strong>
	
      <!--tr-->

      <tr>
        <td colspan="2" valign="top" bgcolor="#e6f4ff"><div align="center"><a><strong><font color="#333333" face="Arial, Helvetica"><span class="Texto_Negrita"></span>
		
		</div>
          <div align="center"></div></td>
      </tr>

    </table>    </td>
  </tr>
</table>
<%
connBM3.close
%>




</body>
</html>
