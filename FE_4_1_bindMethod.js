/*
* [Boostcourse] Web Programming
* Chapter4. 웹 앱 개발: 예약서비스 2/4
* 1) 객체지향 JavaScript구현-FE
* 3강. bind 메소드로 this 제어하기
* 2020.05.12.Tue
*/

var healthObj = {
  name : "달리기",
  lastTime : "PM10:12",
  showHealth : function(){
    setTimeout(function(){
      // 여기서 this는 window를 가리킨다.
      // bind를 통해 this가 가리키는 오브젝트 변경 가능
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요.");
    }.bind(this), 500);
  }
}
healthObj.showHealth();

// bind : 또 다른 함수를 반환하는 함수 
var newfunc = function(){console.log("function~");}.bind(this);
newfunc();

// ES6의 allow함수를 사용하면 this가 가리키는 것이 좀 달라진다.
// allow함수는 자신이 속한 context를 유지한다. bind 없이 this가 healthObj를 가리킴
var healthObj = {
  name : "달리기",
  lastTime : "PM10:12",
  showHealth : function(){
    setTimeout(() => {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요.");
    }, 500);
  }
}
healthObj.showHealth();
