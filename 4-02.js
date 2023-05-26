// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 반복해서  매개변수로 받은 콜백함수의 로직을 수행
var count = 0;
var cbFunc = function () {
    console.log(count);
    if (++count > 4) clearInterval(timer); // timer를 clear 해줘!
}; 

var timer = setInterval(cbFunc, 300); 
// 콜백 함수를 가져간 setInterval한테 있음!
// setInterval로 넘겨주게 되면 그 호출주체와 제어권은 모두 setInterval이 됌.

// cbFunc(); 
// 호출 주체와 제어권은 모두 사용자


// var timer = setInterval(function () {
//     console.log(count);
//     if (++count > 4) clearInterval(timer); // timer를 clear 해줘!
// }, 300); 
