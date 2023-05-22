package main

import "fmt"

func qiePian() {
	// 	primes := [6]int{2, 3, 4, 5, 6, 7}

	// 	var s []int = primes[1:4]

	// 	fmt.Println(s)

	// 	names := [4]string{
	// 		"Justin",
	// 		"abraham",
	// 		"James",
	// 		"Curry",
	// 	}

	// 	fmt.Println(names)

	// 	a := names[0:2]
	// 	b := names[1:3]
	// 	fmt.Println(a, b)

	// 	b[0] = "Tom"
	// 	fmt.Println(a, b)
	// 	fmt.Println(names)

	// 切片文法
	q := []int{2, 3, 5, 7, 11, 13}
	// q = q[1:4]
	// q = q[:2]
	q = q[1:]
	fmt.Println(q)

	r := []bool{true, false}
	fmt.Println(r)

	s := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
	}
	fmt.Println(s)
}
