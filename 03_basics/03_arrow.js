const user = {
    usrname: "hitesh",
    price: 999,

    welcomeMessage() {
        console.log(`${this.usrname}, welcome to website`);   //current contex ko refer krta hai 
        console.log(this);
        
    }
}

user.welcomeMessage()
user.usrname = "sam"
user.welcomeMessage()

console.log(this );


function chai(){
    let usrname = "shubham"
    console.log(this.username);
    
}
chai()   // it show undefined 


 
// const chai1 = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai1() 

const chai1 = () =>{
    let username = "hitesh"
    console.log(this);
    
}
//chai1()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4));

// implicit return me use kr skte hai

//const addTwo = (num1,num2) =>  num1+num2
//const addTwo = (num1,num2) =>  (num1+num2)
const addTwo = (num1,num2) =>  ({username : "hitesh"})

// console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]
// myArray.forEach(()=>())



