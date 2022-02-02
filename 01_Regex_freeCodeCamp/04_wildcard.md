## 使用通配符

### `.` 通配符

`.` 通配符可以匹配任意字符（除了回车与换行）。

```javascript
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // true
huRegex.test(hugStr); // true
```

常用于匹配连接符号，例如 `-` 。

### `^` 脱字符

字符集中也可以使用脱字符 指定不匹配的字符，例如 `/[^aeiou]/` 将匹配所有非元音字母

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

### 通配符组合

通配符可以组合起来使用

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // 匹配任何 HTML 标签
let result = text.match(myRegex); // ["<h1>Winter is coming</h1>"]
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