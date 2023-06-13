import IQueue from "./IQueue";

// 实现队列结构
class ArrayQueue<T> implements IQueue<T> {
    // 数组实现队列
    private data: T[] = []

    enqueue(element: T): void {
        this.data.push(element)
    }
    dequeue(): T | undefined {
        return this.data.shift()
    }
    peek(): T | undefined {
        return this.data[0]
    }
    isEmpty(): boolean {
        return this.data.length !== 0
    }
    get size(): number {
        return this.data.length
    }

}

export default ArrayQueue