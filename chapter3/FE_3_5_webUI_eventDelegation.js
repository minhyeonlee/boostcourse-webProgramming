/*
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 5) WEB UI
* 3강. Event Delegation
* 2020.05.08.Wed
*/

var log = document.querySelector(".log");
var log2 = document.querySelector(".log2");
var lists = document.querySelectorAll("ul > li")
var ul = document.querySelector("ul");
var img = document.querySelector("img");

for(var i=0, len=lists.length; i<len; i++){
	lists[i].addEventListener("click", function(evt){
		log.innerHTML = "IMG URL IS " + evt.currentTarget.firstElementChild.src;
	});
}

// 이벤트 버블링: 클릭한 지점이 하위 엘리먼트라고 하여도, 그것을 감싸는 상위 엘리먼트까지 올라가면서 이벤트 리스너가 있는지 찾는 과정
ul.addEventListener("click", function(evt){
	// currentTarget: ul, target: img가 나온다.
	console.log(evt.target.tagName, evt.currentTarget.tagName);

	// target이 image이면 src를 추출해서 출력
	var target = evt.target;
	if(evt.target.tagName == "IMG"){
		log2.innerHTML = "IMG URL은 " + target.src
	} else if(target.tagName == "LI"){
		log2.innerHTML = "IMG URL은(LI클릭) " + target.firstElementChild.src;
	}
});

img.addEventListener("click", function(){
	console.log("img tag clicked!!");
});
