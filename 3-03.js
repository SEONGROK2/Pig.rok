// 이런 패턴은 어떨까요?
var copyObject = function (target) {
    var result = {};

    // for ~ in 구문을 이용하여, 객체의 모든 프로퍼터(속성)에 접근할 수 있음.
    // 하드코딩을 하지 않아도 괜찮음.
    // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼터를 변경.
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
}

// copyObject는 target이라는 객체를 받음
// for in 객체에 있는 프로퍼티 하나하나에 접근
// key 하나하나에 접근하여 객체의 내부적인 요소들을 뒤집어 보면서 return

// 속성이 아무리 많아져도 다 써 줄 필요가 없음.