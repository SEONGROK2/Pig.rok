// 1. 각종 eS6 문법 소개
// ECMAScript 6 (ES6)는 Javascript의 버젼 중 하나로, 2015년에 발표됨
// ES6는 이전 버전인 ES5에서 새로운 문법과 기능을 도입하여 JavaScript 
// 개발자들이 보다 쉽고 효율적으로 코드를 작성할 수 있도록 개선하였습니다.

// ES6
// 2015년도 이전 => <var></var>
// (1) es6 => let(변수), const(상수)
// let 재할당 가능 / 재선언 불가능
// const 재할당 불가능 / 재선언 불가능
// var 재선언 가능

// (2) 화살표 함수 arrow function
// function add () {

// }

// var add = function () {

// }

// var add = () => {
//     return 1;
// }

// var add = () => 1;
// return 문이 한줄 인경우 중괄호 생략 가능.

// var add = (x) => 1;
// var add = x => 1; 괄호안의 매개변수가 하나라면 괄호 생략 가능.

// (3) 삼항 연산자
// condition ? true인 경우 : false인 경우

// console.log(true ? '참' : '거짓');
// console.log(false ? '참' : '거짓');
// console.log(1 === 1 ? '참' : '거짓');
// console.log(1 !== 1 ? '참' : '거짓');