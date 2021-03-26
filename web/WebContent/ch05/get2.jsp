<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<% String name = request.getParameter("name"); %>
	<h2>이름:<%=name %></h2>
	
	<% String sex = request.getParameter("sex"); %>
	<h2>성별:<%=sex %></h2>
	
	<% String year = request.getParameter("year"); %>	
	<h2>학년:<%=year %></h2>
	
	<h2>관심:
	<% String[] subject = request.getParameterValues("subject"); 
		for(int i = 0; i <subject.length; i++) {
		String selectSubject = subject[i]; %>
		<h2><%=selectSubject %></h2>
	<%} %>
	
	<% String[] hobby = request.getParameterValues("hobby"); 
	for(int i = 0; i<hobby.length; i++){
		String selectHobby = hobby[i]; %>
		<h2>취미:<%=selectHobby %></h2>

	
	<%} %>
	
	
	

</body>
</html>