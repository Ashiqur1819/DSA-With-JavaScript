// Type Coercion
// JavaScript-এ Type Coercion হলো এমন একটি প্রক্রিয়া যেখানে একটি data type স্বয়ংক্রিয়ভাবে বা ইচ্ছাকৃতভাবে অন্য একটি data type-এ রূপান্তরিত হয়।

// let a = 10
// let b = "5"

// console.log(a + b)
// console.log(a - b)

// =======================================================================================================

// Type Conversion / Type Casting
// JavaScript-এ Type Conversion / Type Casting হলো এমন একটি প্রক্রিয়া যেখানে একটি data type-কে ইচ্ছাকৃতভাবে (manually) অন্য একটি data type-এ রূপান্তর করা হয়।

// let age = Number(prompt("Enter your age"));
// console.log(age)

// =======================================================================================================

// Swap
// Programming-এ Swap হলো এমন একটি প্রক্রিয়া যেখানে দুটি ভেরিয়েবলের মান (value) একে অপরের সাথে অদল-বদল করা হয়।

// 01. Swap with extra variable

// let a = 10
// let b = 20
// let c;

// c = a // 10
// a = b // 20
// b = c // 10

// console.log(a, b)

// 02. Swap without extra variable

// let a = 10
// let b = 20

// a = a + b // 10 + 20 = 30
// b = a - b // 30 - 20 = 10
// a = a - b // 30 - 10 = 20

// console.log(a, b)

// 03. Swap with destructuring

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);

// =======================================================================================================

// Unary Operator

// let i = 11;
// i = i++ + ++i

// console.log(i)

// let a = 11; //12
// let b = 22; //23

// let c = a + b + a++ + b++ + ++a + ++b

// // 11 + 22 + 11 + 22 + 13 + 24

// console.log("a = ", a)
// console.log("b = ", b)
// console.log("c = ", c)

// let a = true;
// let b = false;
// a++;
// b++

// console.log(a, b);

// =======================================================================================================

// Area of triangle by heron's formula
// sqrt of s * (s-a) * (s-b) * (s-c)

// let a = 5
// let b = 4
// let c = 3

// let s = (a + b + c) / 2

// const result = Math.sqrt(s * (s-a) * (s-b) * (s-c))
// console.log(result)

// Circumference of circle

// let r = 15

// let result = Number((2 * Math.PI * r).toFixed(2))
// console.log(result)
