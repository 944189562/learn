import ArrayQueue from "./ArrayQueue";

function lastRemaning(n: number, m: number): number {
    if (n < 1) return -1
    if (n < 2) return 1
    // 创建一个队列
    const queue = new ArrayQueue<number>()

    // 全部入队
    for (let i = 0; i < n; i++) {
        queue.enqueue(i)
    }

    // 开始循环
    while (queue.size > 1) {
        for (let i = 1; i < m; i++) {
            queue.enqueue(queue.dequeue()!)
        }

        queue.dequeue()
    }

    return queue.dequeue()!
}

// Test
console.log(lastRemaning(5, 3)) // 3
console.log(lastRemaning(10, 17)) // 2
// End