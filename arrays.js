//for each 
/*The forEach method is used to iterate
 over elements in an array. It takes a callback function 
 as an argument, which is called for each element in the array. 
 The callback function can take up to three arguments: the 
 current element, the index of the current element, and th
  array itself.
  */

  /*
const numbers  = ['a' , 'b','a','b','c','d','a'];


let count = {};

letters.forEach(item=>{
if(count[item]){
    count[item] ++;
} else {
    count[item] = 1;
}
});

console.log(count);
*/
//map array method 
/*
const products = [{
    name:'laptop',
    price: 1000,
    count:5
} ,{
    name: 'desktop',
    price:1500,
    count : 2,
},{
    name: 'phone',
    price:500,
    count: 10
}
];

const totalProductValue = products.map(item =>({
    name: item.name,
    totalValue: item.price * item.count
}));



console.log(totalProductValue )

const str = ['1','2','3','4'];

const numbers = str.map(Number);
console.log(numbers)

*/
//filter Array Method 
/*
const numbers = [1,2,3,4,5];
const even = numbers.filter(isEven)

function isEven(value) {
    return value % 2 === 0;
}
console.log(even)

const people = [
    {
        name:'florin ',
        age:26
    },
    {
        name:'Ivan',
        age: 18
    },
    {
        name:'Jai',
        age:15
    }
]

const adults = people.filter(person => person.age >= 18);
console.log(adults);
*/
/*
const numbers = [1, 2, 3, 3, 2, 1, 3, 3, 5, 4, 6];

const nums = numbers.filter((value,index,arr)=>{
    return arr.indexOf(value) === index;
});

console.log(nums);
*/

//reduce array method
/*
The array reduce method executes a callback function on every elements of an array
and it will return output of one single value 
*/
//const numbers = [1,2,3,4,5];

//const max = numbers.reduce(callback, -Infinity);

//function callback(accumulator,value){
//    if (accumulator >value ){
//        return accumulator;
//    } else{ 
 //           return value;
 //       }
 //   }


//console.log(max);

//example
const store = [
    {
        products:'laptop',
        value:1000,
        count:3
    },
    {
        products:'desktop',
        value:1500,
        count:4
    },
    {
        products:'mobile',
        value:500,
        count:10
    }
];

const totalValueStore = store.reduce((acc,item) => acc + (item.value * item.count) , 0)

console.log(totalValueStore);

//slice array method 
const numbers = [1,2,3,4,5];

const numbers2 = numbers.slice(1);
console.log(numbers2)
console.log(numbers)

//example
const participants = ['Florin','Ivan','Liam','Jai','Patrik'];
const winners = participants.slice(0,3);
console.log(winners);



