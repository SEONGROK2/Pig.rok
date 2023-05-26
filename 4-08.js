// bind
var obj1 = {
	name: 'obj1',
	func: function () {
		console.log(this.name);
	}
};

setTimeout(obj1.func.bind(obj1), 1000);
// obj1 객체가 this로 묶이면서 이 this는 무조건 obj1이 됨

var boundObj1 = obj1.func.bind(obj1);
setTimeout(boundObj1, 1000);

// 함수를 바인딩 하는 방법
var obj2 = { name : "obj2"}; 
setTimeout(obj1.func.bind(obj2),1500);
// obj1을 bind한 것이 아니고 새로운 객체를 bind