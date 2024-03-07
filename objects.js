//objects 
//key-value pairs in curly brackets
//const myObject = {
//    name: "Dave"
//};
//object properties;store  key values in an object
//use (objectname.property name) to access key values  
//const anotherObj =  {
 //   alive : true ,//boolean of true 
  //  answer : 42 , //integer 
  //  hobbies : ["Eat","sleep","code"] ,// use of an array 
    //use of nested objects 
    
  //  beverage :{
  //      morning: "coffee",
  //      afternoon : "Iced Tea",


  //  },
//};
    //methods are functions in  which we define within the object
    
//console.log(myObject);
//console.log(myObject.name);
//console.log(anotherObj.alive)
//console.log(anotherObj)
//console.log(anotherObj.answer)
//use of index notation  to access individual  key elements in an array
//console.log(anotherObj.hobbies[0]);
//console.log(anotherObj['alive'])
//console.log(anotherObj.alive)
//console.log(anotherObj.beverage)
      
//an object usually has curly braces 
//const vehicle = {
//wheels : 4 ,
//use of anonymous function 
//engine : function (){
//    return "vrrooom";
//}
 //}

//const truck = Object.create(vehicle);
//truck.doors = 2 ;
//console.log(truck);
//console.log(truck.wheels); //inheritance
//console.log(truck.engine());



//inheriting property wheels and the method engine from the genric vehicle  object,
// and then we are creating a truck object based on that vehicle object and by doing so 
// truck inherits the proprties and methods vehicle and then we added our own property to truck also 
//has two doors 

//const car = Object.create(vehicle);
//car.doors = 4;
//car.engine = function(){
//    return 'whoosh'
//};
//console.log(car.engine());
//console.log(car.wheels);

//const tesla = Object.create(car);
//console.log(tesla.wheels);
//has an issue
//tesla.engine = function () {
//   return ' shhh...';
//};
//console.log(engine());

const band = {
    vocals: "Roberts Plant",
    guitar: "Jimmy page",
    bass: "John paul jones",
    drums:"John  Bonham"
};
//delete band.drums;
//console.log(band.hasOwnProperty('drums'));
//console.log(Object.keys(band));
//console.log(Object.values(band));
//has an issue 
//for (let job in band ){
 //   console.log(0n ${job}, its $band[job]!);
//}

//destructuring objects 
const {vocals,guitar,bass,drums} = band;
console.log(guitar);
console.log(vocals);

//practice objects 
let electronics = {
  television: 'samsung',
  fridge: 'hotpoint',
  phone: 'redmi',
  microwave: 'Ramtons',  
  laptop: 'dell',
  tablet: 'lenovo',
  drinks :{
    breakfast: ['tea','coffee','porridge'], //array
    lunch: ('juice','soda','milkshake'), //list

  },
};

console.log(electronics.television)
console.log(electronics.drinks.breakfast[1])
console.log(electronics['tablet'])

//class declaration

//constructor function 
function Electronics(brand){
  this.brand = brand;
//method 
this.display = function(){
  return '$this.brand';
};
}
console.log(Electronics.brand)



