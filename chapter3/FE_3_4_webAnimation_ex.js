/*
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 4) Web Animation
* 실습: 특정 엘리먼트를 만들고, 그 엘리먼트에 transition 속성을 주고, hover했을 때 좌측 상단에서, 우측 하단으로 움직이는 animation을 만들어보세요.
* 2020.05.08.Wed
*/
var target = document.querySelector("#myBox");

target.addEventListener("mouseover", function(){
  var tLeft = parseInt(target.style.left);
  var tTop = parseInt(target.style.top);

  target.style.left = tLeft + 500 + "px";
  target.style.top = tTop + 500 + "px";

});
