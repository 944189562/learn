package main

import (
	"fmt"
	_ "fmt"
	"unicode/utf8"
)

func main() {
	str := "你好"
	fmt.Println(len(str))
	fmt.Println(utf8.RuneCountInString("你好"))
}
