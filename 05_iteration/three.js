// array specific loop 
// for of 

// ["","",""]
//[{},{},{}]
const arr = [1,2,3,4,5,]
for (const num  of arr) {
    console.log(num);
    
}

const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Eachh charecter is ${greet}`);
    
}

// maps 

const map = new map()
map.set("IN", "INDIA")
map.set("USA","United states of America")
map.set("IN","INDIA")   // basically ye uniqueness ke liye jana jata hai isme koi key - value do baar nhi ho skti

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-',value);
    
}


const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key, ':-', value);
    
}   // isko is trh itterate nhi kr skte 