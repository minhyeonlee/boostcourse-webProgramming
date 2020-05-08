/*
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 5) WEB UI
* 2강. DOMContentLoaded
* 2020.05.08.Wed
*/
function init(){
  var target = document.querySelector(".outside");
  var btn = document.querySelector("button");
  btn.addEventListener("click", function(){
    var pre = parseInt(target.style.left);
    target.style.left = pre + 100 + "px";
  });
}

window.addEventListener("load", function(){
  console.log("window Loaded");
});

document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM Loaded");
  init();
});
