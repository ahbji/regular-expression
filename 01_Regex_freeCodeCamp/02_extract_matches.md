## 提取匹配项

正则表达式也可以用于从字符串中根据指定的匹配模式规则提取匹配的内容。

```javascript
"Hello, World!".match(/Hello/); //返回 ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); //返回 ["expressions"]
```