//用户名只能是数字字母字符。
//用户名中的数字必须在最后。 数字可以有零个或多个。 用户名不能以数字开头。
//用户名字母可以是小写字母和大写字母。
//用户名长度必须至少为两个字符。 两位用户名只能使用字母。

let username = "JackOfAllTrades";
let userCheck1 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
console.log(result)

//^ - 开头
//[a-z] - 以字母开头
//[0-9]{2,0} - 结尾是两个或多个数字
//| - or
//[a-z]+ - 接下来是两个或多个字母
//\d* - 以零个或多个数字结尾
//$ - 结尾
//i - 忽略大小写

let userCheck2 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
result = userCheck2.test(username);
console.log(result)

//^ - 开头
//[a-z] - 以字母开头
//[a-z]+ - 接下来是以个或多个字母
//\d*$ - 以零个或多个数字结尾
//| - or
//^[a-z] - 以字母开头
//\d\d+ - 接下来是两个或多个字母
//$ - end of input