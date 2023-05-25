// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다.
var newArr = [10, 20, 30].map(function (currentValue, index){
    console.log(currentValue, index);
});

// 결과는 뭐가 될까?
console.log(newArr); // => [ undefined, undefined, undefined ]
// return문이 없다면 map함수는 무조건 무엇인가를 할당해야하지만 
// return 문이 없기 떄문에 undefined를 할당.

var newArr = [10, 20, 30].map(function (currentValue, index){
    console.log(currentValue, index);
    return currentValue + 5;
});
console.log(newArr); // => [ 15, 25, 35 ]