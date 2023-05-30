// 풀이 1
function find_max_num(array) {
    for (let i=0; i < array.length; i++){ // array에서 num이라는 실험군을 차출!
        // num이라는 실험군을 대상으로 비교할 대조군을 array해서 하나씩 갖고와 비교
        let num = array[i];
        for (let j = 0; j < array.length; j++){
            if (num < array[j]) {
                // 만약 실험군보다 큰 대조군이 있으면 이 친구는 max_num에서 탈라이어서 break!
                break;
            }
            if (j === array.length - 1) {
                return num;
            }
        }
    }
}

console.log("정답 = 6 / 현재 풀이 값 = ", find_max_num([3, 5, 6, 1, 2, 4]));
console.log("정답 = 6 / 현재 풀이 값 = ", find_max_num([6, 6, 6]));
console.log("정답 = 1888 / 현재 풀이 값 = ", find_max_num([6, 9, 2, 7, 1888]));



// 풀이 2
function find_max_num(array) {
    // 가장 큰 수를 담을 변수를 0번째 인덱스 값으로 초기화해요!
    let max_num = array[0];
    for (let i = 0; i < array.length; i++){ // 배열을 순차적으로 탐색
        if (array[i] > max_num) { // 현재 발견한 값이 max_num보다 크면!
            // 너. 나와! 하고 기존의 max_num을 밀어내고 본인이 max_num으로 등극
            max_num = array[i];
        }
    }
    return max_num; // 선출된 max_num을 리턴
}

console.log("정답 = 6 / 현재 풀이 값 = ", find_max_num([3, 5, 6, 1, 2, 4]));
console.log("정답 = 6 / 현재 풀이 값 = ", find_max_num([6, 6, 6]));
console.log("정답 = 1888 / 현재 풀이 값 = ", find_max_num([6, 9, 2, 7, 1888]));

