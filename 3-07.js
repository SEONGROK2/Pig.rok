// LexicalEnvironment(2) - 스코프, 스코프 체인, outerEnvironmentReference(=outer)
// 주요 용어
// 1. 스코프
//  a. 식별자에 대한 유효범위를 의미
//  b. 대부분 언어에서 존재, JS에서도 존재
// 2. 스코프 체인
//  a. 식별자의 유효범위를 안에서부터 바깥으로 차례로 검색해나가는 것
// 3. outerEnvironmentReference(=outer)
// => 우리는 지금까지 LE의 구성요소 record와 outer 중 record에 대해서 깊이 알고 있음.
// => 스코프 체인이 가능토록 하는 것 (외부 환경의 참조정보)

// 스코프 체인
// 1. outer는 현재 호출된 함수가 선언될 당시(중요)의 LE를 참조
// (그 당시의 환경 정보를 저장한다.)
// 2. A함수 내부에 B함수 선언 -> B함수 내부에 C함수 선언(Linked List)
// 타고 올라가다보면 전역 컨테스트의 LE를 참조
// 항상 outer는 오직 자신이 선언된 시점의 LE를 참조하고 있으므로 가장 가까운요소부터 차례대로 접근 가능
// 결론 : 무조건 스코프 체인 상에서 가장 먼저 발견된 식별자에게만 접근이 가능

// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!
// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); // a는 inner함수 내부 스코프에서 해결됨
		var a = 3;
        // 호이스팅
        // var a ;
        // console.log(a)
        // a = 3 ; 이므로 undefined
	};
	inner();
	console.log(a); 
    // a의 inner(a = 3)는 콜스텍에서 사라짐
    // 전역영역에서 가져올 수 밖에 없음. => a = 1
};
outer();
console.log(a); // outer를 호출하므로 a = 1

// 전역 -> outer(); 실행-> var outer ->  inner(); 실행 -> var inner

// 각각의 실행 컨텍스트는 LE 안에 record와 outer를 가지고 있고, 
// outer 안에는 그 실행 컨텍스트가 선언될 당시의 LE정보가 다 들어있으니
// (outer 입장에서는 전역 컨텍스트) 
// scope chain에 의해 상위 컨텍스트의 record를 읽어올 수 있다.