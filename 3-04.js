// 3-03.js 위 패턴을 우리 예제에 적용

var copyObject = function (target) {
    var result = {};

    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
}
var user = {
    name: "wonjang",
    gender: "male",
};

var user2 = copyObject(user);
user2.name = "twojang";

if (user !== user2) {
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);
// 항상 copyObject를 이용해서 복사
// 복사를 하고나면 user2는 user1과 별도의 object라는 것을 보장!!

//////////////////////////////////////////////////////////////////////

// 1.얕은복사: 바로 아래 단계의 값만 복사
// 문제점 : 중첩된 객체의 경우 참조형 데이터가 저장된 프로퍼터를 복사할 때, 주소값만 복사

// 2. 깊은 복사: 내부의 모든 값들을 하나하나 다 찾아서 모두 복사하는 방법 !!

var user = {
	name: 'wonjang',
	urls: {
		portfolio: 'http://github.com/abc',
		blog: 'http://blog.com',
		facebook: 'http://facebook.com/abc',
	}
}; 
// // user라는 객체 안에 url이라는 중첩된 객체가 존재
// //copyObject로 복사 할지라도 이름은 변경됨. => 1depth이기 때문

var user2 = copyObject(user);

user2.name = 'twojang';

// 바로 아래 단계에 대해서는 불변성을 유지하기 때문에 값이 달라지죠.
console.log(user.name === user2.name); // false

// 더 깊은 단계에 대해서는 불변성을 유지하지 못하기 때문에 값이 같아요.
user.urls.portfolio = 'http://portfolio.com';
// // user - urls - portfolio 를 바꾸면 user2.urls.portfolio도 바뀜
// copyObject가 가지고 있는 속성이 target에 있는 1depth만 돌면서 복사하기 때문.

console.log(user.urls.portfolio === user2.urls.portfolio); // true

// 아래 예도 똑같음.
user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // true

//////////////////////////////////////////////////////////////////////

//  ser.urls 프로퍼티도 불변 객체로 만들어야함
var user = {
	name: 'wonjang',
	urls: {
		portfolio: 'http://github.com/abc',
		blog: 'http://blog.com',
		facebook: 'http://facebook.com/abc',
	}
};

// 1차 copy
var user2 = copyObject(user);

// 2차 copy -> 이렇게까지 해줘야만 해요..!!
user2.urls = copyObject(user.urls); // 이렇게 하는 것은 임시방편 밖에는 안됨.

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);

//////////////////////////////////////////////////////////////////////

// !!!!!!!!!! 결론 !!!!!!!!!! : 객체의 프로퍼티 중, 
// 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사 
// ⇒ 재귀적 수행! = 함수나 알고리즘이 자기 자신을 호출하여 반복적으로 실행
var copyObjectDeep = function(target) {
	var result = {};
	if (typeof target === 'object' && target !== null) {
		for (var prop in target) {
			result[prop] = copyObjectDeep(target[prop]);
		}
	} else {
		result = target;
	}
	return result;
}
// object 이면서 null이 아닌 경우, 본인 자기 자신(copyObjectDeep)을 수행함
// copyObjectDeep가 호출될때 스스로 다시 한번 안쪽에서 훓어보겠다는 의미.
// 하나하나 요소들을 불변성으로 유지.

//결과 확인
var obj = {
	a: 1,
	b: {
		c: null,
		d: [1, 2],
	}
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);