// Loop and Recursion

// Factors problem

// const pr = prompt("Enter your number: ");

// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   const n = Number(pr);

//   if (!Number.isInteger(n) || n <= 0) {
//     console.log("Enter a valid positive integer");
//   } else {
//     const divisors = [];

//     // 36

//     for (let i = 1; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         divisors.push(i);
//         if (i !== n / i) {
//           divisors.push(n / i);
//         }
//       }
//     }

//     divisors.sort((a, b) => a - b);
//     console.log(divisors);
//   }
// }

// Prime number
const pr = prompt("Enter your number: ");

if (pr === null) {
  console.log("Cancelled");
} else {
  const n = Number(pr);

  if (!Number.isInteger(n) || n <= 0) {
    console.log("Enter a valid positive integer");
  } else {

    let isPrime = true;

    for(let i = 2; i <= Math.floor(n / 2); i++){
        if(n % i === 0){
            isPrime = false
        }
    }

    console.log(isPrime)
  }
}
