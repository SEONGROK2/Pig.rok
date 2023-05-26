// 3.클로저와 렉시컬 환경(LexicalEnvironment)

// 외부 함수보다 중접 함수가 더 오래 유지되는 경우, 
// 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 (여전히) 참조할 수 있다. 
// ← 이 개념에서 중첩 함수가 바로 클로저에요

const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer함수를 실행해서, innerFunc에 담음!!
// outer함수의 return 부분을 innerFunc에 담는다는 이야기
// => console.log(x)가 출력
const innerFunc = outer();
// outer함수의 실행컨텍스는 => 날아감 => innerFunc에 담고 끝남

innerFunc();
// innerFunc가 실행될 때 const x 값은 out 실행 컨텍스트에 있었기 때문에
// 참조할 수 없어야 정상이지만 => x값이 출력됨 


// 결론
// 중첩함수 inner함수가 outer함수보다 오래 유지되었기 때문에
// outer함수의 변수 x=10을 여전히 참조할 수 있다!!!