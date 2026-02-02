// primitive

// 7 types : String, Number, boolean , null, undefined, Symbol, BigInt
const score = 100 //  data type of score = number
const scoreValue = 100.3 // type of scoreValue = number

const isloggedIn = false // data type of isloggedIn = undefined
const outsideTemp = null // data type of outsideTemp = object
let userEmail; //  data type of userEmail = undefined

const id = Symbol('123')  // data type of id = symbol 
const anotherId = Symbol('123') // data type of antherId = symbol

console.log(id===anotherId);
const bigNumber = 23443557896898765432n // data type of bigNumber = bigInt



// Reference (non primitive)

// Array, object, Functions 

const heros = ["Shaktiman","Naagraj","doga"]  //  data  type of heros = object
let myObj = {
    name: "shubham",            // data type of myObj = object
    age: 22,  
    } 

const myFunction = function(){
    console.log("hello world");     // data type of myFunction = function 
    
} 
 
// console.log(typeof bigNumber);
// console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


