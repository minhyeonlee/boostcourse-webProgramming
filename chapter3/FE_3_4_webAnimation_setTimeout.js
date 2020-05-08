/*
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 4) Web Animation
* 1강. 웹 애니메이션 이해와 setTimeout활용
* 2020.05.08.Wed
*/

// interval은 비동기 작업이라 중간에 동기적인 작업이 들어오면 실행이 밀릴 수 있다.
const interval = window.setInterval(()=> {
  console.log('현재시각은', new Date());
},1000/60);
window.clearInterval(interval);

// setTimeout 사용
// animation의 주기를 16.6 미만으로 하는 경우 불필요한 frame 생성이 되는 등의 문제 발생
// 대안으로 requestAnimationFrame 사용 
setTimeout(()=> {
	console.log('현재시각은', new Date());
}, 500);

// 재귀호출을 통한 애니메이션 구현
let count = 0;
function animate(){
	setTimeout(()=> {
		if(count >= 20) return;
		console.log('현재시각은', new Date());
		count++;
		animate();
	}, 500);
}

animate();
