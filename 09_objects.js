// // object literals


// const mySym=Symbol("key1")

// const JsUser={
//     name:  "Bisma",
//     age:23,
//     // [mySym]:Symbol,//=>[function:symbol]
//     [mySym]:mySym,  
//     [mySym]:"hy! bisma",  
//     loaction:"Lahore",
//     email:"abcd@gmail.com",
//     isLoggedIn:false,
//     lastLoggedIn:["Monday","Tuesday"]
// }

//                        //JsUser.email etc or console.log(JsUser.email)is not a good way to access.
//                        //Another ways to acces the elements.
// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser[mySym]);
// // console.log(typeof JsUser[mySym]);

// JsUser.email="bisma@gmail.com"
// // Object.freeze(JsUser);
// JsUser.email="batool@gmail.com"
// // JsUser.name="azka"



// // console.log(JsUser);


// //Adding function in a object


// JsUser.greeting=function(){
//     console.log("Hello js User");
// }
// JsUser.greeting2 =function(){
//     console.log(`${this.name}`);
// }
// // console.log(JsUser.greeting) function anonymous
// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())


const mySym= Symbol("Key2")
const myName={
    name:"bisma",
    "fullname":"bj",
    "lastName":"batool",
    [mySym]:"Key2",
    "location":"lahore",
    age:23,
}
// console.log(myName.age,["full name"]);
// console.log(myName.name);
console.log(myName.fullname);
console.log(myName["lastName"]);
console.log( typeof myName.mySym);
console.log( typeof myName[mySym]);
console.log( typeof myName[mySym]);