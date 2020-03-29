/*
* [Boostcourse] Web Programming
* Chapter2. DB 연결 웹 앱
* 2) WEB UI 개발-FE
* 3강. Browser Event, Event object, Event handler
* 2020.03.29.Sun
*/

/*
* 이벤트 등록
* addEventListener함수 : 이벤트 등록 표준 방법
* addEventListener함수의 두번째 인자는 함수다.
* 이 함수는 나중에 이벤트가 발생할 때 실행되는 함수로 이벤트핸들러 또는 이벤트리스너라고 한다.
* Event handler(Event Listener) 콜백함수는 이벤트가 발생할 때 실행 됨
* event 인자를 받아 event 정보를 확인할 수 있다.
*/
var el = document.querySelector(".outside");

el.addEventListener("click", function(e){
	var target = e.target;
	console.log(target.className, target.nodeName);
	console.log(target.innerText);
	console.log("clicked!!", e);
});
