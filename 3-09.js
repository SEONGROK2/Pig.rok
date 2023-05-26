// 명시적 this binding
// call, apply, bind
// call
var func = function (a, b, c) {
	console.log(this, a, b, c);
}; // a,b,c를 인자로 받아서 log로 출력하는 함수

// no binding
func(1, 2, 3); // this 객체가 Global을 바라보고 있음

// 명시적 binding
func.call({ x: 1}, 4, 5, 6);



var obj = {
	a: 1,
	method: function (x, y) {
		console.log(this.a, x, y);
	}
};

obj.method(2, 3); // 1 2 3 
// obj라는 객체는 a라는 프로퍼티 / method라는 프로퍼티를 가짐
// method라는 프로퍼티는 함수를 포함
// obj.method 이름으로 호출 =>  obj에 의해서 호출 => 호출의 주체가 명확!
// method 함수 안의 this는 항상 obj!!

obj.method.call({ a: 4 }, 5, 6); // 4 5 6

// call 이라는 메서드는 기존에 있었던 메서드 뒤에 붙어서
// 즉시 실행을 해주되 앞에 this로 묶을 객체를 붙여주고 나서 나머지 매개변수를 넣어준다.


obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
// apply의 경우 같은 기능으로 [ ] 대괄호로 묶어주면 같은 결과 값이 나옴


// call / apply 메서드 활용
// 1. 유사배열객체(array-like-object)에 배열 메서드를 적용
// 조건
// - 반드시 length가 필요해야함. 이 조건은 필수, 없으면 유사배열이라고 인식 x
// - index번호가 0번부터 시작해서 1씩 증가해야한다. 안그래도 되긴 하지만 예상 못한 결과가 생김

//객체에는 배열 메서드를 직접 적용할 수 없어요.
//유사배열객체에는 call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있어요.
var obj = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3
}; // 유사배열객체 => 배열의 형태를 갖추고 있음 + length

Array.prototype.push.call(obj, 'd'); 
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
// call apply 메서드가 즉시 실행함수이기 때문에
// 즉시 실행해주면서 this binding하는 this 자리에 해당 유사배열객체를 넣어줌으로서
// 해당 기능을 실행

// 2. Array.from 메서드 (ES6)
// call/apply를 통해 this binding 하는 것이 아니라 객체 -> 배열로 의 형 변환 만을
// 위해서 쓸 수 있지만, 원래 의도와는 거리가 먼 방법
// => 따라서, ES6에서는 Array.from 이라는 방법을 제시!!!

// 유사배열
var obj = {
	0: 'a',
	1: 'b',
	2: 'c',
	length: 3
};

// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력됩니다.
console.log(arr);