/*
* [Boostcourse] Web Programming
* Chapter2. DB 연결 웹 앱
* 2) WEB UI 개발-FE
* 1강. Window 객체(setTimeout)
* 2020.03.29.Sun

* window 객체
* 브라우저 개발을 하다보면, window라는 객체가 있다.
* window에는 많은 메서드들이 존재하며, 아래처럼 사용할 수 있다.
* window는 디폴트의 개념임으로 생약할 수 있다.
*/
window.setTimeout();
setTimeout() //window는 전역객체라서 생략가능.

/*
* setTimeout 활용
* 인자로 함수를 받고 있으며, 보통 나중에 실행되는 함수를 콜백함수라고 한다.
* 자바스크립트는 함수를 인자로 받을 수 있는 특징이 있다.
* 함수를 반환하는 것도 가능하다.
* setTimeout의 특성을 잘 이해하고, 지연실행이 필요한 경우에 잘 활용하면 좋다.
* 1000ms = 1초
* 비동기함수 : 스택이 다 비워지고 나서 실행된다.
*/
//test1
function run() {
 console.log("run start") //1

 setTimeout(function(){
	 var msg = "hello codesquad";
	 console.log(msg); //4
	 console.log("run.....ing"); //3
 }, 1000)

 console.log("run end"); //2
}
run();

//test2
function run() {
 setTimeout(function() {
		 var msg = "hello codesquad";
		 console.log(msg);
 }, 2000);
}
console.log("start"); //1
run(); //3
console.log("end"); //2

//test3
function run() {
 setTimeout(function() {
		 var msg = "hello codesquad";
		 console.log(msg); //4
 }, 2000);
 console.log("run function end"); //2
}
console.log("start"); //1
run();
console.log("end"); //3
