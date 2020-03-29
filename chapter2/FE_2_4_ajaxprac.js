/*
* [Boostcourse] Web Programming
* Chapter2. DB 연결 웹 앱
* 2) WEB UI 개발-FE
* 4강. Ajax 통신의 이해
* 2020.03.29.Sun

* Ajax (XMLHTTPRequest 통신)
* 웹에 데이터를 갱신할때, 브라우저 새로고침 없이 서버로부터 데이터를 받기 위해 생김.
* 더 좋은 UX를 제공할 수 있다.
* XMLHTTPRequest객체를 생성해서, open메서드로 요청을 준비하고, send메서드로 서버로 보낸다.
* 요청처리가 완료되면(서버로 응답이 오면) load이벤트가 발생하고, 콜백함수가 실행된다. 콜백함수가 실행될 때는 이미 ajax함수는 반환하고 콜스택에서 사라진 상태이다.

* JSON
* 표준적인 데이터 포맷을 결정하기 위해서 주로 JSON(JavaScript Object Notation) 포맷을 사용한다.
*/
var oReq = new XMLHttpRequest();

oReq.addEventListener("load", function() {
   console.log(this.responseText);
});
oReq.open("GET", "./FE_2_4_ajaxprac.txt");//parameter를 붙여서 보낼수있음.
oReq.send();
