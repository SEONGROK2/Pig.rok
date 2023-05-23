// 단축 속성명 : property shorthand
const name = "mbc";
const age = "30";

// kru - value가 같다면 생략이 가능함.
const obj = {name, age};
const obj1 = {name: name, age: age};

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
// let arr = [1, 2, 3];

// let newArr  = [...arr, 4]; // = [ 1, 2, 3, 4 ]
// console.log(arr);
// console.log(newArr);

// 객체
// let user = {
//     name: 'abc',
//     age: 30,
// };

// let user2 = {...user};
// console.log(user2);
// console.log(user);

// 나머지 매개변수(rest parameter)
// function exampleFunc(a, b, c, ...args) { //args = arguments
//     console.log(a, b, c);
//     console.log(...args);
//     console.log(args); // 배열 형태로
// }

// exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 탬플릿 리커럴 (Template Literal)  // 백틱 ``
const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`);
console.log(`
    Hello
        My name is Javascript!!!!

        Nice to meet you !!!
`);
