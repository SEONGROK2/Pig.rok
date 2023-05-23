// 일급객체로써의 함수 (2)

//객체 key value pair
const person = {
    name: 'John',
    age: 31,
    isMarried: true,
    // sayHello: () => {
    //     console.log(`Hello, My name is ${this.name}`); 
    //     // 화살표함수는 this를 바운딩하지 않는다.  !! 중요 !!
    //     // => ${this.name} = undefined => 화살표 함수 x
    // }
    sayHello: function () {
        console.log("Hello My name is " + this.name);

        console.log(`Hello, My name is ${this.name}`); 
        // 백틱 ``을 이용하여 template literal로 바꿈
    }
}
// this = person

person.sayHello();

