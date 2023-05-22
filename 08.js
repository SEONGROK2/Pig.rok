// 스코프, 전역변수, 지역변수, 화살표함수
// 스코프 : 변수의 영향 범위
// 전역변수 : 스코프가 전체에 영향을 미친다.
// 지역변수 : 스코프가 함수 내에 영향을 미친다.

//전역변수
let x = 10;

function printX() {
    console.log(x);
}

console.log(x);
printX();
