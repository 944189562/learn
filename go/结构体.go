package main

import "fmt"

type Vertex struct {
	// X int
	// Y int
	X, Y int
}

var (
	v1 = Vertex{1, 2}
	v2 = Vertex{X: 1}
	v3 = Vertex{}
	p  = &Vertex{1, 2}
)

func jiegouti() {
	fmt.Println(v1, v2, v3, p)
	v := Vertex{1, 2}
	v.X = 4
	// p := &v
	// p.Y = 3
	fmt.Println(v)
}
