import IList from '../types/IList'

// 队列方法定义
interface IQueue<T> extends IList<T> {
    enqueue(element: T): void
    dequeue(): T | undefined
}

export default IQueue