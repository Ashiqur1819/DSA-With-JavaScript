let amount = 7500;

if(amount >= 0 && amount <= 5000){
    console.log(amount)
}else if(amount >= 5000 && amount <= 7000){
    let discount = Math.floor((5 * amount) / 100)
    let payableAmount = amount - discount
    console.log(payableAmount)
}else if(amount >= 7000 && amount <= 9000){
    let discount = Math.floor((10 * amount) / 100)
    let payableAmount = amount - discount
    console.log(payableAmount)
}else if(amount >= 9000){
    let discount = Math.floor((20 * amount) / 100)
    let payableAmount = amount - discount
    console.log(payableAmount)
}else{
    console.log("Invalid input")
}


// ======================================

let discount = 0;

if (amount >= 0 && amount <= 5000) {
  discount = 0;
} else if (amount >= 5000 && amount <= 7000) {
  discount = 5;
} else if (amount >= 7000 && amount <= 9000) {
  discount = 10;
} else if (amount >= 9000) {
  discount = 20;
} else {
  console.log("Invalid input");
}

discount = Math.floor((discount * amount) / 100);
let payableAmount = amount - discount;
console.log(payableAmount);