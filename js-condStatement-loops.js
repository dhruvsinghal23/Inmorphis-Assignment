// // 1. Larger of two integers
// function largerOfTwo(a, b) {
//   return a > b ? a : b;
// }
// console.log(largerOfTwo(10, 20))

// // 2. Sign of product
// function productSign(x, y, z) {
//   const product = x * y * z;
//   alert("The sign is " + (product < 0 ? "-" : "+"));
// }
// console.log(productSign(3, -7, 2))

// // 3. Sort three numbers
// function sortThree(a, b, c) {
//   const sorted = [a, b, c].sort((x, y) => y - x);
//   alert(sorted.join(", "));
// }
// sortThree(10, 12, 2)

// // 4. Largest of five numbers
// function largestOfFive(...nums) {
//   alert(Math.max(...nums));
// }
// largestOfFive(-5, -2, -6, 0, -1)

// // 5. Even or odd from 0 to 15
// for (let i = 0; i <= 15; i++) {
//   console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`);
// }

// // 6. Average and grade
// const students = [
//   { name: "David", mark: 80 },
//   { name: "Vinoth", mark: 77 },
//   { name: "Divya", mark: 88 },
//   { name: "Ishitha", mark: 95 },
//   { name: "Thomas", mark: 68 }
// ];
// let total = 0;
// students.forEach(s => total += s.mark);
// const avg = total / students.length;
// let grade = "F";
// if (avg < 60) grade = "F";
// else if (avg < 70) grade = "D";
// else if (avg < 80) grade = "C";
// else if (avg < 90) grade = "B";
// else grade = "A";
// console.log("Average grade:", grade);

// // 7. FizzBuzz
// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 === 0) output += "Fizz";
//   if (i % 5 === 0) output += "Buzz";
//   console.log(output || i);
// }

// // 8. First 5 happy numbers
// function isHappy(n) {
//   const seen = new Set();
//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n);
//     n = n.toString().split('').reduce((acc, d) => acc + d * d, 0);
//   }
//   return n === 1;
// }
// let count = 0, num = 1;
// while (count < 5) {
//   if (isHappy(num)) {
//     console.log(num);
//     count++;
//   }
//   num++;
// }

// // 9. Armstrong numbers (3-digit)
// for (let i = 100; i <= 999; i++) {
//   const digits = i.toString().split('').map(Number);
//   const sum = digits.reduce((acc, d) => acc + d ** 3, 0);
//   if (sum === i) console.log(i);
// }

// // 10. Pattern
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row.trim());
// }

// // 11. GCD
// function gcd(a, b) {
//   if (!b) return a;
//   return gcd(b, a % b);
// }
// console.log(gcd(15, 5));

// // 12. Sum of multiples of 3 and 5 under 1000
// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) sum += i;
// }
// console.log(sum);
