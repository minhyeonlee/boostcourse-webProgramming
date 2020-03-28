/*
* [Boostcourse] Web Programming
* Chapter2. DB 연결 웹 앱
* 1) JavaScript-FE
* 4강. 자바스크립트 함수 호출 스택
* 2020.03.28.Sat

* 함수를 연속적으로 계속 호출하면 call stack이 꽉 차버리면서 더 이상 실행되지 못하고 오류가 발생.
* 브라우저에서는 대부분 지정된 횟수만큼만 call stack을 쌓게 미리 설정해둔 경우가 많다.
* Maximum call stack size exceeded 오류를 발견하면 call stack가 너무 많이 호출된 문제이다.
*/

/*
* 함수 호출
* 자바스크립트 함수 호출은 이렇게 불려집니다.
* 이 함수를 실행해보세요. run이 호출되고 그 다음에 printName이 호출됩니다.
*/
function printName(firstname){
	var myname = "minhyeon";
	return myname + ", " + firstname;
}

function run(firstname){
	var firstname = firstname || "NONAME"
	var result = printName(firstname);
	console.log(result);
}

run("LEE")
