import IList from '../types/IList'

// 定义栈结构
interface IStack<T> extends IList<T> {
    push(element: T): void
    pop(): T | undefined
}

export default IStack