<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.text.DecimalFormat"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="model.InfluenceDiagram"%>
<%@page import="model.InfluenceDiagram.Decision"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Set"%>

<% 
    String[][] s=(String[][])session.getAttribute("decision");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Country Result</title>
<style> 
body{ text-align:center} 
.div{ margin-top:150px; margin-left:400px; width:400px; height:250px;color:#00B2EE;} 
</style> 
</head>
<body>
<div class="div">
	<h1> The top 3 countries </h1>
	<h3>1. <%out.print(s[0][0]+"  "+s[0][1]); %></h3>
	<h3>2. <%out.print(s[1][0]+"  "+s[1][1]); %></h3>
	<h3>3. <%out.print(s[2][0]+"  "+s[2][1]); %></h3>
	
	<form action="./static/index.html" method="GET">
		<input type="submit" value="try it again" style="width:200px; height:25px;">  
	</form>
</div>

</body>
</html>