// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' = " " 감싸야지 문자열이 됨.
let str = "HelloWorld";
// console.log(str);
// console.log(typeof str);

// 2-1.  문자열의 길이 확인하기
// console.log(str.length); 

// 2-2. 문자열 결합하기(concat = concatenation)
let str1 = "Hello,";
let str2 = "world!";
let result = str1.concat(str2)
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
// console.log(str3. substr(7,5)); // 시작위치부터 몇개까지 자를지.
// console.log(str3.slice(7,12)); // 시작위치부터 끝 위치까지 자름.

// 2-4. 문자열 검색
let str4 = "Hello, World1";
console.log(str4.search("World"));   // 몇번쨰부터 시작되는지.

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result01 = str5. replace("World", "Javascript");
// console.log(result01);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(","); // ,를 기준으로 분할됨.
console.log(result02);