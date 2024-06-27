// console.log(2>1)
// console.log(2<1)
// console.log(2==1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2!=1)

// these ooerator give some reusult in comparison 

 
// But  problem is arrised when these data type is compared  below all comparsion is avoidable .

// console.log("2">1);    mtlb yh dono issue karty h     
// console.log("02">1); both give true answer  mtlb yh k compare able or pridict able result nahi h 

 // but typescript don't allow to compare same data type.

console.log(null>0); // false
console.log(null==0);// false
console.log(null>=0);//true

//comparison operator and equality operator both work differently in js.
// the reason is that equality check == and a comparison >< >= <= work differently.
// comparison convert null to a number , treating it as a 0 so thats why null>0 give true .
// so if we use == with null and other value then it will return false because JS can not
// convert null to any other data type except undefined and NaN, and NaN is also not equal to
// anything including itself . So JS gives false for all values when used with ==.
//equality operators are used to check whether two variables have same value or not
// they do type coercion i.e. they try to make both sides of the oper
// anable to be compared by converting one side into another
//if we use == with different types of data like string and int or bool etc
//then JS does type coercion and tries to convert smaller variable into larger one
//and then compares them
let x = "5";
let y=4;
console.log(x==y);   // true
console.log(x===y);    //false


//*********************Strickly Ckeck is : ===**************** */
// its check the boths side value as well as data type 
// == check both side value .

console.log("2"==2) // conversion is possible.
console.log("2"===2) // conversion is not possible .