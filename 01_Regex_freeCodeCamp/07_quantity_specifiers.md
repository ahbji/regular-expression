## 数量说明符

### 概述

可以使用数量说明符（quantity specifiers）指定匹配模式的上下限。 数量说明符与花括号（`{ `和` }`）一起使用。 

可以在花括号之间放两个数字，这两个数字代表匹配模式的上限和下限。

例如，要匹配出现 3 到 5 次字母 a 的在字符串 ah，正则表达式应为 `/a{3,5}h/`。

```javascript
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

### 指定匹配的下限

在第一个数字后面跟一个逗号即可。

例如，要匹配至少出现 3 次字母 a 的字符串 hah，正则表达式应该是 `/ha{3,}h/`。

```javascript
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

### 指定匹配的确切数量

要指定一定数量的匹配模式，只需在大括号之间放置一个数字。

例如，要只匹配字母 a 出现 3 次的单词hah，正则表达式应为`/ha{3}h/`。

```javascript
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```