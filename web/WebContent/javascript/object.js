  // let obj = new Object(); new로 만들어도 되는데 아래의 방식을 추천
  let obj = {}; //new object
  obj.color = 'white';
  obj.price = 1000000;
  obj.info = function () {
      return obj.color + '' + obj.price;
  }
  // console.log(obj.color);
  // console.log(obj.price);
  // console.log(obj.info());
  
let car = {
    name: 'Socata',
    model: 'Hybrid',
    weight: 1200,
    color: 'black',
    start: function () {
        console.log('출발합니다.');
    },
    stop: function () {
        console.log('정지합니다.');
    }
};

console.log(car.name = 'Sonata II');
car.model = 'Electronic';
car['weight'] = 2200;
car['color'] = 'blue';
car.start();
car.stop();

//for .. in = object의 필드요소를 가져올 때
for(field in car) {
    console.log(field + ' => ' + car[field]);
}


let fruits = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < fruits.length; i++) {
    fruits[i]
}
//확장 for of = 배열 가져올 때
for(fruit of fruits) {
    console.log(fruit);
}

let elem = document.getElementById('list');
for (fruit of fruits) {
     let liTag = document.createElement('li');
     let text = document.createTextNode(fruit);
     liTag.appendChild(text);
     elem.appendChild(liTag);
}



//object 가져오기
let m1 = {name: 'Hong', score: 80}
let m2 = {name: 'Hwang', score: 90}
let m3 = {name: 'Park', score: 70}

let memList = document.getElementById('members');
let members = [m1, m2, m3];

for (member of members) {
 let liTag = document.createElement('li');
 for (let field in member) {
     //field: 필드명, member[field]: 값
     console.log(field + ' ==> ' + member[field])
     let text = document.createTextNode(member[field] + ' ');
     liTag.appendChild(text);
     memList.appendChild(liTag);
 }
}