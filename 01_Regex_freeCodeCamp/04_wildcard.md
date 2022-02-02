## 使用通配符

### `.` 通配符

`.` 通配符可以匹配任意字符

```javascript
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // true
huRegex.test(hugStr); // true
```

### `^` 脱字符

字符集中也可以使用脱字符 指定不匹配的字符，例如 `/[^aeiou]/` 将匹配所有非元音字母

### + 符号

使用 `+ 符号`匹配出现一次或多次的字符

```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
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

### 通配符组合

通配符可以组合起来使用

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // 匹配任何 HTML 标签
let result = text.match(myRegex); // ["<h1>Winter is coming</h1>"]
```

### `\w` 符号

JavaScript 中与字母表匹配的最接近的元字符是\w，它匹配所有的字母和数字，包括下划线。

```javascript
let longHand = /[A-Za-z0-9_]+/; // 包含下划线字符 _
let shortHand = /\w+/; // 匹配至少一个字母和数字
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // true
shortHand.test(numbers); // true
longHand.test(varNames); // true
shortHand.test(varNames); // true
```

### '\W' 符号

匹配所有与 `\w` 相反的模式

```javascript
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

### `\d` 匹配所有数字

```javascript
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // 
let result = movieName.match(numRegex).length; // 4
```

### `\D` 匹配所有非数字

```javascript
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length; // 17
```

### `\s` 匹配空白字符

此匹配模式将匹配空格、回车符、制表符、换页符和换行符。 可以认为这类似于元字符 [ \r\t\f\n\v]

```javascript
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

### `\S` 匹配非空白字符

此匹配模式将不匹配空格、回车符、制表符、换页符和换行符。 可以认为这类似于元字符 [^ \r\t\f\n\v]。

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // 修改这一行
let result = sample.match(countNonWhiteSpace);
```

### 检查可选的元素

使用问号 ? 指定可能存在的元素。 这将检查前面的零个或一个元素。 可以将此符号视为前面的元素是可选的。

例如，美式英语和英式英语略有不同，可以使用问号来匹配两种拼写。

```javascript
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```