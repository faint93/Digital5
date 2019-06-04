<% 
Set connBM3 = Server.CreateObject("ADODB.Connection")
'strconn3 = "Driver={SQL Server};Server=192.186.0.59;Database=ACLIN;Uid=sa;Pwd=1165;"
strconn3 = "Driver={SQL Server};Server=webancud.ddns.net;Database=IRIS_ANCUD;Uid=sa;Pwd=xlab;"
'strconn3 = "Driver={SQL Server};Server=labvirginiasaenz.ddns.net;Database=IRISLAB_SAN_FRANCISCO;Uid=sa;Pwd=xlab;"
'strconn3 = "Driver={SQL Server};Server=164.77.130.91;Database=ACLIN;Uid=sa;Pwd=1165;"
connBM3.open strconn3
%>