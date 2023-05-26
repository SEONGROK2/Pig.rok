//  4-11.js 와 비교
//비동기 작업의 동기적 표현(2) - Promise(2)

// refactoring
// re : 다시
// factoring 
// 비효율 코드 => 효율 코드화

var addCoffee = function (name) {
    return function(prevName){
        return new Promise(function(resolve){
            setTimeout(function(){
                // 백틱``
                // var name = prevName + ", " + ne;ame; // 바뀌는 부분이 변수 = name
                var newName = prevName ? `${prevName}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500)
        });
    ;}
}

addCoffee("에스프레소")()
    .then(addCoffee("아메리카노"))
    .then(addCoffee("카페모카"))
    .then(addCoffee("카페라떼"));