//1
// function is_string(input) {
//   return typeof input === 'string';
// }
// console.log(is_string('asd'))

//2
// function is_Blank(str) {
//   return str.length === 0;
// }
// console.log(is_Blank('a'))

//3 
// function string_to_array(str) {
//   return str.trim().split(" ");
// }
// console.log(string_to_array('asdf'))

//4
// function truncate_string(str, len) {
//   return str.slice(0, len);
// }
// console.log(truncate_string('asdfg hjkl', 7))

//5
// function abbrev_name(str) {
//   let names = str.split(" ");
//   return `${names[0]} ${names[1].charAt(0)}.`;
// }
// console.log(abbrev_name('asdfgh qwert'))

//6 
// function protect_email(email) {
//   let [user, domain] = email.split("@");
//   return user.slice(0, 5) + '...@' + domain;
// }
// console.log(protect_email('shivansh.singhal@inmorphis.com'))

// // 7. Parameterize a string
// function string_parameterize(str) {
//     let st = str.toLowerCase().split(" ").join('-')
//     return st
// }
// console.log(string_parameterize('Robin Singh from USA'))

//8
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }   
// console.log(capitalize('js string exercises'))

//9
// function capitalize_Words(str) {
//     let st = str.split(" ").map(word => 
//         word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ')
//     return st
// }
// console.log(capitalize_Words('js string excersise'))

//10
// function swapcase(str) {
//   return str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
// }
// console.log(swapcase('AaBbc'))

//11
// function camelize(str) {
//   return str.replace(/(?:^|\s|_)(.)/g, (_, c) => c.toUpperCase()).replace(/\s|_/g, '');
// }
// console.log(camelize('JavaScript Exercises'))

//12
// function uncamelize(str, sep = ' ') {
//   return str.replace(/([a-z])([A-Z])/g, `$1${sep}$2`).toLowerCase();
// }
// console.log(uncamelize('helloWorld'))

//13
// function repeat(str, n = 1) {
//   return str.repeat(n);
// }
// console.log(repeat('Ha!', 2))

//14
// function insert(str, ins = '', pos = 0) {
//   return str.slice(0, pos) + ins + str.slice(pos);
// }
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18))

//15
// function humanize_format(num) {
//   if (typeof num !== 'number') return;
//   let suffix = ['th', 'st', 'nd', 'rd'], v = num % 100;
//   return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
// }
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));

//16
// function text_truncate(str, length = str.length, ending = '...') {
//   return str.length > length ? str.slice(0, length - ending.length) + ending : str;
// }
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

//17 
// function string_chop(str, size = str.length) {
//   let res = [];
//   for (let i = 0; i < str.length; i += size) {
//     res.push(str.substr(i, size));
//   }
//   return res;
// }
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));

//18
// function count(str, subStr, caseSensitive = true) {
//   if (caseSensitive) {
//     str = str.toLowerCase();
//     subStr = subStr.toLowerCase();
//   }
//   return str.split(subStr).length - 1;
// }
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

//19
// function escape_HTML(str) {
//   return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, '&quot;').replace(/'/g, "&#39;");
// }
// console.log(escape_HTML('<a href="javascript-string-exercise-17.php"target="_blank">'));

//20
// function formatted_string(pad, str, dir = 'r') {
//   str = str + '';
//   return dir === 'l' ? (pad + str).slice(-pad.length) : (str + pad).substring(0, pad.length);
// }
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));

//21
// function repeat_string(str, count = 1) {
//   return typeof str === 'string' && typeof count === 'number' ? str.repeat(count) : "Error in string or count.";
// }
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));

//22
// function subStrAfterChars(str, char, pos) {
//   return pos === 'a' ? str.substring(0, str.indexOf(char)) : str.substring(str.indexOf(char) + 1);
// }
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));

//23
// function strip(str) {
//   return str.trim();
// }
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));

//24
// function truncate(str, words) {
//   return str.split(" ").slice(0, words).join(" ");
// }
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

//25
// function alphabetize_string(str) {
//   return str.replace(/\s+/g, '').split('').sort().join('');
// }
// console.log(alphabetize_string('United States'));

//26
// function remove_first_occurrence(str, search) {
//   return str.replace(search, '');
// }
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazydog", 'the'));

//27
// function ascii_to_hexa(str) {
//   return str.split('').map(c => c.charCodeAt(0).toString(16)).join('');
// }
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));

//28
// function hex_to_ascii(str) {
//   let hexes = str.match(/.{1,2}/g);
//   return hexes.map(h => String.fromCharCode(parseInt(h, 16))).join('');
// }
// console.log(hex_to_ascii('3132'));
// console.log(hex_to_ascii('313030'));

//29
// function search_word(str, word) {
//   let count = str.split(word).length - 1;
//   return `'${word}' was found ${count} times.`;
// }
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

//30
// function string_endsWith(str, suffix) {
//     if(suffix === '') return false
//   return str.endsWith(suffix);
// }
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
// console.log(string_endsWith('JS PHP PYTHON',''));

//31
// function escape_html(str) {
//   return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;');
// }
// console.log(escape_html('PHP & MySQL'));

//32
// function remove_non_ascii(str) {
//   return str.replace(/[^   return str.replace(/[^\x20-~  return str.replace(/[^\x20-\x7E]/g, '');
// }
// console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

//33
// function remove_non_word(str) {
//   return str.replace(/[^\w\s-]/g, '');
// }
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

//34
// function sentenceCase(str) {
//   return str.toLowerCase().split(' ').map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }).join(' ')
// }
// console.log(sentenceCase('PHP exercises. python exercises.'));

//35
// function strip_html_tags(str) {
//   return str.replace(/<[^>]*>/g, '');
// }
// console.log(strip_html_tags('<p><strong><em>PHPExercises</em></strong></p>'));

//36
// function zeroFill(number, width, sign = '') {
//   let numStr = Math.abs(number).toString();
//   let zeros = '0'.repeat(Math.max(0, width - numStr.length));
//   return (number >= 0 ? '+' : '-') + zeros + numStr;
// }
// console.log(zeroFill(120, 5, '-'));
// console.log(zeroFill(29, 4));

//37
// function compare_strings(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(compare_strings('abcd', 'AbcD'));
// console.log(compare_strings('ABCD', 'Abce'));

//38
// function case_insensitive_search(str, search) {
//   return str.toLowerCase().includes(search.toLowerCase()) ? 'Matched' : 'Not Matched';
// }
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));

