// 상위 컨텍스트의 this를 내부함수나 콜백함수에 전달하기
// i. 내부함수
// 1.  메서드의 내부함수에서 메서드의 this를 그대로 사용하기 위한 방법

// TO-Be
var self = this;
var innerFunc2 = function () {
    console.log(self); // (3) outer
};
innerFunc2();

// 2. self 등의 변수를 활용한 우회법보다 call, apply, bind를 사용하면 깔끔하게 처리 가능
// call
var obj = {
	outer: function() {
		console.log(this); // obj
		var innerFunc = function () {
			console.log(this);
		};

		// call을 이용해서 즉시실행하면서 this를 넘겨주었습니다
		innerFunc.call(this); // obj
	}
};
obj.outer();

//bind
var obj = {
	outer: function() {
		console.log(this);
		var innerFunc = function () {
			console.log(this);
		}.bind(this); // innerFunc에 this를 결합한 새로운 함수를 할당
		innerFunc();
	}
};
obj.outer();

// 3. 화살표 함수의 예외사항
//  a. 화살표 함수는 실행 컨텍스트 생성 시, this를 바인딩하는 과정이 제외
//  b. 이 함수 내부에는 this의 할당과정(바인딩 과정)이 아에 없으며, 
//     접근코자 하면 스코프체인상 가장 가까운 this에 접근
// c. this우회, call, apply, bind보다 편리한 방법

var obj = {
	outer: function () {
		console.log(this);
		var innerFunc = () => {
			console.log(this);
		};
		innerFunc();
	}
};
obj.outer();
