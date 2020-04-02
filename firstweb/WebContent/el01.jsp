<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
	// page, request, session, application scope에 관련된 값 
	pageContext.setAttribute("p1", "page scope value");
	request.setAttribute("r1", "request scope value");
	session.setAttribute("s1", "session scope value");
	application.setAttribute("a1", "application scope value");
%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- JSP 코드를 사용했을 때의 값 -->
<h3>JSP표현식을 이용한 출력 </h3>
pageContext.getAttribute("p1")-JSP : <%=pageContext.getAttribute("p1") %><br>
request.getAttribute("r1")-JSP : <%=request.getAttribute("r1") %><br>
session.getAttribute("r1")-JSP : <%=session.getAttribute("s1") %><br>
application.getAttribute("a1")-JSP : <%=application.getAttribute("a1") %><br>

<!--  EL 코드를 사용했을 때의 값 -->
<h3>EL 표기법을 이용한 출력 </h3>
pageContext.getAttribute("p1")-EL : ${pageScope.p1} <br>
request.getAttribute("r1")-EL: ${requestScope.r1} <br>
session.getAttribute("s1")-EL: ${sessionScope.s1} <br>
application.getAttribute("a1")-EL : ${applicationScope.a1} <br>

<!--  값 이름이 겹치지 않을 때 아래처럼 간단하게 쓸 수도 있다. -->
<h3>간단한 EL 표기법을 이용한 출력 </h3>
pageContext.getAttribute("p1")-EL : ${p1 } <br>
request.getAttribute("r1")-EL : ${r1 } <br>
session.getAttribute("s1")-EL : ${s1 } <br>
application.getAttribute("a1")-EL : ${a1 } <br>
</body>
</html>