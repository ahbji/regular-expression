# 捕获组

## 概述

捕获组 可以用于找到重复的子字符串。

捕获组是通过把要捕获的正则表达式放在括号中来构建的。 

在这个例子里， 目标是捕获一个包含字母数字字符的词，所以捕获组是将 \w+ 放在括号中：/(\w+)/。

分组匹配的子字符串被保存到一个临时的“变量”， 可以使用同一正则表达式和反斜线及捕获组的编号来访问它（例如：\1）。

捕获组按其开头括号的位置自动编号（从左到右），从 1 开始。

下面的示例是匹配被空格隔开的两个相同单词：

```javascript
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```