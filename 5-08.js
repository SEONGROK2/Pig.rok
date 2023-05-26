// 클로저 Closure
// 개념
// 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

const x = 1; // 1할당 - 전역스코프 

function outerFunc() { // 함수 선언
  const x = 10; // x가 10으로 다시 할당됨  - outer
  function innerFunc() { 
    // x는 어디서 참조할까요 ??? 
    // 먼저 내부에서 찾음 - 없음
    // outer로 시선을 돌림 - 함수가 선언된 렉시컬 환경!!! 
    // => 함수가 선언될 당시의 외부 변수 등의 정보!!
    console.log(x); // 10 !!!
  }

  innerFunc();// 함수 실행2
}

outerFunc(); // 함수 실행1
