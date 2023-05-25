// this(정의, 활용방법, 바인딩, call, apply, bind)
// 다른 객체지향 언어에서의 this는 곧 클래스로 생성한 인스텐스
// javascript에서는 this가 어디에서나 사용될 수 있음.

// (1) 상황에 따라 달라지는 this
// 리마인드!! 실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
// VE = VariableEnvironment
// LE = LexicalEnvironment
// ThisBindings

// 1. this는 실행 컨텍스트가 생성될 때 결정됨.
// this를 bind한다(=묶는다), this는 함수를 호출할 때 결정된다.!!!
//  a. 전역 공간에서의 this
//      i. 전역 공간에서 this는 전역 객체를 가리킴
//      ii. 런타임 환경에 따라 this는 window(브라우저 환경) 또는 global(node 환경)을 각각 가리킴

//      런타임 환경? run + time = 코드가 돌아가는 그 환경
//      javascript로 만들어놓은 프로그램이 구동중인 환경 
//      1. 노드  => node 파일이름.js로 vscode 상에서 구동하고 있으니 node환경이라고 할 수 있음
//      2. 브라우저 => html 파일 안에 숨겨놓아서 크롬 등에서 연다고 하면 브라우저 환경이라고 할 수 있음.
//      전역 환경에서 this는 => 노드(global 객체), 브라우저(window객체)
// <브라우저 환경 this 확인>
// console.log(this);
// console.log(window);
// console.log(this === window); // true

// <node 환경 this 확인>
// console.log(this);
// console.log(global);
// console.log(this === global); // true

// 2. 메서드로서 호출할 때 그 메서드 내부에서의 this
//  a. 함수 vs 메서드
//      함수와 메서드, 상당히 비슷해 보이지만 엄연한 차이가 존재
//      기준은 독립성, 

// 함수는 그 자체로 독립적인 기능을 수행
// 함수는 호출의 주체가 없기 때문에 this가 전역개체
// ex) 함수명();

// 메서드는 자신을 호출한 대상 객체에 대한 동작을 수행 = 종속적
// 메서드는 this가 호출의 주체
// ex) 객체.메서드명(); 객체 => this

// CASE1 : 함수
// 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
var func = function (x) {
	console.log(this, x);
};
func(1); // Window { ... } 1

// CASE2 : 메서드
// 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// obj는 곧 { method: f }를 의미하죠?
var obj = {
	method: func,
};
obj.method(2); // { method: f } 2

// 함수로 서의 호출과 메서드로서의 호출 구분 기준 : " . " , " [] "
var obj = {
	method: function (x) { console.log(this, x) }
};
obj.method(1); // { method: f } 1
obj['method'](2); // { method: f } 2 

// 메서드 내부에서의 this => 호출을 누가 했는지에 대한 정보
var obj = {
	methodA: function () { console.log(this) },
	inner: {
		methodB: function() { console.log(this) },
	}
};

obj.methodA();             // this === obj
obj['methodA']();          // this === obj

obj.inner.methodB();       // this === obj.inner
obj.inner['methodB']();    // this === obj.inner
obj['inner'].methodB();    // this === obj.inner
obj['inner']['methodB'](); // this === obj.inner

// 3. 함수로서 호출할 때 그 함수 내부에서의 this
//  a. 함수 내부에서의 this
//      i. 어떤 함수를 함수로서 호출할 경우, this는 지정되지 않음 
//        ( 호출 주체를 알 수 없기 때문)
//      ii. 실행컨텍스트를 활성화할 당시 this가 지정되지 않은 경우,
//        this는 전역 객체를 의미
//      iii. 따라서, 함수로서 '독립적으로' 호출할 때는 this는 항상 전역객체를 가리킴
//  b. 메서드의 내부함수에서의 this
//      i. 예외는 없음. 메서드의 내부라고 해도, 함수로서 호출한다면 this는 전역 객체를 의미!!!!

var obj1 = {
	outer: function() {
		console.log('Test1 =>', this); // (1) Test => { outer: [Function: outer] }
		var innerFunc = function() {
			console.log('Test2 =>',this); 
            // (2) 전역객체 => 함수이기 때문
            // (3) obj2 
            // js. 104~105로 innerFunc를 호출함 => obj2.innerMethod();
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();

// 메서드의 내부 함수에서의 this 우회
// 1. 변수를 활용하는 방법
// 내부 스코프에 이미 존재하는 this를 별도의 변수(ex.self)에 할당하는 방법
var obj1 = {
	outer: function() {
		console.log(this); // (1) outer

		// AS-IS 기존 것
		var innerFunc1 = function() {
			console.log(this); // (2) 전역객체
		}
		innerFunc1(); // JS 121  console.log(this); 가 실행되면서 this가 유실됨.

		// TO-BE 이후 것
		var self = this; // outer 스코프 내에 있는 this => obj1 
		var innerFunc2 = function() {
			console.log(self); // (3) outer
		};
		innerFunc2();
	}
};

// 메서드 호출 부분
obj1.outer();

// 2. 화살표 함수(=this를 바인딩하지 않는 함수)
// ES6에서 처음 도입된 화살표 함수는, 실행 컨텍스트를 생성할 때 this 바인딩과정 자체가 없음
// => this는 이전의 값 - 상위값 - 이 유지됨.
// 일반 함수와 화살표 함수의 가장 큰 차이점 => this binding 여부 !!!!
var obj = {
	outer: function() {
		console.log(this); // (1) obj
		var innerFunc = () => { //화살표 함수 => this binding 생략
			console.log(this); // (2) obj // 화살표함수가 아니였다면 전역개체
		};
		innerFunc();
	}
}

obj.outer();

// 콜백 함수 호출 시 그 함수 내부에서의 this
// => 콜백 함수도 함수 !!! 때문에 this는 전역 개체를 참조하지만
// => 단, 콜백함수를 넘겨받은 함수에서 콜백 함수에 별도로 this를 지정한 경우
// ==> 예외적으로 그 대상을 참조 => JS : 172

// 별도 지정 없음 : 전역객체
setTimeout(function () { console.log(this) }, 300);
// seTimeout 다음 들어가는 함수가 콜백함수 => this binding 한다면 전역개체를 바라봄

// 별도 지정 없음 : 전역객체
[1, 2, 3, 4, 5].forEach(function(x) {
	console.log(this, x);
});
//forEach 다음 들어가는 함수가 콜백함수 => this binding 한다면 전역개체를 바라봄

// addListener 안에서의 this는 항상 호출한 주체의 element를 return하도록 설계되었음
// 따라서 this는 button을 의미함
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function(e) {
	console.log(this, e); //예외 인 경우)addEventListener을 호출한 주체 button을 바라보게 되어있음
});
//addEventListener에 두번째 인자로 들어가는 부분이 콜백함수 => this binding 한다면 전역개체를 바라봄


// 생성자 함수 내부에서의 this
// a. 생성자 : 구체적인 인스턴스(유사 객체)를 만들기 위한 일종의 틀
// b. 공통 속성들이 이미 준비됌
var Cat = function (name, age) {
	this.bark = '야옹';
	this.name = name;
	this.age = age;
}; 
// function(name, age) 생성자 함수
// 이 안에 this는 인스턴스를 지칭
// var choco는 name:초코 / age: 7 / bark:'야옹'이라는 인스턴스를 만듬
// var nabi는 name:나비 / age: 5 / bark:'야옹'이라는 다른 인스턴스를 만듬

var choco = new Cat('초코', 7); //this : choco
var nabi = new Cat('나비', 5);  //this : nabi