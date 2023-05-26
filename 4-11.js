// 비동기 작업 => 순서를 보장하지 X

// 비동기 작업의 동기적 표현이 필요
// Promise, Generator(ES6), async/await(ES7)

// 비동기 작업의 동기적 표현(1) - Promise(1)
// => 비동기 처리에 대해, 처리가 끝나면 알려달라는 '약속'
//    - new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행됨
//    - 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우 
//      resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 
//      다음(then), 오류(catch)로 넘어가지 않음
//    - 따라서, 비동기작업이 완료될 때 비로소 resovlve, reject 호출]

new Promise(function(resolve){
    setTimeout(function(){
        var name = "에스프레소";
        console.log(name);
        resolve(name);
    }, 500)
}).then(function(prevName){
    // 이 안에서도 새롭게 Promise를 만듬
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = prevName + ", 아메리카노";
            console.log(name);
            resolve(name);
        }, 500)
    })
}). then(function(prevName) { 
    // 이 안에서도 새롭게 Promise를 만듬
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = prevName + ", 카페모카";
            console.log(name);
            resolve(name);
        }, 500)
    });
}).then(function(prevName) {
    // 이 안에서도 새롭게 Promise를 만듬
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = prevName + ", 카페라떼";
            console.log(name);
            resolve(name);
        }, 500)
    });
})