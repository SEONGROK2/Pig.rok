// 문 (if, else if, switch ~~)

// 조건문 - if, else if, switch

// 1.if문
// if (조건 = true 또는 false가 나올 수 있는 조건) {
    // true라면 main logic 실행
// }

// 1-1
let x = 10;

if (x > 0) {
    // true라면 main logic 실행
    // console.log("x는 양수입니다.");
}

// 1-2
let y = "Hello world";

//y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력

if (y.length >= 5 ) {
    // console.log(y.length);
}

// 2. if - else문
// if () {
//     main logic #1
// } else {
//     main logic #2
// }

let c = -3;

if (c > 0) {
    // main logic #1
    console.log("c는 양수입니다.");
} else {
    // main logic #2
    console.log("c는 음수입니다.");
}

// 3. if - else if - else 문
// if (조건1) {
//     main logic #1
// } else if (조건2) {
//     main logic #2
// } else if (조건3) {
//     main logic #3
// }

let a = -1;

if (a < 0) {
    // main logic #1
    console.log("1");
} else if (a >= 0 && a < 10) {
    // main logic #2
    console.log("2");
} else {
    // main logic #3
    console.log("3");
}

// 4. switch 문
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log('사과입니다!');
        break; 
    case "바나나":
        console.log('바나나입니다!');
        break; 
    case "키위":
        console.log('키위입니다!');
        break; 
    default:
        console.log('아무것도 아닙니다!')
        break;  
// break 문을 넣어줘야 해당되는 것만 실행됨.
}