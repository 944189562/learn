function once(fn) {
	let done = false
	return function () {
		if (!done) {
			done = true
			fn.apply(this, arguments)
		}
	}
}

let pay = once(function(money){
	console.log(`支付：${money}元`)
})

pay(5)
pay(5)