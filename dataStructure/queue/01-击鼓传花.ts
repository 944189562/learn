import ArrayQueue from "./ArrayQueue";

function HotPotato(names: string[], num: number): number {
    if (!names.length) return -1

    // 1. 创建一个队列
    let queue = new ArrayQueue<string>()

    // 2. 全部入队
    for (let name of names) {
        queue.enqueue(name)
    }

    // 3. 击鼓传花：1 ~ num -1 出队再入队，num 直接出队，当队列length为1，循环结束
    // 当队列length为1，循环结束
    while (queue.size > 1) {
        // 1 ~ num -1 出队再入队
        for (let i = 1; i < num; i++) {
            const name = queue.dequeue()
            if(name) queue.enqueue(name)
        }

        // num 直接出队
        queue.dequeue()
    }

    return names.indexOf(queue.dequeue()!)
}

// Test
const names = ['kobe', 'james', 'curry', 'justin', 'maggie', 'green']
const num = 3
console.log(HotPotato(names, num))
// End