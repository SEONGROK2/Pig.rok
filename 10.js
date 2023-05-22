// 화살표 함수
// ES6 신 문법
function add (x, y) {
    return x + y
}
// !!!!!!! function 함수를 먼저 익숙해지게 연습하고 화살표 함수로 넘어가기 !!!!!!!!

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x + y
}

// 1-2. 한 줄로 : 중괄호 안에 있는 줄이 한 줄이면 가능. {}제거
let arrowFunc02 = (x, y) => x + y

//
function testFunc(x) {
    return x;
}

//화살표 함수로! - 매개변수도 한 개일 떄는 괄호를 뺴줘도 됨 ex) (x) -> x
let arrowFunc03 = x => x