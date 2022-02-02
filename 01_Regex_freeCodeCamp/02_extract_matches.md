## 提取匹配项

正则表达式也可以用于从字符串中根据指定的匹配模式规则提取匹配的内容。

```javascript
"Hello, World!".match(/Hello/); //返回 ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); //返回 ["expressions"]
```

## 设置全局匹配

通过设置 g 标志位可以在字符串中执行多次匹配，并提取中所有匹配的内容

```javascript
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex); //返回 ["Repeat", "Repeat", "Repeat"]
```