/*
* [Boostcourse] Web Programming
* Chapter2. DB 연결 웹 앱
* 1) JavaScript-FE
* 3강. 자바스크립트 함수
* 2020.03.28.Sat
*/

/*
* 함수 - 함수의 선언
* 함수는 여러개의 인자를 받아서, 그 결과를 출력한다.
* 파라미터의 갯수와 인자의 갯수가 일치하지 않아도 오류가 나지 않는다.
* 파라미터가 1개일때, 인자의 갯수가 0개라면, 파라미터(매개변수)는 undefined 값을 갖는다.(값이 할당되지 않았기 때문이다.)
*/
function printName(firstname){
	return "name is " + firstname;
}
console.log(printName()) /* undefined가 할당됨 */
console.log(printName("Minhyeon")) /* My name is Minhyeon */
console.log(printName("Minhyeon", "Lee")) /* My name is Minhyeon, 인자 개수와 상관없이 오류가 나지 않는다.*/

/*
* 함수 - 함수 표현식
* 함수는 아래 printName과 같이 표현할 수도 있다.
* 이렇게 표현하면 함수선언문과 달리 선언과 호출순서에 따라서 정상적으로 함수가 실행되지 않을 수 있다.
* 선언문은 더 자주 사용하지만 함수 표현식을 권장하는 곳도 있다.
*/
function test(firstname) {
		// 이 부분을 function inner(){}로 바꾸면 함수 선언문이 된다.
    var inner = function(){
			return "inner value";
		}

		/*이 부분을 위로 올리면 inner is not a function이라는 에러가 뜬다.*/
		var result = inner();
		console.log("name is " + result);

}

test();

/*
* 함수 - 표현식과 호이스팅
* 자바스크립트 함수는 실행되기 전에 함수안에 필요한 변수값들을 미리 다 모아서 선언한다.
* 함수 안에 있는 변수들을 모두 끌어올려서 선언한다고해서, hoisting이라고 한다.
* 따라서 아래 코드는 함수를 값으로 가지지만 printName도 변수임으로 끌어올려지게 되고, 값이 할당되기 전에 실행됐으므로 undefined이 할당된 상태이다.
*/
printName(); /* 아직 printName이 undefined로 할당된 상태*/
var printName = function(){}

/*
* 함수 - 반환값과 undefined
* 자바스크립트 함수는 반드시 return 값이 존재하며, return 값을 지정하지 않으면 기본 반환값인 'undefined'가 된다.
* 자바스크립트에서는 void 타입이 없다.
*/
function a(){}
console.log(undefined);

/*
* 함수 - arguments 속성
* 함수가 실행되면 그 안에서 arguments라는 특별한 지역변수가 존재한다.
* 자바스크립트 함수는 선언한 파라미터보다 더 많은 인자를 보낼 수도 있다.
* 이 때 넘어온 인자를 arguments로 배열의 형태로 하나씩 접근할 수가 있다.
* arguments는 배열타입은 아니다. 그래서 배열 메서드를 사용할 수 없다.
* 자바스크립트의 가변인자를 받아서 처리하는 함수를 만들 때 등에서 arguments 속성을 유용하게 사용할 수 있다.
*/
function a(){
	console.log(arguments)
	for(var i=0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}
a(1,2,3); /* { '0': 1, '1': 2, '2': 3 } */


/*
* arrow function
* ES2015에는 arrow function이 추가됐다.
* 간단하게 함수를 선언할 수 있는 문법으로 처음에는 낯설 수 있다.
* 하지만 점점 많이 사용되고 있는 syntax임으로 같이 알아두면 좋다.
*/
function getName(name){
	return "Lee " + name;
}

/* 위 함수는 아래 arrow 함수와 같다. */
var getName2 = (name) => "Lee " + name;

console.log(getName("minhyeon"));
console.log(getName2("minhyeon"));
