// Conditional Statement

// Valid voter
// let age = Number(prompt("Enter your age"))

// if(isNaN(age)){
//     console.log("Wrong input")
// }else if(age >= 18){
//     console.log("You are a valid voter.")
// }else{
//     console.log("You are a not valid voter.")
// }

// Discount

// let amount = Number(prompt("Enter your amount"));

// if(amount > 0 && amount <= 5000){
//     console.log(amount)
// }else if(amount > 5000 && amount <= 7000){
//     let discount = Math.floor((5 * amount) / 100)
//     let payableAmount = amount - discount
//     console.log(payableAmount)
// }else if(amount > 7000 && amount <= 9000){
//     let discount = Math.floor((10 * amount) / 100)
//     let payableAmount = amount - discount
//     console.log(payableAmount)
// }else if(amount > 9000){
//     let discount = Math.floor((20 * amount) / 100)
//     let payableAmount = amount - discount
//     console.log(payableAmount)
// }else{
//     console.log("Invalid input")
// }

// let discount = 0;

// if (amount > 0 && amount <= 5000) {
//   discount = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   discount = 10;
// } else if (amount > 9000) {
//   discount = 20;
// } else {
//   console.log("Invalid input");
// }

// discount = Math.floor((discount * amount) / 100);
// let payableAmount = amount - discount;
// console.log(payableAmount);


// Electrity Bill

// let unit = Number(prompt("Enter your electricity unit: "))

// let amount = 0

// if(unit > 400){
//     amount = (unit - 400) * 13
//     unit = 400
// }
// if(unit > 200 && unit <= 400){
//     amount += (unit - 200) * 8
//     unit = 200
// }
// if(unit > 100 && unit <= 200){
//     amount += (unit - 100) * 6
//     unit = 100
// }

// amount += unit * 4

// console.log(amount)