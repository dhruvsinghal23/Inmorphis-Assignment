
// 1
// function reverseNumber(){
//     let num = Number(prompt("enter the number to reverse"));
//     let rever = 0;
//    while(num>0)
//    {
//        let digit = num%10;
//        rever = rever*10 + digit;
//        num = Math.floor(num/10);
//    }
//    console.log(rever);
// }
// reverseNumber();

// 2
    // function isPalindrome(s){
    //     const str = s.replace(/\s+/g, '').toLowerCase()
    //     return str === str.split('').reverse().join('')
    // }
    // console.log(isPalindrome("madam"))
    // console.log(isPalindrome("nurses run"))

//3
    // function stringCombinations(str){
    //     let result = []
    //     for(let i = 0; i<str.length; i++){
    //         for(let j=i+1; j<=str.length; j++){
    //             result.push(str.slice(i,j))
    //         }
    //     }
    //     return result
    // }
    // console.log(stringCombinations("dog"))

//4
    // function sortedOrder(str){
    //     return str.split('').sort().join('')
    // }
    // console.log(sortedOrder("webmaster"))

// 5
    // function capitalizeWords(str) {
    // return str.split(' ').map(word =>
    //     word.charAt(0).toUpperCase() + word.slice(1)
    // ).join(' ');
    // }
    // console.log(capitalizeWords("the quick brown fox")); 

//6
    // function findLongestWord(str){
    //     return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest)
    // }
    // function findLongestWord(str){
    //     let max = 0, ans = ''
    //     str.split(" ").map(word=> {
    //         if(word.length > max){
    //             max = word.length
    //             ans = word
    //         }
    //     })
    //     return ans
    // }
    // console.log(findLongestWord('Web Development Tutorial'))

//7
    // function countVowels(str){
    //     return (str.match(/[aeiou]/gi) || []).length
    //     return ans
    // }
    // console.log(countVowels('The quick brown fox'))

//8
    // function isPrime(num){
    //     if(num <= 1) return false
    //     for (let i=2; i<num; i++){
    //         if(num % i === 0){
    //             return false
    //         }
    //     }
    //     return true
    // }
    // console.log(isPrime(1231))

//9
    // function detectType(input) {
    // return typeof input;
    // }
    // console.log(detectType(23))

//10
    // function identityMatrix(n) {
    //   let result = [];
    //   for (let i = 0; i < n; i++) {
    //     let row = Array(n).fill(0);
    //     row[i] = 1;
    //     result.push(row);
    //   }
    //   return result;
    // }
    // console.log(identityMatrix(2))

//11
    // function secondLowHigh(arr) {
    //   let sorted = [...new Set(arr)].sort((a, b) => a - b);
    //   return [sorted[1], sorted[sorted.length - 2]];
    // }
    // console.log(secondLowHigh([1,2,3,4,5]))

//12
    // function isPerfect(num) {
    // let sum = 0;
    // for (let i = 1; i < num; i++) {
    //     if (num % i === 0) sum += i;
    // }
    // return sum === num;
    // }
    // console.log(isPerfect(5))

//13
    // function factors(n) {
    // let result = [];
    // for (let i = 1; i <= n; i++) {
    //     if (n % i === 0) result.push(i);
    // }
    // return result;
    // }
    // console.log(factors(10))

//14
    // function amountToCoins(amount, coins) {
    //   let result = [];
    //   for (let coin of coins) {
    //     while (amount >= coin) {
    //       amount -= coin;
    //       result.push(coin);
    //     }
    //   }
    //   return result;
    // }
    // console.log(amountToCoins(46, [25,10,5,2,1]))

//15
    // function power(b, n) {
    //   return Math.pow(b, n);
    // }
    // console.log(power(2, 0))

//16
    // function uniqueChars(str) {
    // return [...new Set(str)].join('');
    // }
    // console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"))

//17
    // function countLetters(str) {
    //   let count = {};
    //   for (let char of str) {
    //     count[char] = (count[char] || 0) + 1;
    //   }
    //   return count;
    // }
    // console.log(countLetters('Shivansh'))

