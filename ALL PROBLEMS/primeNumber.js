const pr = 11;

if (pr === null) {
  console.log("Cancelled");
} else {
  const n = Number(pr);

  if (!Number.isInteger(n) || n <= 0) {
    console.log("Enter a valid positive integer");
  } else {
    // let isPrime = true;
    // for(let i = 2; i <= Math.floor(n / 2); i++){
    //     if(n % i === 0){
    //         isPrime = false
    //     }
    // }
    // console.log(isPrime)

    console.log(isPrime(n))
  }
}

function isPrime (number){
    if(number <= 1 ) return false;
    if(number === 2) return true;
    if(number % 2 === 0) return false;

    for(let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2){
        if(number % i === 0){
            return false
        }
    }
  
    return true
}