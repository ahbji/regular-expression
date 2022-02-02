// 第一个3位数字可以带也可以不带括号

let phoneNumber = "707-827-0000";
let wsRegex = /^(\(\d{3}\)|^\d{3}[.-]?)?\d{3}[.-]?\d{4}$/;
let result = wsRegex.test(phoneNumber);
console.log(result)