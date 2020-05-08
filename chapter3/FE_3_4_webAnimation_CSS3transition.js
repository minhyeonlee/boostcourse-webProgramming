/*
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 4) Web Animation
* 3강. CSS3 transition
* 2020.05.08.Wed
*/
var target = document.querySelector(".outside");
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
  var pre = parseInt(target.style.left);
  target.style.left = pre + 100 + "px";
});
