// // 1. Factorial using recursion
    // function factorial(n) {
    //   if (n === 0 || n === 1) return 1;
    //   return n * factorial(n - 1);
    // }
    // console.log(factorial(6))

// // 2. GCD using recursion
    // function gcd(a, b) {
    // if (!b) return a;
    // return gcd(b, a % b);
    // }
    // console.log(gcd(30, 20))

// // 3. Integers in range (x, y)
    // function range(x, y) {
    //   if (x + 1 >= y) return [];
    //   return [x + 1].concat(range(x + 1, y));
    // }
    // console.log(range(2,9))

// // 4. Sum of array using recursion
    // function sumArray(arr) {
    //   if (arr.length === 0) return 0;
    //   return arr[0] + sumArray(arr.slice(1));
    // }
    // console.log(sumArray([1,2,3,4,5,6]))

// // 5. Exponentiation using recursion
    // function power(base, exp) {
    // if (exp === 0) return 1;
    // return base * power(base, exp - 1);
    // }
    // console.log(power(2, 2))

// // 6. First n Fibonacci numbers
    // function fibonacci(n, a = 0, b = 1, result = []) {
    // if (n === 0) return result;
    // result.push(a);
    // return fibonacci(n - 1, b, a + b, result);
    // }
    // console.log(fibonacci(10))

// // 7. Check if number is even
    // function isEven(n) {
    //   if (n === 0) return true;
    //   if (n === 1) return false;
    //   return isEven(n - 2);
    // }
    // console.log(isEven(10))

// // 8. Binary Search using recursion
    // function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // if (left > right) return -1;
    // const mid = Math.floor((left + right) / 2);
    // if (arr[mid] === target) return mid;
    // if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    // return binarySearch(arr, target, mid + 1, right);
    // }
    // console.log(binarySearch( [0,1,2,3,4,5,6], 5))

// // 9. Merge Sort using recursion
    // function mergeSort(arr) {
    //   if (arr.length <= 1) return arr;
    //   const mid = Math.floor(arr.length / 2);
    //   const left = mergeSort(arr.slice(0, mid));
    //   const right = mergeSort(arr.slice(mid));

    //   return merge(left, right);
    // }
    // console.log(mergeSort( [34,7,23,32,5,62] ))

    // function merge(left, right) {
    // const result = [];
    // while (left.length && right.length) {
    //     if (left[0] < right[0]) result.push(left.shift());
    //     else result.push(right.shift());
    // }
    // return result.concat(left, right);
    // }
