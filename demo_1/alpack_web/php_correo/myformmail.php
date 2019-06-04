<?
/*
MY FORM MAIL Version v1.0
Copyright (C) 2001 Mert Yaldýz - mertyaldiz@yahoo.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
*/

//----------------------------------
//    REQUIRED PARAMETERS
//----------------------------------
/* For Turkish change the variable as $languagepack="turk.inc.php";  */
$languagepack="esp.inc.php";


//----------------------------------
//   OPTIONAL PARAMETERS
//----------------------------------

// Message header such as "confirm" or "error"
$headersize="4";
$headercolor="ff0000";
// Message body
$textsize="3";
$textcolor="0000ff";
$linkcolor="ffcc99";


/*****************************************************/
/*     YOU DO NOT NEED TO MODIFY ANYTHING BELOW     */
/***************************************************/

#include("inc/header.php");
// include the language pack
include("inc/$languagepack");
if( !empty($HTTP_POST_VARS))
{
// if any form submission start the process
function prompt_user($messageheader,$promptmessage)
{
	global $l,$goback,$fm_error,$plsfill,$invalidaddress,$fm_confirm,$sent,$unsent,$author;
	global $headersize,$headercolor,$textsize,$textcolor,$linkcolor;
    include("inc/header.php");

echo "<center><font size=\"$headersize\" color=\"$headercolor\">$messageheader</font>
			<br>
		<font size=\"$textsize\"  color=\"$textcolor\">$promptmessage</font>
			<br><br>
			<a href=\"javascript:history.go(-1)\"><font size=\"2\" color=\"$linkcolor\">$goback</font></a>
	  </center>
			<hr width=\"200\"><center> <br>Volver a: <br><a href=\"http://www.laboratorioancud.cl\"><font size=\"2\" color=\"$linkcolor\">Laboratorio Clínico Ancud</font></a></center>";
include("inc/footer.php");
exit;
}

// function to check the empty fields
function check_fields($fieldname,$fieldtype)
         {
		 global $fm_error,$plsfill;
         if (empty($fieldname))
            {
            prompt_user("$fm_error","$plsfill <br> * $fieldtype");
            }
         }

// function to check the email validity
function check_email($mailtocheck)
         {
			 global $fm_error,$plsfill,$invalidaddress;
         $mail_test= trim($mailtocheck);
         if (!eregi("^[_\\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\\.)+[a-z]{2,3}$", $mail_test))
             {
             prompt_user("$fm_error","$invalidaddress :<br> $mail_test");
             }
         }

// check if there are required fields
if ($req)
{
   $requiredfields=explode(",",$req);
   for ($temp=0;$temp<count($requiredfields);$temp++)
       {
       $requiredfields[$temp]=trim ($requiredfields[$temp]);
       if ($requiredfields[$temp]=="email")
			 {
				 check_email("${$requiredfields[$temp]}");
			 }
			  else
			 {
				  check_fields ("${$requiredfields[$temp]}","$requiredfields[$temp]");
			 }
       }
}

/* default values for script will take place in the hidden form fields */
$def[]="subject";
$def[]="req";
$def[]="recipient";

// get the IP and the date
$ip=getenv("REMOTE_ADDR");
$date=date("d-m-Y H:i:s");

// message body
$message=$defaultmessage."\n\n";
$message.="From :".$email."\n";
$message.="Date :".$date."\n";
$message.="IP :".$ip."\n";
$message.="------------------------------------\n";
foreach($HTTP_POST_VARS as $formfield => $value)
         {
			 $found=0;
			 for($i=0;$i<count($def);$i++)
			 {
				 if($formfield==$def[$i])
				 {
					 $found=1;
				 }
			 }
			 if(!$found==1)
				 {
				 $message.=$formfield." : ".$value."\n";
				 }
         }
$message.="------------------------------------\n\n\n";
$message.="Mensaje enviado desde www.laboratorioancud.cl/";
$headers ="Para: $email\n";

// check the subject
if(!$subject)
	{
	$subject=$defaultsubject;
	}

// mail the form
if(@mail($recipient,$subject,$message,$headers))
	{
		prompt_user("$fm_confirm","$sent");
	}
	else
	{
		prompt_user("$fm_error","$unsent");
	}
}
else
{
	echo"<center>www.laboratorioancud.cl <br>Laboratorio Clinico Ancud<br><a href=\"http://www.laboratorioancud.cl/\">Laboratorio Clínico Ancud</a></center>";
}
include("inc/footer.php");
?>
