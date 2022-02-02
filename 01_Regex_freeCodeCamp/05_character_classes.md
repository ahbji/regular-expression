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