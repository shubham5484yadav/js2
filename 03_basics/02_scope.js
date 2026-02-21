//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a);
     
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//****************Nested Scope***************

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website); global scope local scope lo acces nhi kr skta isliye commenet kraa 

    two()
    
}

one()



if(true){
    const username = "hitesh"
    if (username==="hitesh") {
     const website = " youtube"   
        console.log(username + website);
        
    }
  //console.log(website);
    
}

//console.log(username);

//++++++++++++++++++++intersting++++++++++++++++++++
console.log(addone(5)); // yha pe acces kr paa rhe hai

function addone(num){
    return num+1
}
 
addTwo(5) //yha pe acces nhi kr paa rhe because addTwo is stored inside a const variable
const addTwo = function(num){  // isko expression bhi bolte ahi
    return num+2
}

addTwo(5)

 
