
//________________Function mean that 10 lines k coe ko package me wrap krain or jha marzi us ki copies use kr skty h 

// Function SyntX
//function Myname(){}

//simple function
// function sayMyName(){
//     console.log('B');
//     console.log('i');
//     console.log('s');
//     console.log('m');
//     console.log('a');
// }
// // function refrence/function call
// sayMyName()



// function addTwoNumbers(number1,number2)
// {
//     console.log (number1+number2);
// }
// addTwoNumbers(8,9)  // output is :NaN because koi value passs hi nahi ki h 
//But when we add arguments on a function call then it will give some output i.e addTwoNumbers(8,9)






// >>>>>>>>>>>hmm addTwoNumbers ko eik variable me bhi stoe krwa skty h

// const result =addTwoNumbers(3,5)// yani is na hmain output nahi diya h 

// console.log("Result:", result);

//The addTwoNumbers function doesn't return any value explicitly. It just logs the result to the console using console.log(). When you call this function and assign its result to result, you're actually assigning undefined because the function doesn't return anything. Hence, when you try to log result, it will display undefined.

//>>>>>>>>>>>>>>>>>>If you want to capture the result of the addition operation and use it later, you should modify your
// you have to return to get an output.




function addTwoNumber(number1, number2) {
    return number1 + number2;
}

const results = addTwoNumber(3, 5);
console.log("Result is:", results);


/////Another way to write a code 


function addTwoNumber(number1,number2){

let result=number1+number2;
return result;
}
const result=addTwoNumber(12,85)
console.log("Your resutt is:" , result)




/////////////////////////Another way to get parameter or a value

function LoginUserMessage(usernmae){
    if(usernmae===undefined){
        console.log("Please enter your name");
        return
    }

    
    return `${usernmae} just logged in`


}
console.log(LoginUserMessage)//(//bisma ));


//agr hmm koi value pass nahi kart jesay hm na bisma pass kiya h us jga kokhali rkhty y to undefined aay ga 
// so hm is cheez k liy acheck lgain ga k koi value pass huvi h k nahi