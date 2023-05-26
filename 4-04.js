// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖는다.
// map 함수입니다.

// index와 currentValue 자리 바꿈
var newArr = [10, 20, 30].map(function (index, currentValue){
    console.log(index, currentValue);
    return currentValue + 5;
});


console.log(newArr); // => [ 5, 6, 7 ]
// 5, 6, 7이 더해진 것은 지금 currentValue에 더해진 것이 아니라
// index에 더해진 것

// index : 사람이 이해할 수 있는 변수명일 뿐
// currentValue : 사람이 이해할 수 있는 변수명일 뿐