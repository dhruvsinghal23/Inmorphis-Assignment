
// 1
// function is_array(input) {
//   return Array.isArray(input);
// }
// console.log(is_array([1,2,4,0]))

// 2
// function array_Clone(arr) {
//   return(arr.slice())
// }
// console.log(array_Clone([1,2,4,0]))

// 3
// function first(arr, n) {
//   if (arr == null) return [];
//   if (n == null) return arr[0];
//   if (n < 0) return [];
//   return arr.slice(0, n);
// }
// console.log(first([7, 9, 0, -2], 3))

// 4
// function last(arr, n) {
//   if (arr == null) return [];
//   if (n == null) return arr[arr.length - 1];
//   return arr.slice(Math.max(arr.length - n, 0));
// }
// console.log(last([7, 9, 0, -2], 2))

// 5
// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(","));
// console.log(myColor.join("+"));

// 6
// function dash_even(num) {
//   let str = num.toString();
//   let result = [str[0]];
//   for (let i = 1; i < str.length; i++) {
//     if (parseInt(str[i - 1]) % 2 === 0 && parseInt(str[i]) % 2 === 0) {
//       result.push('-', str[i]);
//     } else {
//       result.push(str[i]);
//     }
//   }
//   return result.join('');
// }
// console.log(dash_even("025468"))

// 7
// function sort_array(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sort_array( [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]))

// 8
// function most_frequent(arr) {
//   let freq = {}, max = 0, item;
//   for (let i of arr) {
//     freq[i] = (freq[i] || 0) + 1;
//     if (freq[i] > max) {
//       max = freq[i];
//       item = i;
//     }
//   }
//   return `${item} (${max} times)`;
// }
// console.log(most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

// 9
// function swap_case(str) {
//   return str.split('').map(c =>
//     c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
//   ).join('');
// }
// console.log(swap_case('tHE qUICK bROWN fOX'))

// 10
// function print_matrix(arr) {
//   for (let i in arr) {
//     console.log("row " + i);
//     for (let j in arr[i]) {
//       console.log(" " + arr[i][j]);
//     }
//   }
// }
// console.log(print_matrix([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]))

// 11
// function sum_sq(arr) {
//   return arr.reduce((sum, val) => 
//     sum + val * val, 0);
// }
// console.log(sum_sq([1,2,3,4]))

// 12
// function sum_product(arr) {
//   let sum = 0, product = 1;
//   for (let i of arr) {
//     sum += i;
//     product *= i;
//   }
//   return { sum, product };
// }
// console.log(sum_product([1,2,3,4,5]))

// 13
// function add_items(arr, item) {
//   arr.push(item);
//   return arr;
// }
// console.log(add_items([1,2,3,4]))

// 14
// function remove_duplicates(arr) {
//   return [...new Set(arr.map(i => typeof i === 'string' ? i.toLowerCase() : i))];
// }
// console.log(remove_duplicates(['s', 'H', 'i', 'V', 'a', 'N', 'S', 'h']))

// // 15. Display colors with ordinal suffix
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
// o = ["th","st","nd","rd"]
// function display_colors(colors) {
//   let ord = ['th', 'st', 'nd', 'rd'];
//   colors.forEach((color, i) => {
//     let pos = i + 1;
//     let suffix = ord[pos] || 'th';
//     if (pos > 3) suffix = 'th';
//     console.log(`${pos}${suffix} choice is ${color}.`);
//   });
// }
// console.log(display_colors(color))

// 16
// function leap_years(start, end) {
//   let years = [];
//   for (let i = start; i <= end; i++) {
//     if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
//       years.push(i);
//     }
//   }
//   return years;
// }
// console.log(leap_years(2000, 2020))

// 17. shuffle array
// function shuffle(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }
// console.log(shuffle([1,2,3,4,5]))

// 18
// function binary_Search(arr, val) {
//   let start = 0, end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === val) return mid;
//     else if (arr[mid] < val) start = mid + 1;
//     else end = mid - 1;
//   }
//   return -1;
// }
// console.log(binary_Search([1,2,3,4,5,66,99], 66))

// 19
// function sum_arrays(arr1, arr2) {
//   let maxLength = Math.max(arr1.length, arr2.length);
//   let result = [];
//   for (let i = 0; i < maxLength; i++) {
//     result.push((arr1[i] || 0) + (arr2[i] || 0));
//   }
//   return result;
// }
// console.log(sum_arrays([1,2,3], [1,2,3,4]))

