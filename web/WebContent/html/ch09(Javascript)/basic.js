// 스크립트 내에 쓰여지는 변수 = 전역변수 = 어디서든 사용 가넝한~~
var fruit = 'Cherry';
fruit = ['Cherry', 'Strawberry', 'Melon'];
document.write('<h1>hello</h1>');
document.write('<ul>');
document.write('<li>Apple</li>');
document.write('<li>Banana</li>');
for(var i=0; i<fruit.length; i++) {
    document.write('<li>' + fruit[i] + '</li>');
}
// document.write('<li>' + fruit + '</li>');
document.write('</ul>');


// function 내에 쓰여지는 변수 = 지역변수
function turn_on() {
    //   var = 어떤값이 들어와도 사용가넝한~~ 변수의 타입이 바뀌면 바뀐대로 사용 가능
       var bulbon = 10;
       bulbon = 'hello';
       bulbon = document.getElementById("img1"); //사용자가 turn on 버튼을 클릭하는 순간 실행
       bulbon.setAttribute('class', 'img');
       bulbon.setAttribute('src','https://www.w3schools.com/js/pic_bulbon.gif')
       console.log(bulbon);
   }


   function turn_off() {
       img = 'screen';
       console.log(img);
       var bulboff = document.getElementById('img1');
       bulboff.setAttribute('src','https://www.w3schools.com/js/pic_bulboff.gif')
    //    console.log(bulbon);
   }
turn_off();
   console.log(img);