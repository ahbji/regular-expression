# 匹配模式规则

## 概述

在编程语言中，正则表达式用于匹配指定的字符串。 通过正则表达式创建匹配模式（规则）完成指定匹配。

如果想要在字符串 The dog chased the cat 中匹配到 the 这个单词，可以使用如下正则表达式：/the/。 注意，正则表达式中不需要引号。


## 匹配字符串

以 javascript 为例，test 方法以匹配模式规则匹配指定的字符串

对于匹配字母的规则，默认区分大小写。

```javascript
let testStr = "freeCodeCamp";
let testRegex = /Code/; // 匹配 Code ，区分大小写
testRegex.test(testStr); // true
```

## 多种匹配模式

正则表达式中可以`OR`操作符（也称为 `Alternation` 操作符）创建多种匹配模式匹配多种可能的条件。

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // 只要 petString 中存在 dog 或 cat 或 bird 或 fish，都返回 true
let result = petRegex.test(petString);
```

多种匹配模式也可以在捕获组中使用。

```javascript
let myString = "Eleanor Roosevelt";
let myRegex = /^(Eleanor|Franklin) .*Roosevelt/;
let result = myRegex.test(myString);
```

## 匹配字符串的开头

`^` 脱字符也可用于匹配字符串的开始位置

```javascript
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // false
```

## 匹配字符串的结尾

`$` 用于匹配字符串的结尾位置

```javascript
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

## 匹配模式

### 忽略大小写字母

通过为正则表达式后追加 `i` 标志位忽略大小写字母

```javascript
let testStr = "freeCodeCamp";
let testRegex = /code/i; // 匹配 code ，忽略大小写
testRegex.test(testStr); // true
```

### 全局匹配

通过设置 g 标志位可以在字符串中执行多次匹配，并提取中所有匹配的内容

```javascript
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex); //返回 ["Repeat", "Repeat", "Repeat"]
```

### dotall 模式

dotall 模式表示点号除了匹配其他字符之外，还会匹配换行符。

```javascript
/foo.bar/.test('foo\nbar'); 				// false
/foo.bar/s.test('foo\nbar'); 				// true
```





