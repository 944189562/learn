async function foo() {
  console.log('foo exec')
}

const bar = async function () {

}

const baz = async () => {

}

console.log('script start')
foo()
console.log('script end')