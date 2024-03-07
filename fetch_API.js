let name = 'Pedro'
console.log(name);
name = 'John'
console.log(name);
//PROMISES
const event = new Promise((resolve,reject) =>{
    let name = 'Pedro';
    if(name == 'Pedro'){
        resolve(name);
    } else {
        reject('Name was not Pedro,name was ' + name);
    }
    });

    event.then((name) =>{
    console.log(name);
    })
    .catch((err)=>{
    console.log(err);
    });
    
const axios = require('axios'); 


//asynchronous function (async)
const fetchData = async () => {
    try {
        const data = await axios.get('https://cat-fact.herokuapp.com/facts');
        console.log(data);  
    } catch (err) {
       console.log(err) ;
    } finally{
        console.log('HELLOW');
    }
   
};

fetchData()

 

