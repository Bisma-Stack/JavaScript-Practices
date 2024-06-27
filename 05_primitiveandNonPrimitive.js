// there are 2 types of datatypes
// 1 is Primitive 
// 2 is non primitive 
// by the refrences of differ language as like ;C++
// it is also call called : call by value or call by refrence.


// PRIMITIVE 
// NON-PRIMITIVE IS ALSO CALL BY REFRENCE

// RIMITIVE are of 7 types:
                     // string
                     //null=>empty
                     //Boolean
                     //undefine
                     //Number
                     //symbol=>component ko symbol me wrap kart h
                     // example of Symbol: const id=Symbol('123')
                                         // const anotherId=Symbol('123')
                                         // agr hm same value bhi initialize krwain ga differ value aay gi
                                         //console.log(id===anotherId);
                                         // output : false mtlb yh k values jo di h voh same h 
                                         // but return same nahi due to uniqueness
                     //bigint example :
                     //const bigNumber=2548785n
                    

             // these are also called callback value because 
             // jb bhi hm inhain kahi sa copy karty h toh 
             //toh hmain value return kr dety h memory refrence nhi
             // jo bhi changes huti h voh copy me huti h qk copy kr k hi data diya jata h 
   
             
// NON-PRIMITIVE(refrence data type )
// because in ka refrence diya jata h 
// Example Array , objects, functions

//          js is dynamic language not a static
//         so we can assign any type of variable on same variable
//         but in static language like C++



// OBJECTS are in {} curly bracket i.e key value pair example let myobj= { name:"bisma" , age:23}


// function ko js me as a variable treate kiya jata 
// there are varius way to declare a fn.


         // we use variable way mtlb variable me store.
         // function syntax function (){}

         const myFunction =function (){
            console.log("hello world ");

         }


         // FUNCTION ACTUAL ME  FUNCTION RETURN KARTA H ISY HMM OBJECT FUNCTION KHTY H


         // NON-PRIMITIVE DATA TYPE RETURN FUNCTION OBJECT 