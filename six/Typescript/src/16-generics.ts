// 泛型

export { }

function createNumberArray(length: number, value: number): number[] {
    const arr = Array<number>(length).fill(value) // Array<number> 泛型
    return arr
}

const arrN = createNumberArray(2, 1)

function createArray<T>(length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value) // Array<T> 泛型 T调用时传入
    return arr
}

const res = createArray<string>(3, 'bar')