// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB connected`);
    
}) ();

// ( () =>{
//     console.log(`DB CONNECTED TWo`);
    
// }) ()

( (name) =>{
    console.log(`DB CONNECTED TWo ${name}`);
    
}) ('Hitesh')