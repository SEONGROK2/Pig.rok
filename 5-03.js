// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, 5
// 클래스 -->> 객체(인스턴스)
// 프로퍼터(constructor)
// new Class(a, b, c)

class Rectangle {
    constructor (height, width) {
        // underscore : private 은밀하게, 감춰야 할 때
        this._height = height;
        this._width = width;
    }

    // width를 위한 getter
    get width () {
        return this.width;
    }

    // width를 위한 setter
    set width (value) {

    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
        //
        console.log('[오류] 가로길이는 0보다 커야 합니다!')
    } else if (typeof value !== 'number') {
        console.log('[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다')
    }

        this._width = value;
    
    }

    // height를 위한 getter
    get height () {
        return this.height;
    }

    // height를 위한 setter
    set height (value) {

    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
        //
        console.log('[오류] 세로길이는 0보다 커야 합니다!')
    } else if (typeof value !== 'number') {
        console.log('[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다')
    }    

        this._height = value; // set height 로 계속 이동하여 무한루프 발생!!
    }

    // getArea : 가로 * 세로 => 넓이
    getArea () {
        const a = this._width * this._height
        console.log(`넓이는 => ${a}입니다.`);
    }
}

// 인스턴스 생성
const rect1 = new Rectangle(10, 20);
rect1.getArea();
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);