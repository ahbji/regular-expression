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

### + 符号

使用 `+ 符号`匹配某字符出现一次或多次

```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
```

也可以匹配符合规则的字符串出现一次或多次

```javascript
let phoneNumber = "707-827-0000";
let myRegex = /(\d{3}[.-]?){2}\d{4}/;
let result = phoneNumber.match(myRegex);
```

### * 符号

使用 * 符号匹配出现零次或多次的字符

```javascript
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);  // ["goooooooo"]
gPhrase.match(goRegex); // ["g"]
oPhrase.match(goRegex); // null
```

### ？ 符号

使用问号 ? 指定可能存在的元素。 

这将检查前面的零个或一个元素。 

可以将此符号视为前面的元素是可选的。

例如，美式英语和英式英语略有不同，可以使用问号来匹配两种拼写。

```javascript
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```