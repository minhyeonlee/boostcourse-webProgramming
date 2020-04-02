<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- EL 문법 무시 : true로 설정 (default가 false) -->
<%@ page isELIgnored = "true" %>
<% 
request.setAttribute("k", 10);
request.setAttribute("m", true);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
k : ${k } <br>
m : ${m } <br>

<h3>사칙 연산 </h3>
k : ${k } <br>
k + 5 : ${k+5 } <br>
k - 5 : ${k-5 } <br>
k * 5 : ${k*5 } <br>
k / 5 : ${k div 5 } <br> 

<h3>논리 연산 </h3>
k > 5 : ${k > 5 } <br>
k < 5 : ${k < 5 } <br>
k <= 10 : ${k <= 10 } <br>
k >= 10 : ${k >= 10 } <br>
m : ${m } <br>
!m : ${!m } <br>

</body>
</html>