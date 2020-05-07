/*
* 실습 링크 : https://gist.github.com/crongro/ade2c3f74417fc202c8097214c965f27
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 1) JavaScript-FE
* 2강. 자바스크립트 객체
* 2020.05.07.Tue

 # 자바 스크립트 객체
 - key, value 구조의 자료구조
 - JavaScript로 데이터를 표현하기 위해서는 Array, Object를 사용
 - Object형태는 {}로 그 자료를 표현하며, 서버와 클라이언트 간에 데이터를 교화할 때 Object포맷과 비슷한 방법으로 데이터를 보냄
*/

// 객체 선언 : 자바스크립트 객체구조를 본따 서버와 웹브라우저간에 데이터를 주고 받을 때 정의한 JSON을 사용
var obj = {name:"crong", age:20};
var myFriend = {
	key:"value",
	addition:[
						{name:'codeaquad'}, {age:2}
	]
};

console.log(myFriend["key"]); // 키 값으로 객체 찾기
console.log(myFriend.addition[0].name); // .표기법으로 객체 찾기

// 객체 탐색
// for-in(key 값이 있는 object 탐색)으로 객체 찾기
for (const key in myFriend){
	console.log(myFriend[key]);
}

// Object.key()를 이용한 후 forEach로 객체 탐색
console.log(Object.keys(myFriend)); // 키 값을 배열로 출력
Object.keys(myFriend).forEach(function(v){
	console.log(myFriend[v]);
});
