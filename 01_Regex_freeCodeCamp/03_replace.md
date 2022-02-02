# 搜索和替换

## 概述

搜索功能是很有用的。 但是，当搜索同时也执行更改（或替换）匹配文本的操作时，搜索功能就会显得更加强大。

可以在字符串上使用 .replace() 方法来搜索并替换字符串中的文本。 
- 第一个参数首先是想要搜索的正则表达式匹配模式。
- 第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。

例如：
```javascript
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // "The sky is blue."
```

## 使用占位符

可以使用美元符号（$）访问替换字符串中的捕获组。

例如：
```javascript
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // "Camp Code"
```

`/(\w+)\s(\w+)/` 返回 `["Code", "Camp"]`, 然后将 Code 代入 `$1`, Camp 代入 `$2`。

调用 replace 将返回字符串 Camp Code。

