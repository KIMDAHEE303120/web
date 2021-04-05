//var에 각각 다른 변수를 입력>콘솔에 출력해보기

var num1 = 10.5;
var num2 = 20;
console.log(typeof num1);

num1 = '10.05';
num2 = '20.45';
console.log(typeof num1);

var num3 = null;
num3 = {
    name: 'Hong',
    age: 20
};
console.log(typeof num3);
console.log(num3.name);
console.log(num3.age);

num3 = true;
console.log(typeof num3);

//null이나 0, ' ' 이 들어가면 false.. 
num3 = 0;
if (num3) {
    console.log('참입니다.');
} else {
    console.log('거짓입니다.');
}



var result = parseFloat(num1) + parseFloat(num2);
console.log(result);

//배열
numbers = [];
numbers[0] = 10;
numbers[1] = 20;
// numbers[2] = 'hello'; //다른 타입 넣는것을 지향해야 하지만 할 수는 있다는 것,,,,

result = 0;

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    result += numbers[i];
}
console.log('합계: ' + result);

// //구구단 출력하기,,,(for)
// document.write('<table border = "1">');
// for (var i = 1; i < 10; i++) {
//     console.log('2 * ' + i + ' = ' + (2 * i));
//     // document.write('2 * ' + i + ' = ' + (2 * i) + '<br>');
//     document.write('<tr><td>2 * ' + i + '</td>');
//     document.write('<td class="equals">=</td>');
//     document.write('<td>' + (2 * i)+ '</td>');
// }
// document.write(' </tr></table>');


// //사용자가 입력한 값을 가져옴...>>window.prompt
// var n1 = window.prompt("첫 번째 값: ");
// var n2 = window.prompt("두 번째 값: "); //문자열 타입이 기본..
// console.log(parseInt(n1) + parseInt(n2));

// 사용자가 입력한 값으로 구구단 출력하기
var num = window.prompt("값을 입력하세요");
document.write('<table border = "1">');
for (var i = 1; i < 10; i++) {
    console.log('2 * ' + i + ' = ' + (num * i));
    document.write('<tr><td>'+ num);
    document.write(' * ' + i + '</td>');
    document.write('<td class="equals">=</td>');
    document.w
    rite('<td>' + (num * i)+ '</td>');
}
document.write('</tr></table>');