// singleton
//Object.create

// object literals 

const mySym = Symbol("key1")



const JsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym] : "mykey1",   // symbol ki trh use krna hai toh sqaure bracket lagana pdega
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"

//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greeting = function(){
    console.log(`Hello js user, ${this.name}`);
}
 
console.log();




