// Conditional Statement

let age = Number(prompt("Enter your age"))

if(isNaN(age)){
    console.log("Wrong input")
}else if(age >= 18){
    console.log("You are a valid voter.")
}else{
    console.log("You are a not valid voter.")
}