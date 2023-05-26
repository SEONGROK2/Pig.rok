// user 객체를 생성
var user = {
    name: "wonjang",
    gender: "male",
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 property(속성)에 접근하는 것이 아니라, 아예 새로운 객체를 변환 -> 불변
var changeName = function (user, newName) {
    return {
        name : newName,
        gender: user.gender,
    }
} 
// 3-01.js 기존은 새로운 객체를 복사해서 속성을 접근하는 방식
// 항상 새로운 객체를 리턴함.
// 새로운 주소를 할당하므로 항상 user 정보가 변경되었다는 log가 찍힘.


// 변경한 user 정보를 user2 변수에 할당하겠습니다.
// 불변이기 때문에 user1도 영향이 없음.
var user2 = changeName(user, "twojang");

// 결국 아래 로직은 수행됨.
if (user != user2) {
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // twojang twojang
console.log(user === user2); // true

// 개발자들의 유지보수를 위해서는 최악임 => 얕은 복사 차용 => 3-03.js
