// 2. 일급 객체로서의 함수
// 자바스크립트에서 함수는 일급 객체(First-Class Object)라고 해요.
// 그래서 함수를 객체처럼 여러가지 방식으로 다룰 수 있어요. 
// 일반 객체와 달리 함수는 특별한 능력을 가지고 있습니다.

// 일급 객체란?
// 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다.

// 함수를 매우 유연하게 사용!!

// 일급객체로서의 함수

// (1) 변수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용될 수 잇도록 조치가 되었다.
// const sayHello = function () {
//     console.log('Hello');
// };

// (2)  함수를 인자로 다른 함수에 전달할 수가 있다.
// (2)-1. 콜백함수 : 매개변수로써 쓰이는 함수
// (2)-2. 고차함수 : 함수를 인자로 받거나 return하는 함수
function callFunction (func) {
    // 매개변수로 받은 변수가, 사실 함수다.
    func();
}
const sayHello = function () {
    console.log('Hello!');
};

callFunction(sayHello); 
// 실행할 때 이 함수를 매개변수로 던질 수가 있음.
// 던지면 func로 sayHello라고 저장된 함수가 전달됨.

// // 위와 같음
// callFunction(function () {
//     console.log('Hello!');
// }) ; // 매개변서로써 함수가 들어간 콜백함수.

// (3) 함수를 반환할 수 있다.
function createAdder(num) {
    return function (x) {
        return x + num;
    }
};

const addFive = createAdder(5);
console.log(addFive(10));
// createAdder를 실행한 결과가 const addFive를 대체함
// return x + num;이 createAdder(5);를 대체함.

// 위와 같음
// const addFive = function (x) {
//     return x + 5;
// }
// console.log(addFive(10));