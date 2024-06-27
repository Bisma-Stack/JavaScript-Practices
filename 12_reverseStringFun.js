  //////// Firstly define a function as you want to use and pass a parameter 
  

  function reverseNumber(number){

    number=number+"";
    return number.split("").reverse().join("");

  }
//   console.log(Number(reverseNumber(22528)));
// console.log(reverseNumber(22469));


//// Reverse a number using for loop

let number="bisma";
let result= "";
for (let i= number.length-1; i>=0;i--) {

    result+=number[i];
}
console.log(result);



/// Create a function using split reverse or join for a string

function firstName(name){
    name=name + "";
       return name.split("").reverse().join("");
}
console.log(firstName("Batool"));



// Take input from user to reverse a string 

//const readlineSync = require('readline-sync');

function firstName(name){
    name = name + "";
    return name.split("").reverse().join("");
}

// Prompt the user for input synchronously
//const userName = readlineSync.question('Enter your name: ');

// Call the function with user input
//console.log(firstName(userName));


// Using spread operator instead of split method and also use reverse and join method

const lastName="Bisma Battol"
    let reversed=[...lastName].reverse().join("");
console.log(reversed);



function Names(reverseds){ 
     return [...reverseds].reverse().join("");
}
console.log(Names("Javed"));