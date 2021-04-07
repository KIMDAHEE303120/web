let names = []; //new Array();
names[0] = 'Hong';
names.push('임성원');
names.push('정준영');
names.unshift('도왕락');

delete names[0]; //'값' 지우는 방법 >> undefined 나옴
names.pop(); // 가장 마지막에 있는 '요소'부터 지우는 메소드
names.shift(); // 가장 앞쪽에 있는 '요소'부터 지우는 메소드

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}
let ns = names.join(', ');
console.log(', 넣기: ' + ns);

ns = names.reverse();
console.log('reverse: ' + ns);

names.reverse();
names.push('김민주');
console.log('추가: ' + names);

ns = names.slice(1, 2); //Hong(0), 김성원(1), 김민주(2) >>
console.log('slice: ' + ns)

ns = names.splice(1, 2); //Hong(0), 김성원(1), 김민주(2) >> 
console.log('splice: ' + ns)

