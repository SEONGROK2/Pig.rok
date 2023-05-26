// 클래스 연습해보기!

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

// 추가 요구사항
// 1. modelName, modelYear, type, price를 가져오는 메서드
// 2. modelName, modelYear, type, price를 사용하는 메서드
// 3. 만든 인스턴스를 통해서 set, get하는 로직짜기

class Car {
    constructor (modelName, modelYear, type, price) {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    get modelName () {
        return this._modelName;
    }

    // 입력값에 대한 검증
    set modelName (value) {
        // 유효성 검사
        if (value.length <= 0) {
            console.log("[오류] 모델명이 입력되지 않았습니다. 확인해주세요!");
            return;
        } else if (typeof value !== "string") {
            console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
            return;
        }

        // 검증이 완료된 경우에만 setting!
        this._modelName = value;
    }

    get modelYear () {
        return this._modelYear;
    }

    set modelYear (value) {
        // 유효성 검사
        if (value.length !==4) {
            console.log("[오류] 입력된 년도가 4자리가 아닙니다. 확인해주세요");
            return;
        } else if (typeof value !== "string") {
            console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
            return;
        }
        
        // 검증이 완료된 경우에만 setting!
        this._modelYear = value;
    }

    get type () {
        return this._type;
    }

    set type (value) {

        if (value.length !==4) {
            console.log("[오류] 타입이 입력되지 않았습니다. 확인해주세요!");
            return;
        } else if (value !== 'g' && value !=='d' && value !== 'e') {
            // g가솔린 d디젤 e전기차 가 아닌 경우 오류
            console.log("[오류] 입력된 타입이 잘못 되었습니다. 확인해주세요!");
        }

        // 검증이 완료된 경우에만 setting!
        this._modelYear = value;
    }

    get price () {
        return this._price;
    }

    set price (value) {
        if (typeof value !== 'number') {
            console.log("[오류] 가격으로 입력된 값이 숫자가 아닙니다. 확인해주세요!")
            return;
        } else if (value < '1000000') {
            console.log("[오류] 가격은 100만원보다 작을 수 없습니다. 확인해주세요!")
            return;
        }

        // 검증이 완료된 경우에만 setting!
        this._price = value;
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

// car1.makeNoise(); 
// car2.makeNoise(); 
// car3.makeNoise(); 

// car1.makeModelYear(); 
// car2.makeModelYear(); 
// car3.makeModelYear(); 


// getters 예시1
console.log(car1.modelName);
// setters 예시1
car1.modelName = "kia";
console.log(car1.modelName);

car1.modelName = 1;
console.log(car1.modelName);