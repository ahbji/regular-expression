let phoneNumber = "abc@123.com";
let wsRegex = /^([\w-.!#$%&'*+-/=?^_`{|}~]+)@((?:\w+\.)+)(?:[a-zA-Z]{2,4})$/
let result = wsRegex.test(phoneNumber);
console.log(result)