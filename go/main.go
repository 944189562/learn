package main

import (
	"fmt"
	"math"
	"math/cmplx"
	// "runtime"
)

//var c, python, java = true, false, "no"

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}

	return lim
}

func Sqrt(x float64) float64 {
	z := 1.0
	for i := 0; i < 10; i++ {
		z -= (z*z - x) / (2 * x)
	}
	return z
}

func main() {
	// var i, j = 0, "1"
	// html, css, javascript := "html5", "css3", "ES2019"
	// fmt.Println(i, j, c, python, java, html, css, javascript)
	// fmt.Println("Hello Go~")

	// fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
	// fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
	// fmt.Printf("Type: %T value: %v\n", z, z)

	// sum := 0
	// for i := 0; i <= 100; i++ {
	// 	sum = i + sum
	// }

	// fmt.Println("sum is ", sum)

	// fmt.Println(pow(3, 2, 20))
	// fmt.Println(pow(3, 3, 20))

	// fmt.Println(Sqrt(2))
	// fmt.Println(math.Sqrt(2))

	// fmt.Print("Go runs on ")
	// switch os := runtime.GOOS; os {
	// case "darwin":
	// 	fmt.Println("OS X.")
	// case "linux":
	// 	fmt.Println("Linux.")
	// default:
	// 	fmt.Printf("%s.\n", os)
	// }

	// t := time.Now()
	// switch {
	// case t.Hour() < 12:
	// 	fmt.Println("Good morning~")
	// case t.Hour() < 17:
	// 	fmt.Println("Good afternoon~")
	// default:
	// 	fmt.Println("Good evening~")
	// }

	// defer fmt.Println("defer line")

	// for i := 0; i < 10; i++ {
	// 	defer fmt.Println(i)
	// }

	// fmt.Println("When's Saturday?")

	// today := time.Now().Weekday()
	// switch time.Saturday {
	// case today + 0:
	// 	fmt.Println("Today.")
	// case today + 1:
	// 	fmt.Println("Tomorrow.")
	// case today + 2:
	// 	fmt.Println("In two days.")
	// default:
	// 	fmt.Println("Too far away.")
	// }

	// test()

	// jiegouti()

	// i := 42
	// f := float64(i)
	// u := uint(f)
	// fmt.Println(i, f, u)
	// fmt.Printf("%v type is %T\n", i, i)
	// fmt.Printf("%v type is %T\n", f, f)
	// fmt.Printf("%v type is %T\n", u, u)

	// _array()
	qiePian()
}
