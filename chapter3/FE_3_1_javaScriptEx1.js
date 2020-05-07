/*
* 실습 링크 : https://gist.github.com/crongro/ade2c3f74417fc202c8097214c965f27
* [Boostcourse] Web Programming
* Chapter3. 웹 앱 개발: 예약서비스 1/4
* 1) JavaScript-FE
* 2강. 자바스크립트 객체(실습 1)
* 2020.05.07.Tue

 # 실습 1: 숫자 타입으로만 구성된 요소를 뽑아 배열을 만든다.
*/
const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

var result = []
Object.keys(data).forEach(function(v){
	for(const key in data[v]){
		if(typeof data[v][key] == 'number'){
			result.push(key)
		}
	}
})

console.log(result);
