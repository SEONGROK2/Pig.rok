// 클로저의 활용
// 상태를 안전하게 변경하고 유지하기 위해 사용
// 상태를 안적하게 은닉!!

// 예제 ) 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
// let num = 0;

// 카운트 상태 변경 함수
// const increase = function () {
//     // 카운트 상태를 1만큼 증가시킨다.
//     return ++num;
// };

// console.log(increase());
// // num = 100; // 치명적인 단점이 있어요. 
// console.log(increase());
// console.log(increase());

// 보완 사항
// 1. 카운트 상태 (num 변쉬 값)
// => increase 함수가 호출되기 전까지는 변경x

// 2. 이를 위해 const상태는 increase 함수만의 변경
// 3. 전역변수 num이 문제 ! => 누구나 접근할 수 있음 => 지역변수로?

// 카운트 상태 변경 함수 #2
// const increase = function () {
//     // 카운트 상태 변수
//     let num = 0;
  
//     // 카운트 상태를 1만큼 증가시킨다.
//     return ++num;
//   };
  
  // 이전 상태값을 유지 못함
//   console.log(increase()); //1 // increase를 호출할 때마다 초기화 +1하기 때문에 의미가 없음
//   console.log(increase()); //1 // increase를 호출할 때마다 초기화 +1하기 때문에 의미가 없음
//   console.log(increase()); //1 // increase를 호출할 때마다 초기화 +1하기 때문에 의미가 없음 

  // 리뷰
  // 1. num 변수는 increase 함수의 지역변수로 선언 =-> 변경은 방지
  // => num 변수는 오직 increase 함수만 변경할 수 있음
  // 2. 하지만 increase를 호출할 때마다 초기화되버림
  // 3. 무조건 출력 값은 1이 되버림.
  

// !!!!!!!!!!!!!!!!!
// <클로저 사용>
// 카운트 상태 변경 함수 #3
const increase = (function () { 
    let num = 0;
  
    // 클로저
    return function () {
      return ++num;
    };
  })(); // increase는 뒤에  함수를 실행하는  =>  function () {return ++num};
  // => 외부환경의 num을 이미 참조하고 있음 => 유지!!

  // 이전 상태값을 유지
  console.log(increase()); //1
  console.log(increase()); //2
  console.log(increase()); //3

  // 리뷰
  // 1. 위 코드가 실행되면, 즉시 실행 함수가 호출 const increase 뒤 함수
  // => 함수가 반환(inner같은) => increase에 할당

  // 2. increase 함수에 할당된 function () {return ++num}; 는 자신이 정의된 위치에 의해
  // 결정된 상위 스코프인 즉시 실행 함수의 렉시컬환경을 기억하는 클로저
  // => 클로저는 let num = 0; 을 기억한다!!

  // 3. 즉시 실행함수는 => 즉시 소멸 (outer함수가 불리자마자 call stack에서 popup되는 개념)
  // 결론 : num은 초기화 x , 외부에서 접근할 수 없는 은닉된 값을 얻음
  // 의도되지 않은 변경도 걱정 x = > increase에서만 변경할 수 있기 때문!!!!