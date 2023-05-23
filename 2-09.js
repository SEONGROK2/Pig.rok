// 반복... !! 중요함 => 반복을 위한 메소드가 있음 => keys(), values(), entries()
// Key / Value pair를 저장 
// set('key들로 이루어진 iterator', 'value들로 이루어진 iterator');
// for ~ [ of ] {

// }
// for [ of ] {
    
// } 하나하나 돌리면서 for of로 반복할 수 있음.

const myMap = new Map(); // Map을 만듬.
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);  

// console.log(myMap.keys()); // [Map Iterator] { 'one', 'two', 'three' }

// // myMap.keys 이용해서 for of문을 돌림.
// for (const key of myMap.keys()) {
//     console.log(key);
// };  // one two three을 하니씩 출력

console.log(myMap.values()); // [Map Iterator] { 1, 2, 3 }
// // myMap.values 이용해서 for of문을 돌림.
for (const value of myMap.values()) {
        console.log(value);
}; // 1 2 3을 하나씩 출력

// console.log(myMap.entries()); // [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
// // // myMap.entries 이용해서 for of문을 돌림.
// for (const entry of myMap.entries()) {
//         console.log(entry);
// }; // [ 'one', 1 ][ 'two', 2 ][ 'three', 3 ] 을 하나씩 출력

// 크기를 확인
console.log(myMap.size) // map의 사이즈(길이)
console.log(myMap.has("two")); // key 기반 검색

