// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열(대괄호안의 요소)이나, 객체(중괄호안의 요소)의 속성 
// => 속성을 분해해서 하나하나를 변수에 담을 수 있게 해주는 문법

// (1) 배열의 경우
// let [value1, value2] = [1, "new"];
// console.log('1', value1);
// console.log('2', value2);

// let arr = ["value1", "value2", "value3"];
// let [a, b, c] = arr; 
// console.log(a);
// console.log(b);
// console.log(c);

// let arr = ["value1", "value2", "value3", "value4"];
// let [a, b, c, d=4] = arr;  
// // d의 경우 아무것도 없다면 => undefined
// // d의 초기값을 설정하다면 => 4 (initial value)
// // d의 value4을 지정한다면 => value4
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// (2) 객체인 경우
// let user = {
//     name: "abc",
//     age: 30,
// }

// 구조분해할당 -오른쪽의 각각의 요소를 분해하여 왼쪽의 name, age라는 변수에 할당 
// let {name, age} = {
//     name: "abc",
//     age: 30,
// }
// console.log("name =>", name ); // string
// console.log("age =>", age); // number

// 새로운 이름으로 할당
// let user = {
//         name: "abc",
//         age: 30,
// };

// let {name: newName, age: newAge} = user;
// console.log('newName =>', newName);
// console.log('newAge =>', newAge );

let user = {
    name: "abc",
    age: 30,
    birthday: "yesterday",
};

let { name, age, birthday="today" } = user;
console.log(name);
console.log(age);
console.log(birthday);

// birthday값이 없다면 => undefined
// birthday 초기값을 "today"로 지정 => today
// birthday 초기값이 today로 잡혀있지만 yesterday로 들어온다면 => yesterday