//basic.js

var num1;//undefined
num1 = 10; //number
num1 = 'hello'; //string
num1 = false; //boolean
num1 = null; //object
num1 = {
    name: 'Hong',
    age: 20
}
num1 = []; //object
num1[0] = 10;
num1[1] = 20;
// num1[2] = 'hello'; 넣을 수 있음 

num1 = function() { //function type
    window.alert('Hello');
}

console.log(num1);
// console.log(typeof num1);

// var num1; //var는 똑같은 이름의 변수를 선언할 수 있음 but 이렇게 쓰는거 추천하지 않음..
// num1 = 10;

let num2 = 10; //let은 똑같은 이름의 변수를 선언할 수 없음
num2 = 10;

{
    let num2; 
    num2 = 20;
    console.log('{ num2: }' + num2);
}
num2 = 15;
console.log('num2: ' + num2);

const num3 = 77; //const = 상수 선언
// num3 = 78; // 상수는 값을 바꿀 수 없음!