/*
* [Boostcourse] Web Programming
* Chapter4. 웹 앱 개발: 예약서비스 2/4
* 1) 객체지향 JavaScript구현-FE
* 1강. 배열의 함수형 메소드
* 2020.05.12.Tue

 # 자바스크립트 인자로 함수를 받고 함수를 반환할 수 있다.
*/

var data = [{title: "hello", content:"간지철철", price:12000},
            {title: "crong", content:"괜찮은 상품", price:5500},
            {title: "codesquad", content:"좋은상품", price:1200}];


// for
for (var i = 0; i < data.length; i++) {
  console.log(data[i].title, data[i].price);
}

// forEach
data.forEach(function(v){
  console.log(v.title, v.price);
});

// forEach 분리
function printElement(v){
  console.log(v.title, v.price);
}

data.forEach(printElement)

// map : 새로운 배열을 만들어서 반환
var priceData = [100,200,300];
var newData = priceData.map(function(v){
  return v * 1.1;
});
console.log(newData);

// data에서 price만 변경시키기
var newData = data.map(function(v){
  var obj = {name : v.title, content : v.content, price:v.price * 10};
  return obj;
});

console.table(data);
console.table(newData);

// filter 사용
var newData = data.filter(function(v){
  return v.price > 5000;
});
console.log(newData);

// filter와 map 함수 같이 사용
var newData = data.filter(function(v){
  return v.price > 5000;
}).map(function(v){
  var obj = {title: v.title, content:v.content, price:v.price+""}
  return obj;
});
console.table(newData);
