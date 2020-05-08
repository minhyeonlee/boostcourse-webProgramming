/*
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 3) Ajax-FE
* 1강. Ajax 응답처리와 비동기
* 2020.05.08.Wed
*/

// Ajax와 비동기
function ajax(){
	var oReq = new XMLHttpRequest();

	oReq.addEventListener("load", function(){
		console.log(this.responseText);
	});

	oReq.open("GET", "http://www.example.org/example.txt");
	oReq.send();
}

// Ajax 응답 처리 : 서버로 부터 받아온 JSON 데이터는 문자열 형태임으로 브라우저에서 바로 실행할 수 없다.
// 따라서 문자열을 자바스크립트 객체로 변환해야 데이터에 접근할 수 있다.
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(){
	console.log(this.responseText);
	var jsonobj = JSON.parse(this.responseText);
	var fruit = jsonobj.favorites[1];
	var outside = document.querySelector(".outside");
	outside.innerHTML += ("<span> " + fruit + "</span>")
	console.log(jsonobj);
});

oReq.open("GET", "./json.txt");
oReq.send();
