# 先行断言

## 概述

先行断言（Lookaheads）是告诉 JavaScript 在字符串中向前查找的匹配模式。 

当想要在同一个字符串上搜寻多个匹配模式时，这可能非常有用。

## 正向先行断言

正向先行断言会查看并确保搜索匹配模式中的元素存在。

正向先行断言的用法是 (?=...)，其中 ... 就是需要存在但不会被匹配的部分。

例如， /q(?=u)/ 检测到 qu 中的 u，但不会匹配 qu 中的 u。

```javascript
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
quit.match(quRegex); // ["q"]
noquit.match(quRegex); // null
```

## 负向先行断言

负向先行断言会查看并确保搜索匹配模式中的元素不存在。

负向先行断言的用法是 (?!...)，其中 ... 是希望不存在的匹配模式。 

如果负向先行断言部分不存在，将返回匹配模式的其余部分。

例如， /q(?!u)/ 检测到 qu 中存在 u，所以不匹配；而 qt 中不存在 u ，所以匹配到 q

```javascript
let quit = "qu";
let noquit = "qt";
let qRegex = /q(?!u)/;
quit.match(qRegex); // null
noquit.match(qRegex); // ["q"]
```

## 正向回顾断言

正向回顾断言的模式时匹配的条件不会包含在匹配结果中

```javascript
let quit = "qu";
let noquit = "qt";
let qRegex = /q(?<=u)/;
quit.match(qRegex); // null
noquit.match(qRegex); // null
```

## 负向回顾断言

负向回顾断言会查看某个模式在从左到右的文本流的后面有没有出现

```javascript
let quit = "qu";
let noquit = "qt";
let qRegex = /q(?<!u)/;
quit.match(qRegex); // ["q"]
noquit.match(qRegex); // ["q"]
```

## 应用

先行断言的更实际用途是检查一个字符串中的两个或更多匹配模式。 

这里有一个简单的密码检查器，密码规则是 3 到 6 个字符且至少包含一个数字：

```javascript
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // true
```

在正则表达式 pwRegex 中使用先行断言以匹配大于 5 个字符且有两个连续数字的密码。

```javascript
let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
```

[参考](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-positive-and-negative-lookahead/301360)