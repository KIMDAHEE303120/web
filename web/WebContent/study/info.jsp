<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
   <%request.setCharacterEncoding("UTF-8");%>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>info</title>
    </head>

    <body>
        <table border="1" >
            <tr>
                <th>
                    아이디
                </th>
                <td>
                    <% String id=request.getParameter("id"); %>
                    <%=id %>
                    <span>@</span>
                    <% String email=request.getParameter("email"); %>
                    <%=email%>
                </td>
            </tr>

            <tr>
                <th>
                    비밀번호
                </th>
                <td>
                    <% String pw=request.getParameter("pw"); %>
                    <%=pw%>
                </td>
            </tr>

            <tr>
                <th>
                    이름
                </th>
                <td>
                    <% String name=request.getParameter("name"); %>
                    <%=name%>
                </td>
            </tr>

            <tr>
                <th>
                    생년월일
                </th>
                <td>
                    <% String birth=request.getParameter("birth"); %>
                    <%=birth%>
                    년
                    <% String month=request.getParameter("month"); %>
                    <%=month%>
                    월
                    <% String day=request.getParameter("day"); %>
                    <%=day%>
                    일
                </td>
            </tr>

            <tr>
                <th>
                    성별
                </th>
                <td>
                    <% String sex=request.getParameter("sex"); %>
                    <%=sex %>
                </td>
            </tr>

            <tr>
                <th>
                    취미
                </th>
                <td>
                    <% String[] hobby=request.getParameterValues("hobby"); 
                    for(int i=0; i<hobby.length; i++){
                        String selectHobby = hobby[i];%>
                        <%=selectHobby %>/
                    <%}%>
                    
                </td>
            </tr>
            
        </table>
    </body>

    </html>