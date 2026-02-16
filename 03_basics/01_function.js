function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

//sayMyName()

//function addTwoNumber(number1, number2) {
//    console.log(number1+number2);
    
//}

function addTwoNumber(number1, number2) {
     //let result = number1+number2
    // return result

    return number1+number2
    
}


const result = addTwoNumber(3,5)
//console.log("Result: " ,result);

function loginUserMessage(username = "Sam") {

    if(!undefined){
        console.log("Please enter a username");
        return

    }
    return `${username} justlogged in`
}

//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    

}
//handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray) {
    return getArray[1]

}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]));


  