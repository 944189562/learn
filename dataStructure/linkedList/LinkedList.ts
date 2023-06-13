// 实现一个链表类 1. node 类，2. 链表类

class Node<T> {
    value: T
    next: Node<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

class LinkedList<T> {
    private head: Node<T> | null = null
    private size: number = 0

    // 追加节点
    append(value: T): void {
        const newNode = new Node<T>(value)

        if (this.size === 0) {
            this.head = newNode
        } else {
            let currNode = this.head
            // 当节点的next为null，判断为尾部，追加节点
            while (currNode?.next) {
                currNode = currNode.next
            }

            currNode!.next = newNode
        }

        this.size += 1
    }

    // 向指定位置插入节点
    insert(position: number, value: T): boolean {
        if (position < 0 && position > this.size) return false

        // 创建一个新节点
        const newNode = new Node<T>(value)
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let previousNode = this.getNode(position - 1)
            newNode.next = previousNode.next
            previousNode.next = newNode
        }

        this.size += 1

        return true
    }

    get(position: number): T | null {
        if (position < 0 || position >= this.size) return null

        let currNode = this.getNode(position)

        return currNode?.value || null
    }

    // 删除指定的节点
    removeAt(position: number): T | null {
        if (position < 0 || position >= this.size) return null

        let currNode = this.head
        if (position === 0) {
            this.head = currNode?.next || null
        } else {
            let previousNode = this.getNode(position - 1)

            previousNode!.next = previousNode?.next?.next || null
        }

        this.size -= 1
        return currNode!.value
    }

    // 删除值为value的元素
    remove(value: T): boolean {
        let index = this.indexOf(value)
        if (index < 0) return false
        this.removeAt(index)
        return true
    }

    // 更新节点
    update(position: number, value: T): boolean {
        if (position < 0 || position >= this.size) return false

        let currNode = this.getNode(position)
        currNode.value = value
        return true
    }

    // 返回索引
    indexOf(value: T): number {
        let currNode = this.head
        let index = 0
        while (index < this.size && currNode) {
            if (currNode.value === value) return index
            currNode = currNode.next
            index++
        }

        return -1
    }

    // 判断链表是否为空
    isEmpty(): boolean {
        return this.size === 0
    }

    get length(): number {
        return this.size
    }

    getNode(position: number): Node<T> {
        let currNode = this.head
        let index = 0
        while (index < position && currNode) {
            currNode = currNode.next
            index++
        }

        return currNode!
    }

    // 遍历链表
    traverse(): string {
        if (this.size === 0) return ''

        let currNode = this.head
        const array: T[] = []
        while (currNode) {
            array.push(currNode.value)
            currNode = currNode.next
        }

        console.log(array.join(' -> '))
        return array.join(' -> ')
    }
}

export default LinkedList