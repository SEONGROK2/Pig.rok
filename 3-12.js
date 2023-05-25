// bind 메서드
// this를 바인드 하느 메서드
// call, apply는 즉시 호출하지만, bind 메서드는 즉시 호출 x
// 새로운 함수를 리턴해서 다시 저장!
// [목적]
// 1. 함수에 this를 '미리' 적용
// 2. 부분 적용 함수 !!! 중요

var func = function (a, b, c, d) {
	console.log(this, a, b, c, d); //this 전역 global
};
func(1, 2, 3, 4);  

// 함수에 this를 미리 적용!
var bindFunc1 = func.bind({x: 1});  // 새로운 함수를 리턴해서 다시 저장
bindFunc1(5, 6, 7, 8);

// 부분 적용함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9

// name 프로퍼터!!
// bind - 'bound' 라는 접두어! => bind가 되었다!

console.log(func.name); // func
console.log(bindFunc1.name); // bound func
console.log(bindFunc2.name); // bound func
// => 추적하기 매우 쉽다!