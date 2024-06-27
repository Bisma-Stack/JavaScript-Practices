const hero=["Alice","Bob","Charlie"];
// const marvel=["kate","johnny","ironman"];
// hero.push(marvel);  // push exist on its on array not return a new array 
// console.log(hero);
// console.log(typeof hero)
// hero=hero.concat(marvel) concat return a new array so thats why we store it in to a new variable .
// console.log(hero);

const num=[0,1,2,3,56]

const marvel=["kate","johnny","ironman"];

// const newout=num.concat(marvel);
// console.log(newout);

num.push(marvel)
console.log( num);



// instead of concat we also using spread operator.
//... lagana sa array nahi rhi individual elements bn gy h as like we throw a glass and its partical spreads  
// spread operator k syntax me limitation n ahi h hm multiple values/variables  ko add kr skty h 
const all_new_hero=[...marvel,...hero]
// console.log(all_new_hero)

// rare case situation array

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// there is an array , inside another arrays how to convert it into single array .
// WE Use FLAT METHOd , flat method have parameters which is depth : dept 1 , depth 2, depth 3 but we give depth infinity k voh khud hi handle kr ly .
const useable_array=another_array.flat(Infinity);
// console.log(useable_array)


////////////////////////when we do web scraping we get data in differ format node like but hmain data array me chahiya 
////////////////// so hm pouch bhi skty h k yh data array format me h k nahi or sath hi usay convert bhi sktay h 

console.log((Array.isArray("Bisma")));// isarray is used to ask  the given element is array or not ? 
console.log((Array.from("Bisma")));//from is used to convert an arry 


//variables as an array to get element instead of using array.from we use array.of.


let score1=100;
let score2=200;
let score3=400;

console.log(Array.of(score1,score2,scor))

// what is difference between array.of and array.from


// In JavaScript, Array.of() and Array.from() are methods used to create new arrays. However, they are used in different scenarios due to their unique features.

// Array.of() is used to create a new Array instance with a variable number of arguments, which can be of any type. It's particularly useful when you want to create an array from a list of variables or arguments, especially when the number of elements is not known beforehand.

// For example:

// javascript
// Copy code
// const score1 = 100;
// const score2 = 200;
// const score3 = 400;

// console.log(Array.of(score1, score2, score3)); // [100, 200, 400]
// Array.from(), on the other hand, is used to create a new Array instance from an array-like or iterable object. It takes two arguments: the first is a required array-like or iterable object to convert into an array, and the second is an optional map function to customize the creation of new array elements.

// For example:

// javascript
// Copy code
// const arrayLike = {
//   length: 3,
//   0: 'a',
//   1: 'b',
//   2: 'c'
// };

// const arrFromArrayLike = Array.from(arrayLike); // ['a', 'b', 'c']

// const iterable = 'abc';
// const arrFromIterable = Array.from(iterable); // ['a', 'b', 'c']
// In summary, the main difference between Array.of() and Array.from() is that Array.of() creates a new array from a variable number of arguments, while Array.from() creates a new array from an array-like or iterable object.




// const iterable = 'abc'; const arrFromIterable = Array.from(iterable); // ['a', 'b', 'c'const iterable = 'abc'; const arrFromIterable = Array.from(iterable); // ['a', 'b', 'c' explain this


// In this example, the variable iterable is assigned the string value 'abc'. The Array.from() method is then used to convert the string 'abc' into an array.

// In JavaScript, strings are iterable objects, which means that they have a [Symbol.iterator]() method that allows them to be iterated over using a for...of loop or other similar constructs.

// When Array.from() is called with a string as its first argument, it treats the string as an iterable object and creates a new array with each character in the string as an element.

// So, in this case, Array.from(iterable) creates a new array with three elements, ['a', 'b', 'c'], where each character in the original string 'abc' is an element in the new array.

// Here's an example of using a for...of loop to iterate over the same string and achieve the same result:

// javascript
// Copy code
// const iterable = 'abc';
// const arrFromForOf = [];

// for (const char of iterable) {
//   arrFromForOf.push(char);
// }

// console.log(arrFromForOf); // ['a', 'b', 'c']
// In summary, Array.from(iterable) converts an iterable object, such as a string, into a new array with each element being the successive values in the iterable.



