// ❓ 1. 프로그램이 1~100의 숫자 중 하나를 랜덤으로 정합니다.
//    2. 사용자는 이 숫자를 맞추어야 합니다! 
//      : 입력한 숫자보다 정답이 크면 → "UP" 아니면 → "DOWN", 정답이면 → "CORRECT" 출력
//    3. 지금까지 숫자를 입력한 횟수를 알려줍니다.

// 정답풀이

// 사용자 입력을 받기 위해 readline 패키지 사용!
const readline = require("readline");

const rl =readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

let answer = Math.floor(Math.random()*100) + 1;
let count = 0;

console.log(
    "1~100 중 랜덤 숫자 하나를 정하였습니다. 과연 당신이 맞출 수 있을까요?"
);

function askQuestion () {
    rl.question("숫자 입력: ", (guess) => {
        count++;
        if (parseInt(guess) > answer) {
            console.log("Down"); // 사용자가 입력한 값보다 랜덤 숫자가 작으면 Down!
            askQuestion();
        } else if (parseInt(guess) < answer) {
            console.log("up"); // 사용자가 입력한 값보다 랜덤 숫자가 크면 up 출력!
            askQuestion()
            ;
        } else if (parseInt(guess) === answer) {
            // 사용자가 입력한 값과 랜덤 숫자가 같으면 correct 출력 후 종료
            console.log("CORRECT");
            console.log("숫자 입력한 횟수: " + count + "번");
            rl.close();
        }
    });
};
askQuestion();