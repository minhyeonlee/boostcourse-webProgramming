/*
* [Boostcourse] Web Programming
* Chapter4. 웹 앱 개발: 예약서비스 2/4
* 1) 객체지향 JavaScript구현-FE
* 2강. 객체 리터럴과 this
* 2020.05.12.Tue
*/

//자바스크립트 객체는 사실 객체 리터럴이 그 자체이며 객체를 쉽게 만들 수 있다.
var healthObj = {
  name : "달리기",
  lastTime : "PM10:12",
  showHealth : function(){
    console.log(this.name + "님 , 오늘은 " + this.lastTime + "에 운동을 하셨네요.");
  }
}
healthObj.showHealth();
healthObj.lastTime = "AM06:20";
healthObj.showHealth();

// this : 객체안에서 this는 그 객체 자신을 가리킨다.
// ES6에서는 객체에서 메서드를 사용할 떄 'function' 키워드를 생략할 수 있다.
const obj = {
  getName(){
    return this.name;
  },
  setName(name){
    this.name = name;
  }
}

obj.setName("crong");
const result = obj.getName();
console.log(result);

function get(){
  return this;
}

// this는 변할 수 있다.
var others = {
  todos : "난 절대로 아무것도 하지 않는다."
}

var todo = {
  todos : ["web programming"],
  addTodo : function(newTodo){
    this.todos.push(newTodo);
  },
  showTodo : function(){
    return this.todos;
  }
}
console.log(todo.showTodo());
console.log(todo.showTodo.call(others));
