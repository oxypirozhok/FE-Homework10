'use strict';

//1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
//Пример: [1,2,3] => "1,2,3"
const num =[9, 5, 20, 7, 9, 8, 3, 2];
let stringNum = "";
num.forEach((element)=> {
stringNum += `${element},`});
console.log(stringNum);


//2)Используя метод reduce, посчитайте сколько людей проголосовали.
const nums =[9, -5, 20, 7, 9, 8, 3, 2];
let oddSum = nums.reduce((first, current)=> {
  if(current % 2 === 0){
    return first + current;
  }else{
    return first;
  }
},0);
console.log(oddSum);

//2)Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

let votersYes = voters.reduce((first, curr) => {
  if (curr.voted === true){
    return first + 1;
  }else{
    return first;
  }
},0);
console.log(votersYes);

//3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let money = wishlist.reduce((first, curr) => first + curr.price, 0);
console.log(money);

//4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.

const clients = [
  {name:'Bob' , order: ["bike", "camera", "bag"]},
  {name:'Jake' , order: ["bike", "hat"]},
  {name:'Kate' , order: ["bike", "camera", "hat", "sunglasses", "bottle"]},
  {name:'Sam' , order: ["bike", "bottle"]},
  {name:'Phil' , order: ["bike", "camera", "hat", "sunglasses"]},
  {name:'Ed' , order:["bike", "camera", "hat", "sunglasses", "bottle", "shirt"]},
]

clients.forEach((client) =>{
  client.totalOrder = client.order.reduce((first, curr) => first + 1, 0)
  delete client.order;
});
console.log(clients);


//5)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.

const clientslist = [
  {name:'Bob' , age: 30,},
  {name:'Jake' , age: 15,},
  {name:'Kate' , age: 25, },
  {name:'Sam' , age: 20, },
  {name:'Phil' , age: 21, },
  {name:'Ed' , age:55, },
  {name:'Tami' , age: 54, },
  {name: 'Mary', age: 31, },
  {name: 'Becky', age: 17, },
  {name: 'Joey', age: 41, },
  {name: 'Jeff', age: 30,},
  {name: 'Zack', age: 19, }
];

let grownups = clientslist.reduce((first, curr) => {
  if (curr.age >= 21){
    return first + 1;
  }else{
    return first;
  }
}, 0);
let teenagers = clientslist.reduce((first, curr) => {
  if (curr.age <= 21){
    return first + 1;
  }else{
    return first;
  }
}, 0);
console.log("Grownups:"+ grownups + ", Teenagers:" + teenagers);

//6)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

let ageThirtyPlus = [];
clientslist.forEach((client) => {
  if (client.age >= 30){
    ageThirtyPlus.push(client);}
},);
console.log(ageThirtyPlus);