// 20
// function find_duplicates(arr) {
//   let seen = new Set(), dups = new Set();
//   for (let i of arr) {
//     if (seen.has(i)) dups.add(i);
//     seen.add(i);
//   }
//   return [...dups];
// }
// console.log(find_duplicates([1,2,2,3,4,5,5,6]))

// // 21. Flatten array
// function flatten(arr, shallow = false) {
//   return shallow ? [].concat(...arr) : arr.flat(Infinity);
// }
// console.log(flatten([1,2,2,3,4,55,6]))

// 22
// function union(a, b) {
//   return [...new Set([...a, ...b])];
// }
// console.log(union([1,2,4], [1,2,3]))

// 23. Difference of arrays
// function difference(arr1, arr2) {
//   return [
//     ...arr1.filter(x => !arr2.includes(x)),
//     ...arr2.filter(x => !arr1.includes(x))
//   ];
// }
// console.log(difference([1,2,3], [3,4,2]))

// // 24. Remove falsy values
// function clean_array(arr) {
//   return arr.filter(Boolean);
// }
// console.log(clean_array( [NaN, 0, 15, false, -22, '',undefined, 47, null]))

// // 25. Sort objects by title
// function sortByTitle(library) {
//   return library.sort((a, b) => a.title.localeCompare(b.title));
// }
// var library = [  
// { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
// { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
// ];
// console.log(sortByTitle(library))


// 26
// function pair_sum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) return [i, j];
//     }
//   }
//   return null;
// }
// console.log(pair_sum( [10,20,10,40,50,60,70], 50))

// // 27. Retrieve property
// function pluck(arr, key) {
//   return arr.map(obj => obj[key]);
// }
// console.log(pluck( [NaN, 0, 15, false, -22, '',undefined, 47, null]))

// // 28. Longest common starting substring
// function longest_common_starting_substring(arr) {
//   if (!arr.length) return '';
//   let a = arr.concat().sort();
//   let a1 = a[0], a2 = a[a.length - 1];
//   let L = a1.length;
//   let i = 0;
//   while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
//   return a1.substring(0, i);
// }
// console.log(longest_common_starting_substring(['go', 'google']))

// // 29. Fill array within bounds
// function num_string_range(start, end, step = 1) {
//   let result = [], i = start.charCodeAt(0), j = end.charCodeAt(0);
//   for (let k = i; k <= j; k += step) {
//     result.push(String.fromCharCode(k));
//   }
//   return result;
// }
// console.log(num_string_range('a', "z", 2))

// 30
// function merge_array(a, b) {
//   return [...new Set([...a, ...b])];
// }
// console.log(merge_array([1,2,3], [2,30,1]))


// // 31. Remove specific element
// function remove_array_element(arr, elem) {
//   return arr.filter(i => i !== elem);
// }
// console.log(remove_array_element([2, 5, 9, 6], 5))

// 32
// function contains(arr, elem) {
//   return arr.includes(elem);
// }
// console.log(contains([2,5,9,6], 5))

// 33
// function empty_array(arr) {
//   arr.length = 0;
//   return arr;
// }
// console.log(empty_array([1,2,3,3,null,null]))

// 34
// function nthlargest(arr, n) {
//   return arr.sort((a, b) => b - a)[n - 1];
// }
// console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4))

// 35
// function random_item(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
// console.log(random_item([1,2,3,4,5]))

// // 36 & 37. Prefill with value
// function array_filled(length, value) {
//   return Array(length).fill(value);
// }

// // 38. Move element
// function move(arr, from, to) {
//   arr.splice(to, 0, arr.splice(from, 1)[0]);
//   return arr;
// }
// console.log(move([10,20,30,40,50], 1, 4))

// 39
// function filter_array_values(arr) {
//   return arr.filter(Boolean);
// }
// console.log(filter_array_values([58,"",'abcd',true,null,false,0]))

// 40
// function array_range(start, len) {
//   let arr = [start]
//   let i=0;
//   while(i<len-1){
//     let nextElem = arr[i] + 1
//     arr.push(nextElem)
//     i++
//   }
//   return arr
// }
// console.log(array_range(4,7))

// // 41. Range between
// function rangeBetween(start, end) {
//   return Array.from({length: end - start + 1}, (_, i) => start + i);
// }
// console.log(rangeBetween(4,7))

// 42
// function unique_from_two(a, b) {
//   return [...new Set([...a, ...b])];
// }
// console.log(unique_from_two([1,2,3], [100,2,1,10]))
