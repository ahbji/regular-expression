## 惰性匹配

正则表达式默认是贪婪（greedy）匹配，也就是说，匹配尽可能多的字符。

正则表达式 `/t[a-z]*i/` 应用于字符串 "titanic"，会匹配到 "titanic" 中的 "titani"，

正则表达式 `/t[a-z]*i/` 应用于字符串 "titanic"

例如，正则表达式 `/t[a-z]*?i/` 匹配字符串 "titanic" ，返回 `["ti"]`。