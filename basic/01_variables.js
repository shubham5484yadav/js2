const accountId = 144553
let accountEmail = "golu839@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

 //accountId = 2 // not allowed
accountEmail = "hello@gmail.com"
accountPassword = "456"
accountCity = "rajsthan"

console.table([accountEmail,accountId,accountCity,accountPassword,accountState  ])
console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope  
*/