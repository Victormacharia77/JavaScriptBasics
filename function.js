//function Declaration
function checkVotingEligibility(age){
    const votingAge = 18;
    return age >= votingAge;
}

//Example Usage 
//assign a value to a variable;
const userAge = 14;
if (checkVotingEligibility(userAge)){
    console.log('You are eligible to vote');
} else{
    console.log('You are not eligible to vote')
}

//create a function that checks if one can qualify to vie for a presidential seat
//declare a function 
function VerifyQualifyingAge(age) { 
    const minimum_age = 35;
    return age >= minimum_age;

}
//assign a value to a function 
   const candidate_age = 21;
   if(VerifyQualifyingAge(candidate_age)){//pass the parameter in here
    console.log('You qualify to vie for a presidential seat')
   } else{
    console.log('You dont qualify to vie for a presidential seat')
   }

//create a function to check if  a person qualifies to join a under 16 football tournament
//function Declaration
function checkAgelimit(age){
    const age_limit = 16;
    return age <= age_limit;
}
const player_age = 23;
if(checkAgelimit(player_age)){ //pass player_age parameter here
   console.log('You can participate in the tournament')
} else{
    console.log('You cannot particapate in the tournament')
}
//COULD HAVE AN ERROR OF CALCULATION 
//function to check temperature
checkTemperature = (temperature) =>{
const minimum_temperature = 37;
return temperature <= minimum_temperature; 
}
const patient_temperature = 40;
if (checkTemperature(patient_temperature)){
    console.log('Body temperature above normal')
}else{
    console.log('Body temperature below normal')
}

//use of greet function 
function greet(name,lastName){ 
    console.log('Hello' + name + '' + lastName);
}
greet('John' ,  'smith');


