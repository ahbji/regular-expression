# 字符集

## 使用字符集

使用`[]`定义字符集(character classes)将单个字符与多种可能性匹配

```javascript
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);  // ["big"]
bagStr.match(bgRegex);  // ['bag']
bugStr.match(bgRegex);  // ["bug"]
bogStr.match(bgRegex);  // null
```

例如，可以使用连字符定义所有小写字母 `/[a-z]/` ，可以可以定义小写字母和数字 `/[a-z0-9]/`

正则表达式将方括号视为特殊的元字符（metacharacter），因此方括号不参与匹配。

## 预定义字符集

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
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
```

### `\b` 匹配单词边界

\b是个零宽度断言，匹配的是个零宽度的不存在的东西。

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\bW.*e\b/g;
let result = sample.match(countNonWhiteSpace); // ["Whitespace"]
```

### `\B` 匹配非单词边界

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\Be\B/g;
let result = sample.match(countNonWhiteSpace);  // ["e", "e"]
```

> 旧版 Regex 使用 \< 和 \> 匹配单词边界，现在只在 grep vim 等命令中支持旧版方式。
> 例如 `grep -Eoc '\<(THE|The|the)\>' file.txt` 统计 THE The the 出现次数。

### `\Q \E` 匹配元字符字面值

```javascript
let sample = ".^$*+|(){}[]\-";
let countNonWhiteSpace = /\Q$\E/;
let result = sample.match(countNonWhiteSpace);  // ["$"]
```