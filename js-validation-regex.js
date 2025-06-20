// // 1. First character is uppercase
// function isFirstCharUppercase(str) {
//   return /^[A-Z]/.test(str);
// }

// // 2. Credit card validation
// function isCreditCard(str) {
//   return /^(?:\d{4}[- ]?){3}\d{4}$/.test(str);
// }

// // 3. Email pattern
// function isEmail(str) {
//   return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(str);
// }

// // 4. Search for date in string (dd-mm-yyyy or mm/dd/yyyy)
// function findDate(str) {
//   return str.match(/\b(\d{1,2}[-/]\d{1,2}[-/]\d{2,4})\b/g);
// }

// // 5. Trim using regex
// function trimRegex(str) {
//   return str.replace(/^\s+|\s+$/g, '');
// }

// // 6. Word count
// function countWords(str) {
//   return str.trim().replace(/\s+/g, ' ').split(' ').length;
// }

// // 7. IP Address validation
// function isIP(str) {
//   return /^(\d{1,3}\.){3}\d{1,3}$/.test(str);
// }

// // 8. Count vowels
// function countVowels(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// // 9. Valid URL
// function isURL(str) {
//   return /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/\S*)?$/.test(str);
// }

// // 10. Alpha-numeric
// function isAlphaNumeric(str) {
//   return /^[a-z0-9]+$/i.test(str);
// }

// // 11. Time string (HH:MM or HH:MM:SS)
// function isTime(str) {
//   return /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(str);
// }

// // 12. US ZIP Code
// function isUSZip(str) {
//   return /^\d{5}(-\d{4})?$/.test(str);
// }

// // 13. UK Postcode
// function isUKPostCode(str) {
//   return /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/i.test(str);
// }

// // 14. Canada Postcode
// function isCanadaPostCode(str) {
//   return /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i.test(str);
// }

// // 15. Social Security Number
// function isSSN(str) {
//   return /^\d{3}-\d{2}-\d{4}$/.test(str);
// }

// // 16. Hexadecimal
// function isHex(str) {
//   return /^[0-9A-F]+$/i.test(str);
// }

// // 17. Hex color
// function isHexColor(str) {
//   return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(str);
// }

// // 18. Domain check
// function isDomain(str) {
//   return /^[\w.-]+\.[a-z]{2,}$/.test(str);
// }

// // 19. HTML check
// function isHTML(str) {
//   return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
// }

// // 20. Alpha, dash, underscore
// function isAlphaDashUnderscore(str) {
//   return /^[a-zA-Z_-]+$/.test(str);
// }

// // 21. Thousands separator
// function thousands_separators(num) {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// // Example
// console.log(thousands_separators(10000.23)); // "10,000.23"
