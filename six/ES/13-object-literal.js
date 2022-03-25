// 对象字面量
const bar = '123'

const obj = {
    foo: 'test',
    // bar: bar,
    bar,
    // method1: function(){
    //     console.log(this)
    // },
    method1() {
        console.log(this)
    },
    [Math.random()]: 123,
    [bar]: 234
}

obj.method1()