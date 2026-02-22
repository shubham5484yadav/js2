const userEmail = "hi@hitesh"

if (userEmail) {
    console.log("Got user email");
    
} else{
    console.log("Don't have user email" );
    
}  

// falsy values 

// false, 0, -0, BigInt 0n ,"", null, undefined, NaN

// truthy value

// "0",'false', " ", [], {}, function() {}

// if (userEmail===0) {
//     console.log("Array is empty")
// }
// const emptyObj = {}
// if (Object.keys(emptyObj).lenght ===0) {
//     console.log("Object is empty")
// }


// false = 0
// true
// false ==''
// true
// 0==''
// true


 // Nullish coalescing Operator (??) : null undefined

 let val1;
// val1 = 5 ?? 10   output = 5
// val1 = null ?? 10  output = 10
//val1 = undefined ?? 15  //output = 15
//val1 = null ?? 10 ?? 20 // output 10

console.log(val1);

// Ternary Operator 
 condition ? true:false
 const iceTeaPrice = 100

 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
 
 


