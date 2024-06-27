// // Arays have 2 copies 
// // shallo copies => stack change able 
// // deep copies =>heap  changes are not allowed 
// let arr = [1, 2, 3];
// console.log(arr);
// let newArr = arr;
// newArr[0] = 'Hello';
// console.log('New Array', newArr)
// console.log('Original array', arr)
// /*
// Output:
// New Array ['Hello', 2, 3]
// Original array [1, 2, 3]
// */
// // Objects have only one copy and it is a shallow copy
// let obj = {
//     name : "John",
//     age : 30,
//     city : "New York"
//     }
//     let newObj = {...obj};
//     console.log("Before changing the property");
//     console.log("Object : ", obj);
//     console.log("New Object : ", newObj);
//     //Changing the value of a key in the object using the new object
//     newObj.age=25;
//     console.log("After changing the property");
//     console.log("Object : ", obj);
//     console.log("New Object : ", newObj);
//     /*
//     Output:
//     Before changing the property
//     Object :  {name: "John", age: 30, city: "New
//     York"}
//     New Object :  {name: "John", age: 25, city: "
//     New York"}
//     After changing the property
//     Object :   {name: "John", age: 30, city: "New
//     York"}
//     New Object :   {name: "John", age: 25, city: "
//     John"}
//     */

const myArr=[0,1,2,3,4,5]
const myheros=['Batman','Superman']

const myArr2= new Array(1,2,3,4)
// console.log(myArr2[1])
// console.log(myArr2)


// array method 
// push () => its add the element at the end of an array .
// myArr.push('Hello')
// console.log(myArr);


// pop()=> it remove the last element of an array.or is me koi argument pass nahi huta
// myArr.pop();
// another way to pop an array on console.log(myArr.pop())

// unshift to add value  at the beginning of the array drawback is k sari value ko shift krna parta h or computer pa load atta h 
// shift ()=>it remove the first element from the array and return that elememt
//  myArr.unshift('Hello')
//  myArr.shift() 




// questioner question 
// console.log(myArr.includes(9)); => returns false because there are no 9 in this array
// console.log(myArr.indexOf(9));=>  returns -1 because there are no 9 in this array
// console.log(myArr.indexOf(1));=>  returns 0 as we start searching from index 0 because it been here
                         // join method convert array into string
// const newArr=myArr.join()
// console.log(newArr);=> 01234 indicate a String
// console.log(myArr);=> [0, 1, 2, 3, 4] 

                        // Slice and Splice



// console.log("A",myArr);//original Array


// const myn1=myArr.slice(1,3);  

// console.log(myn1);
// console.log("B",myArr); //using slice array


// const myn2=myArr.splice(3,5);  
// console.log("C",myArr);   //using splice array
// console.log(myn2);

const array = [12,13,14,15,16,17];
const removedElements = array.splice(4,2);
// console.log(findindex(array));
console.log(array); 

console.log(removedElements);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// console.log(months);
months.splice(4, 1);
// console.log(months);



// function House(){
//     let name="btaool"
//     const handleChange=()=>{
//       name="bisma"
//     }
//   return(
//     <>
//     <h2>Home Page {name}</h2>
//     <button onClick={handleChange}></button>
//     console.log(name);
//     </>
//   )
//   }
//   export default House;



function House() {
  const [name, setName] = useState("btaool");

  const handleChange = () => {
      setName("bisma");
  }

  console.log(name); // Logging outside the return statement

  return (
      <div>
          <h2>Home Page {name}</h2>
          <button onClick={handleChange}>Change Name</button>
      </div>
  );
}

export default House;