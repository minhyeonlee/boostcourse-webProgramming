/*
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 1) JavaScript-FE
* 1강. 자바스크립트 배열
* 2020.05.07.Tue
*/
var a = [1,2,3,"hello", null, true, []];
console.log(a.length);

// 배열에 원소 추가
// index 번호로 추가
var a = [4];
a[1000] = 3;
console.log(a.length);
console.log(a[500]);

// push 메서드로 추가
var a = [4];
a.push(5);
console.log(a.length);

// 배열의 유용한 메서드들
var origin = [1,2,3,4]
console.log(origin.indexOf(3)); // 원소가 없으면 -1 반환
console.log(origin.join());
var result = [1,2,3,4].concat(2,3); // [...origin, 2,3]과 똑같이 동작
console.log(result);

// 배열 탐색(for, forEach, map, filter)
// forEach
["apple", "tomato"].forEach(function(value){
	console.log(value)
});

result.forEach(function(v,i,o){
	console.log(v);
});

// map
var newArr = ["apple", "tomato"].map(function(value, index){
		return index + "번째 과일은 " + value + "입니다."
});
console.log(newArr);
