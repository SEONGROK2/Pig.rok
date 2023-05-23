function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
};

function add(x, y) {
    return x + y ;
};

// 반복되는 코드를 효율적으로 만듦.
const multiplyByTwo = multiplyBy(2);
// const multiplyByTwo = function (x) {
    //     return x * 2;
    // };

const multiplyByThree = multiplyBy(3);
// const multiplyByThree = function (x) {
    //     return x * 3;
    // };

console.log(multiplyByTwo);
// console.log(function (x) {
//     return x * num;
//  });  => [Function (anonymous)]
// 매개변수 (값)을 넣지 않아 function이 그대로 출력됨.

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));
// 항상 매개변수가 있어야 하므로 (값)을 넣어줘야함.

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`FINAL => ${result}`);