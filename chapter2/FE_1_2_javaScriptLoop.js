/*
* [Boostcourse] Web Programming
* Chapter2. DB 연결 웹 앱
* 1) JavaScript-FE
* 2강. 자바스크립트 비교-반복-문자열
* 2020.03.28.Sat

* 비교문 : if, else if, else를 통해서 다양한 비교문을 사용할 수 있다.
* 분기 - switch : 로직을 분기하기 위해 if문이외에도 switch문을 통해서도 해결할 수 있다.
* 반복 : for문이나 while문을 사용해서 반복문을 구현할 수 있다.
 - 배열의 경우 forEach와 같은 메서드도 있고, for-of를 통한 탐색도 자주 사용된다.
 - for-in은 객체를 탐색할 때 사용한다.
* 문자열 처리 : 자바스크립트의 문자와 문자열은 모두 문자열 타입으로 같다.
*/
var a = "something";
var result = (a) ? "okay" : "not okay"
console.log(result)

/*for 예시*/
var arr = [1,2,3];
var len = arr.length // 반복문에 이 구문을 넣으면 포문을 돌 때마다 length를 체크하기 때문에 비효율적(값 고정)
for(var i=0; i < len; i++){

}

/*string*/
console.log(typeof("abc")); //string
console.log(typeof("a")); //string
console.log(typeof('a')); //string.

/*string method*/
console.log("ab:cd".split(":")); //["ab","cd"]
console.log("ab:cd".replace(":", "$")); //ab$cd
console.log("abcde  ".trim()); //"abcde"
