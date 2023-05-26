// Class
// 자바스크립트 기반이 아닌 다른 언에서는 대게 클래스 기반의 프로그래밍 개발 기법을 사용
// => 객체를 생성하기 위한 설계도 

class Person {
    // 사람이므로 필수요소 name, age 
    constructor(name, age ) { // 생성자 함수
        this.name = name; //this = 인스턴스 = 실체
        this.age = age;
    }

    // 메서드 형태의 동사 표현
    sayHello () {
        // console.log(this.name + "님 안녕하세요!");
        console.log(`${this.name}님 안녕하세요!`);
    }

    // 내 나이는 ~살이에요! 라고 출력하는 메서드를 만들어주세요!!

    sayMyAge () {
        // console.log("내 나이는 " + this.age + "살이에요!");
        console.log(`${this.name} 나이는 ${this.age}살입니다!`);
    }
}




// 설계도를 통해 인스턴스를 (실제 사물) 만들어봅시다!
// 이름은 홍길동이고, 나이는 30살인 사람 하나를 만들어줘! = 설계도에 근거
const person1 = new Person("홍길동", "30");
const person2 = new Person("홍길순", "25");

person1.sayHello();
person2.sayHello();

person1.sayMyAge();
person2.sayMyAge();