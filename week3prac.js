// 01. 나이든 유저
// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요

var user = {
    name: "john",
    age: 20,
}
// name과 age라는 프로퍼티를 가진 user 가 있음

// 객체 만들어 프로퍼티 복사하기
// 순회하면서 새로운 객체를 만들어야함.
var getAged = function (user, passedTime) {
    var newUser = {};
    for (var prop in user ) { //user안의 prop에 계속 할당됨.
        newUser[prop] = user[prop]
    }
    newUser.age += passedTime;
    // console.log("newUser => ", newUser);
    return newUser;
}


// user, passedTime(숫자)

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
		    console.log("Failed! user2 doesn't exist!");
	  } else if (user1 !== user2) { 
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);

// 02. 어떤 매치가 성사될까?
// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// 주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)

var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        } // fighter.opponent.getFullname() 호출 주체가 명확 this가 fullname: 'Francis Ngannou'를 바라봄
    },

    getName: function() {
        return this.fullname;
    }, // fighter.getName () 호출 주체가 명확 this가  fullname: 'John Jones'를 바라봄

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    }, 
    // fighter.getFirstName() 화살표함수 특성상 this binding을 하지 않음
    // 상위의 this를 바라봄 => var fullname = 'Ciryl Gane'

    getLastName: (function() {
        return this.fullname.split(' ')[1];
        // fighter.getLastName 호출부가 없음. getLastName: (function() {} 부분만 가져옴
        // 스스로 선언을 하고 호출도 함.
        // fighter.을 명시했지만 호출 주체가 아니라 getLastName: (function() {} 대체한 것 뿐임.
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

// console
// Not Francis Ngannou VS John Jones
// VM77:31 It is John Jones VS Ciryl Gane
// undefined