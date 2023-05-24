// undefined, null 둘다 없음을 의미
// undefined
// 1. 변수에 값이 지정되지 않은 경우, 데이터 영역의 메모리 주소를 지정하지 않은 식별자에 접근
// 2. . , [ ]로 접근하려 할 때, 해당 데이터가 존재하지 않는 경우
// 3. return 문이 없거나 호출되지 않는 함수의 실행 결과
var a;
console.log(a); // (1) 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 property에 접근
// console.log(b); // 오류 발생

var func = function() { };
var c = func(); // (3) 반환 return 값이 없는 function
console.log(c); // undefined

// 4. "없다"를 명시적으로 표한할 때는 undefined를 사용 x

// null
// 용도 : 없다를 명시적을 표현
// 주의 : typeof null을 하면 object가 나오는데 javascript 자체 버그임.
var n = null;
console.log(typeof n); // object => 자체 오류

//동등연산자(equality operator) // 타입까진 일치하지 않아도됨.
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator) // 타입까지 일치해야함.
console.log(n === undefined); // false
console.log(n === null); // true