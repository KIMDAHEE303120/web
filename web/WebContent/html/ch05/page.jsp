<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>page.jsp</title>
</head>
<body>
<% String name = request.getParameter("name"); %>
<h2>이름: <%=name %></h2>


</body>
</html>