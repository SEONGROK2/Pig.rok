// obj
// 2가지 속성
var obj = {
	vals: [1, 2, 3],
	logValues: function(v, i) {
        console.log(">>> test starts");
        if (this === global) {
            console.log('this가 global입니다. 원하지 않는 결과!');
        } else {
            console.log(this, v, i);
        }
        console.log(">>> test end");
	}
};

// method로서 호출
// obj.logValues(1, 2);

// forEach, map, filter
[4, 5, 6].forEach(obj.logValues); 
// 메서드 형태로 보이지만 함수 자체를 넣은 것임.
// 콜백함수로 매개변수를 넣는 다는 것은 함수 자체를 넣는 것임. !!
// [4, 5, 6].forEach(obj.logV것. alues(1, 4)); => 이건 실행한 값을 넣는 것

