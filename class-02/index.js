// Conditional Statement

// Valid voter
// let age = Number(prompt("Enter your age"))

// if(isNaN(age)){
//     console.log("Wrong input")
// }else if(age >== 18){
//     console.log("You are a valid voter.")
// }else{
//     console.log("You are a not valid voter.")
// }

// =========================================================================================

// Discount

// let amount = Number(prompt("Enter your amount"));

// if(amount >= 0 && amount <= 5000){
//     console.log(amount)
// }else if(amount >= 5000 && amount <= 7000){
//     let discount = Math.floor((5 * amount) / 100)
//     let payableAmount = amount - discount
//     console.log(payableAmount)
// }else if(amount >= 7000 && amount <= 9000){
//     let discount = Math.floor((10 * amount) / 100)
//     let payableAmount = amount - discount
//     console.log(payableAmount)
// }else if(amount >= 9000){
//     let discount = Math.floor((20 * amount) / 100)
//     let payableAmount = amount - discount
//     console.log(payableAmount)
// }else{
//     console.log("Invalid input")
// }

// =========================================================================================

// let discount = 0;

// if (amount >= 0 && amount <= 5000) {
//   discount = 0;
// } else if (amount >= 5000 && amount <= 7000) {
//   discount = 5;
// } else if (amount >= 7000 && amount <= 9000) {
//   discount = 10;
// } else if (amount >= 9000) {
//   discount = 20;
// } else {
//   console.log("Invalid input");
// }

// discount = Math.floor((discount * amount) / 100);
// let payableAmount = amount - discount;
// console.log(payableAmount);

// =========================================================================================

// Electrity Bill

// let unit = Number(prompt("Enter your electricity unit: "))

// let amount = 0

// if(unit >= 400){
//     amount = (unit - 400) * 13
//     unit = 400
// }
// if(unit >= 200 && unit <= 400){
//     amount += (unit - 200) * 8
//     unit = 200
// }
// if(unit >= 100 && unit <= 200){
//     amount += (unit - 100) * 6
//     unit = 100
// }

// amount += unit * 4

// console.log(amount)

// =========================================================================================

// BDT Denomination

// let amount = 9998

// if(amount >= 1000){
//     console.log("1000 notes: ", Math.floor(amount / 1000))
//     amount = amount % 1000
// }
// if(amount >= 500){
//     console.log("500 notes: ", Math.floor(amount / 500))
//     amount = amount % 500
// }
// if(amount >= 200){
//     console.log("200 notes: ", Math.floor(amount / 200))
//     amount = amount % 200
// }
// if(amount >= 100){
//     console.log("100 notes: ", Math.floor(amount / 100))
//     amount = amount % 100
// }
// if(amount >= 50){
//     console.log("50 notes: ", Math.floor(amount / 50))
//     amount = amount % 50
// }
// if(amount >= 20){
//     console.log("20 notes: ", Math.floor(amount / 20))
//     amount = amount % 20
// }
// if(amount >= 10){
//     console.log("10 notes: ", Math.floor(amount / 10))
//     amount = amount % 10
// }
// if(amount >= 5){
//     console.log("5 notes: ", Math.floor(amount / 5))
//     amount = amount % 5
// }
// if(amount >= 2){
//     console.log("2 notes: ", Math.floor(amount / 2))
//     amount = amount % 2
// }
// if(amount === 1){
//     console.log("1 notes: ", Math.floor(amount)) 
// }