// this
// 콜백 함수도 함수이기 때문에 기본적으로 this가 전역객체를 참조
// 단, 예외
// 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우
// 그 대상을 참조

// setTimeout은 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째 인자에
// 전역객체를 넘겨요
// 따라서 콜백 함수 내부에서의 this가 전역객체를 가리켜요
// setTimeout(function() { console.log(this); }, 300); // global { ... }

// forEach도 마찬가지로, 콜백 뒷 부분에 this를 명시해주지 않으면 전역객체를 넘겨요!
// 만약 명시한다면 해당 객체를 넘기긴 해요!
// [1, 2, 3, 4, 5].forEach(function (x) {
// 	console.log(this); // global { ... }
// });

//addEventListener는 내부에서 콜백 함수를 호출할 때, call 메서드의 첫 번째
//인자에 addEventListener메서드의 this를 그대로 넘겨주도록 정의돼 있어요(상속)
// document.body.innerHTML += '<button id="a">클릭</button';
// document.body.querySelector('#a').addEventListener('click', function(e) {
// 	console.log(this, e);
// });


Array.prototype.map123 = function (callback, thisArg) {  // 첫번째 인자 callback / 두번째 인자.thisArg
    // map 함수에서 return할 결과 배열
    var mappedArr = [];

    for (var i=0; i<this.length; i++) {
        var mappedValue = callback.call(thisArg || globalThis, this[i]);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};

var newArr = [1, 2, 3].map123(function(number) {
    return number * 2
});

console.log(newArr);

// => 바로 제어권을 넘겨받을 코드에서 call/apply 메서드의 첫 번째 인자에서
// 콜백 함수 내부에서 사용될 this를 명시적으로 binding 하기 때문에 this에 
// 다른 값이 담길 수 있음.

// => 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우
// 그 대상을 참조