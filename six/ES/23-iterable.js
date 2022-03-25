// 对象可迭代

const obj = {
    store = ['foo', 'bar', 'baz'],

    [Symbol.iterator]: function() {
        let index = 0
        const self = this
        return {
            next: function () {
                const result = {
                    value: self.store[index],
                    done: index >= self.store.length
                }
                index++
                return result
            }
        }
    }
}  
// 迭代器模式
 