// This keyword is talk about current context
// when we declare a function insidea an object like user is an object but welcomeMessage is a function so bydefault we can also call the its a method
const user={
    username:"Bisma",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
       // console.log(this);
    }
}
//user.welcomeMessage()
//user.username="Batool"
//user.welcomeMessage()
console.log(this);// Global console.log print a an empty {} becaue firstly we are in a node environment and as well as there is no globale this keyword.


//*************** this keyword ko jb function k andar console karwaty h then it shows some values */
//********** Function me hm jb this keyword ka use karty h toh voh work nahi karta h this is an object property it properly work on object */


// function cold(){
//     //console.log(this);
//     let username="biya";
//     console.log(this.username);
// }
// cold()



// When we store the previous line of a code into a variable then it will give the same result like previous on undefine

// const cold=function(){
//     let usernmae="Sprite"
//     console.log(this.username);
// }
// cold()  OUTPUT is undefined.

//**************How we declare a function specially Arrow for Arrow function */

// Arrow function Syntax is ()=>{}

// this is also a Arrow function but it is hold in a variable
//  const cold=()=>{

// }


// const cola=()=>{
//     let userName="Coca Cola"
//     console.log(this.userName);
// }
// cola()  its also give the same result we can only use the this keyword in objects and its method , i mean inside the object there is a function so we use this keyword as like 1st example.



//  A function with a return value is called a wexplicit function and without a return value implicit function 


// Explicit function example
// const addtwo=(num1,num2)=>{
//     return num1 + num2
// }
// console.log(addtwo(5,6));


//***********Example of Implicit Function */

// const addTwo=(num1,num2)=> (num1 + num2)

// console.log(addTwo(8,2));

// Afunction with {} curely bracket is called explicit and with a () Circular bracket is called Emplicit function 


//using arrow function and also implicit function how to return an object ?

const addTwo=(num1, num2)=>({username:"Bisma"})
console.log(addTwo(5,5));


// jb hm na object ko return krna huta h toh phly usay paranthese or phir usay curely bracket me pass krna huta h ({any content})