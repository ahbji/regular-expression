# 在 sed 中使用 Regex 为文本加 html 标签

sed 是 Unix 流编辑器，支持用正则表达式转换文本，例如：

```shell
$ echo Hello | sed s/Hello/Goodbye/
Goodbye
```

上述命令运行过程如下：
- 管道将 echo 输出转换为 sed 的输入
- sed 的 s 命令将单词 Hello 转换为 Goodbye，并作为结果输出

设文本文件 rime.txt 内容如下

```text
THE RIME OF THE ANCYENT MARINERE, IN SEVEN PARTS.

ARGUMENT.

How a Ship having passed the Line was driven by Storms to the cold
Country towards the South Pole; and how from thence she made her course
to the tropical Latitude of the Great Pacific Ocean; and of the strange
things that befell; and in what manner the Ancyent Marinere came back to
his own Country.

I.

1      It is an ancyent Marinere,
2        And he stoppeth one of three:
3      "By thy long grey beard and thy glittering eye
4        "Now wherefore stoppest me?
```

使用下面命令可以将文件的第一行加上 `<h1>` 标签

```shell
$ sed -n 's/^/<h1>/; s/$/<\/h1>/p; q' rime.txt
<h1>THE RIME OF THE ANCYENT MARINERE, IN SEVEN PARTS.</h1>
```
命令执行过程如下：
- s/^/<h1>/ 在行的开头（^）添加 <h1> 标签
- ; 用于分隔命令
- s/$/<\/h1>/ 在行尾添加（$） <\/h1> 标签
- p 命令将结果输出到标准输出，这样 sed 只会处理第一行。

还可以用另一个命令实现上述功能：

```shell
$ sed -ne 's/^/<h1>/' -e 's/$/<\/h1>/p' -e 'q' rime.txt
```
- -e 选项用于分别引导各个命令

可以以 -e 选项分割的命令写在可执行文件里

```text
#! /usr/bin/sed
s/^/<h1>/
s/$/<\/h1>/
q
```

然后在命令行中时通过可执行文件为文本加上 `<h1>` 标签
```shell
$ sed -f h1.sed rime.txt
```

