// 비동기 작업의 동기적 표현(3) - Generator
// 이터러블 객체(iterable)

// *가 붙은 함수가 제네레이터 함수 
// 제네레이터 함수는 실행하면, iterator 객체가 반환
// => 반복할 수 있는 이터러블 객체를 생성

// 즉, 비동기 작업이 완료되는 시점마다 next 메서드를 호출해주면
// Generator 함수 내부소스가 위 -> 아래 순차적으로 진행됌.

// (1) 제네레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
	setTimeout(function () {
		coffeeMaker.next(prevName ? prevName + ', ' + name : name);
	}, 500);
};
// (2)제네레이터 함수 선언
// yield 키워드로 순서 제어
var coffeeGenerator = function* () { // * 붙은 함수가 제네레이터 함수 ->  iterator 객체가 반환
	var espresso = yield addCoffee('', '에스프레소');
	console.log(espresso);
	var americano = yield addCoffee(espresso, '아메리카노');
	console.log(americano);
	var mocha = yield addCoffee(americano, '카페모카');
	console.log(mocha);
	var latte = yield addCoffee(mocha, '카페라떼');
	console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();