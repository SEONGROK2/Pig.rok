// 콜백 함수 내부의 this에 다른 값 binding하기

// closure 방식

var obj1 = {
	name: 'obj1',
	func: function() { // func라는 속성을 둠.
		var self = this; //이 부분!
		return function () {
			console.log(self.name);
		};
	}
};

var callback = obj1.func(); // func를 실행한 결과를 넣은 것.
setTimeout(callback, 1000);
// 아래와 같음
// var callback = function() {
//     console.log(self.name);
// };

// setTimeout(function () {
//     console.log(self.name);
// }, 1000);

// this를 굳이 써야할까? => 결과만을 위한 코딩
var obj1 = {
	name: 'obj1',
	func: function () {
		console.log(obj1.name);
	}
};
setTimeout(obj1.func, 1000);

// this 를 활용!!
var obj1 = {
	name: 'obj1',
	func: function() {
		var self = this; // this를 self에 할당하고
		return function () { 
            // self를 return하는 그 self에서 name을 console로 찍어서
            // console로 찍는 함수를 return 함
            // 그 return 값을 콜백의 실행한 결과를 담아서 콜백함수로 넣어주는 방식
			console.log(self.name);
		};
	}
}; 

// obj1의 func를 직접 아래에 대입
var obj2 = {
	name: 'obj2',
	func: obj1.func
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);


var obj2 = {
	name: 'obj2',
	func: function() {
		var self = this; // this를 self에 할당하고
		return function () { 
			console.log(self.name);
		};
	}
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);

// obj2.funcs은 return을 보면됨. => self.name 
// => obj2


// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);
