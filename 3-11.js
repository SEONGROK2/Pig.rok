//비효율 
var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0]; // 10

numbers.forEach(function (number) {
    console.log(number)
    // 현재 돌아가는 숫자가 max보다 큰 경우
    if (number > max) {
        max = number;
    }

    // 현재 돌아가는 숫자가 min보다 작은 경우
    if (number < min) {
        min = number;
    }
});

console.log(max, min);



//효율
var numbers = [10, 20, 3, 16, 45];

// apply -<> ({this}, [배열])
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log('apply =>', max, min);


// spread operator
console.log(numbers); // [ 10, 20, 3, 16, 45 ] 
console.log(...numbers); // 10 20 3 16 45

var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log("spread =>", max, min);


//
var numbers = [10, 20, 3, 16, 45];
var max = min = numbers[0]; // 10

numbers.forEach(function (number, idx) {
    console.log(idx + '번째 값 =>' + number);
});

// console.log(max, min);