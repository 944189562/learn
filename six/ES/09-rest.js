// rest 收集参数
// function func() {
//     console.log(arguments)
// }

function func(first, ...args) {
    console.log(args)
}

func(1, 2, 3, 4)