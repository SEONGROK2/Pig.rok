// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//      다음 네 개의 값이 필수로 입력!!
//      (1) modelName
//      (2) modelYear
//      (3) type : 가솔린, 전기차, 디젤
//      (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성
// 3. 이후 자동차를 3개 정도 만들어주세요(객체 생성)


// [추가 요구사항]
// 1. 전기차 클래스 <- car 클래스의 상속을 받음!

class Car {
    constructor (modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    // 클락션을 울리는 메서드
    makeNoise () {
        console.log(this.modelName + " 빵!");
    }

    // 해당 자동차가 몇년도 모델인지 출력하느 메서드 작성
    makeModelYear () {
        console.log(`${this.modelName}은 ${this.modelYear}년도의 모델입니다.`)
    }

}

// 자동차 만들기
const car1 = new Car('Sorento', '2023', 'e', 5000); 
const car2 = new Car('Sm5', '1999', 'g', 3000);
const car3 = new Car('Palisade', '2010', 'd', 4800);

// 전기차 Class 정의
class ElectronicCar extends Car {
    // type은 e로 고정되있으므로 재정의 => 생성자 함수 사용!
    constructor(modelName, modelYear, price, chargeTime) {
        // Car(부모 class)에게도 알려주기!
        super(modelName, modelYear, "e", price); // super는 부모 class이므로 다 넣어줘야함
        this.chargeTime = chargeTime;
    }

    set chargeTime (value) {
        this._chargeTime = value;
    }

    get chargeTime () {
        return this._chargeTime;
    }
}



const elecCar1 = new ElectronicCar("테슬라", "2023", 9000, 60);
elecCar1.makeNoise();
elecCar1.makeModelYear();
console.log("----------------");
console.log(elecCar1._chargeTime);
elecCar1.chargeTime= 20;
console.log(elecCar1._chargeTime);


// car1.makeNoise(); 
// car2.makeNoise(); 
// car3.makeNoise(); 
// car1.makeModelYear(); 
// car2.makeModelYear(); 
// car3.makeModelYear(); 