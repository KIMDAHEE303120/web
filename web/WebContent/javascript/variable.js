//variable.js

// let num2 = 30; //basic.js에서 이미 선언한 변수이기 때문에 이미 정의되어있다고 뜸,,,
// 한 html 파일에서 여러개의 js파일을 참조하고 있다는 것 확인 가능

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
document.write('<h1>NUMBER</h1><ul>');
for (let i = 0; i < numbers.length; i++) {
    document.write('<li>' + numbers[i] + '</li>');
    sum += numbers[i] ;
}

document.write('<li>합: ' + sum + '</li></ul>');