//18
    // function binarySearch(arr, x) {
    //   let low = 0, high = arr.length - 1;
    //   while (low <= high) {
    //     let mid = Math.floor((low + high) / 2);
    //     if (arr[mid] === x) return mid;
    //     else if (arr[mid] < x) low = mid + 1;
    //     else high = mid - 1;
    //   }
    //   return -1;
    // }
    // console.log(binarySearch([12, 13, 21, 76, 82, 99], 82))

//19
    // function largerThan(arr, num) {
    //   return arr.filter(n => n > num);
    // }
    // console.log(largerThan([12, 21, 1, 34, 92, 65, 2], 21))

//20
    // function randomId(length) {
    //   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //   let result = '';
    //   for (let i = 0; i < length; i++) {
    //     result += chars.charAt(Math.floor(Math.random() * chars.length));
    //   }
    //   return result;
    // }
    // console.log(randomId(10))

// // 21. Fixed length subset
    // function subsetFixedLength(arr, len) {
    // let result = [];
    // const combine = (start, combo) => {
    //     if (combo.length === len) {
    //     result.push([...combo]);
    //     return;
    //     }
    //     for (let i = start; i < arr.length; i++) {
    //     combo.push(arr[i]);
    //     combine(i + 1, combo);
    //     combo.pop();
    //     }
    // };
    // combine(0, []);
    // return result;
    // }
    // console.log(subsetFixedLength([1,2,3], 2))

//22
    // function countLetter(str, letter) {
    //   return str.split('').filter(l => l === letter).length;
    // }
    // console.log(countLetter('w3resource.com', 'o'))

// // 23. First non-repeated character
    // function firstNonRepeatedChar(str) {
    // for (let char of str) {
    //     if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    // }
    // return null;
    // }
    // console.log(firstNonRepeatedChar('abacddbec'))

// // 24. Bubble sort
    // function bubbleSort(arr) {
    // let len = arr.length;
    // for (let i = 0; i < len - 1; i++) {
    //     for (let j = 0; j < len - 1 - i; j++) {
    //     if (arr[j] < arr[j + 1]) {
    //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    //     }
    //     }
    // }
    // return arr;
    // }
    // console.log(bubbleSort( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213] ))

// // 25. Longest country name
    // function longestCountry(countries) {
    // return countries.reduce((longest, current) => current.length > longest.length ? current : longest);
    // }
    // console.log(longestCountry(["Australia", "Germany", "United States of America"]))

// // 26. Longest substring without repeating characters
    // function longestUniqueSubstr(str) {
    //   let seen = {}, start = 0, maxLen = 0, longest = '';
    //   for (let i = 0; i < str.length; i++) {
    //     if (seen[str[i]] >= start) {
    //       start = seen[str[i]] + 1;
    //     }
    //     seen[str[i]] = i;
    //     if (i - start + 1 > maxLen) {
    //       maxLen = i - start + 1;
    //       longest = str.slice(start, i + 1);
    //     }
    //   }
    //   return longest;
    // }
    // console.log(longestUniqueSubstr('shivansh'))

// // 27. Longest palindrome in a string
    // function longestPalindrome(s) {
    // if (s.length < 1) return "";
    // let start = 0, end = 0;
    // for (let i = 0; i < s.length; i++) {
    //     let len1 = expandAroundCenter(s, i, i);
    //     let len2 = expandAroundCenter(s, i, i + 1);
    //     let len = Math.max(len1, len2);
    //     if (len > end - start) {
    //     start = i - Math.floor((len - 1) / 2);
    //     end = i + Math.floor(len / 2);
    //     }
    // }
    // return s.substring(start, end + 1);
    // }
    // function expandAroundCenter(s, left, right) {
    // while (left >= 0 && right < s.length && s[left] === s[right]) {
    //     left--;
    //     right++;
    // }
    // return right - left - 1;
    // }
    // console.log(longestPalindrome('bananas'))

// // 28. Function as parameter
    // function hello(){
    //     console.log('hello from another function')
    // }
    // function callFunction(fn) {
    //   return fn();
    // }
    // callFunction(hello)

// // 29. Get function name
    // function myFunction() {
    // return arguments.callee.name;
    // }
    // console.log(myFunction)














































































































