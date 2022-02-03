# 捕获组

## 概述

捕获组 可以用于找到重复的子字符串。

捕获组是通过把要捕获的正则表达式放在括号中来构建的。 

在这个例子里， 目标是捕获一个包含字母数字字符的词，所以捕获组是将 \w+ 放在括号中：/(\w+)/。

## 复用捕获组

分组匹配的子字符串被保存到一个临时的“变量”， 可以使用同一正则表达式和反斜线及捕获组的编号来访问它（例如：\1）。

捕获组按其开头括号的位置自动编号（从左到右），从 1 开始。

下面的示例是匹配被空格隔开的两个相同单词：

```javascript
let repeatStr = "row row row"
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

## 非捕获分组

不需要被复用的捕获组可以使用非捕获分组（non-capturing group）。

非捕获分组捕获道德内容不会被保存到临时变量中。

非捕获分组分组用 `?:` 标识，例如：

```javascript
let repeatStr = "row row row"
let repeatRegex = /(?:\w+) \1 \1/;
repeatRegex.test(repeatStr); // false
repeatStr.match(repeatRegex); // null
```

## 命名分组

```javascript
let repeatStr = "row row row"
let repeatRegex = /(?<z>\w+) \k<z> \k<z>/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```
- '?<z>' 将分组命名为 z
- '\k<z>' 将使用命名分组 z

## 捕获组之间的关系

后面的捕获组依赖前面的捕获组，例如：

```javascript
let str = "their the heir"
let regex = /\d(t|T)h(e|eir)\d/;
let result = str.match(regex); // ["their", "the"]
```