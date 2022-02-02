// To solve this challenge you simply have to create a regex string that matches any spaces at the beginning or at the end of the string.

//Hint 1
//Think of how you can select substrings at the beginning or end of a string.
//
//Hint 2
//Think of how you can select whitespace

let hello = "   Hello, World!  ";
let wsRegex = /^\s|\s*$/g; // 修改这一行
let result = hello.replace(wsRegex, ''); // 修改这一行
console.log(result)