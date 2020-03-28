/*
* [Boostcourse] Web Programming
* Chapter2. DB 연결 웹 앱
* 1) JavaScript-FE
* 1강. 자바스크립트 변수-연산자-타입
* 2020.03.28.Sat

* 자바스크립트의 버전
 - 자바스크립트 버전은 ECMAScript(줄여서ES)의 버전에 따라서 결정되고, 이를 자바스크립트실행 엔진이 반영한다.
 - ES5, ES6(ES2015)...이런식으로 버전을 일컫는다.
 - 2018년을 중심으로 ES6를 지원하는 브라우저 많아서 몇년간 ES6문법이 표준으로 쓰이는 상황이다.
 - ES6는 ES5문법을 포함하고 있어 하위호환성 문제가 없다. 다만 feature별로 지원하지 않는 브라우저가 있을 수 있다.
*/

/*
* 1.변수
* 변수는 var, let, const로 선언할 수 있다.
* 어떤 것을 사용하는 가에 의해서 scope라는 변수의 유효범위가 달라진다.
*/

var a = 2; //number
var a = "aaa"; //string
var a = 'aaa'; //string
var a = true; //boolean
var a = []; //array
var a = {}; //object
var a = undefined;

var a = "i love Boostcourse";
console.log(a)

/*
* 2. 연산자
* 연산자 우선순위를 표현하기 위해서는 ()를 사용한다.
* 수학연산자는 +,-,*,/,%(나머지) 등이 있다.
* 논리 연산자, 관계연산자, 삼항연산자도 있음.
*/
var name = "crong";
var myname = name || "defaultname"; /*name이 없으면 오른쪽 값을 출력*/
console.log(myname);
var name = "";
var myname2 = name || "defaultname";
console.log(myname2);

/*
* 3. 연산자 - 삼항연산자
* 간단한 비교와 값 할당은 삼항연산자를 사용할 수 있음
*/
const data = 11;
const result = (data>10) ? "ok" : "fail";
console.log(result);

/*
* 4. 연산자 - 비교연산자
* 비교는 ==보다는 ===를 사용한다.
* ==로 인한 다양한 오류 상황이 있는데 아래 결과 참고.
* ===는 타입까지 비교한다. (이것을 사용하는 것을 권장!)
* JavaScript에서는 ==일 경우 암묵적으로 type을 바꿔서 비교한다.
*/
0 == false; // True
"" == false; // True
null == false; //False
0 == "0"; // True
null == undefined; //True

/*
* 5. 자바스크립트의 type
* undefined, null, boolean, number, string, object, function etc...
* JavaScript의 타입은 선언할 때가 아닌, 실행타임에 결정된다.
* 함수 안에서의 파라미터나 변수는 실행될 때 그 타입이 결정된다.
* 타입을 체크하는 뚜렷한 방법은 없다. 정확하게는 toString.call을 이용해서 그 결과를 매칭한다.
* 문자, 숫자와 같은 기본타입은 typeof 키워드를 사용해서 체크할 수 있다.
* 배열의 경우 타입을 체크하는 isArray함수가 표준으로 있다.(브라우저 지원 범위 체크)
*/
