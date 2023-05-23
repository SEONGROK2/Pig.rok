// 배열의 요소로 함수를 할당

const myArr = [
    function (a, b) {
        return  a + b;
    },  // 배열의 0번째 요소
    function (a, b) {
        return a - b;
    } // 배열의 1번째 요소
];
//더하기
console.log(myArr[0](1, 3)); // a + b =1 + 3 = 4

// //빼기
console.log(myArr[1](10, 7)); // a - b = 10 - 7 = 3

