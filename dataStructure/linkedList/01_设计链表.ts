import { ILinkedNode, ILinkedList } from "./ILinkedList";

class LinkedNode<T> implements ILinkedNode<T> {
    value: T;
    next: ILinkedNode<T> | null;

    constructor(value: T, next?: ILinkedNode<T> | null) {
        this.value = value
        this.next = next || null
    }
}

class LinkedList<T> implements ILinkedList<T> {
    head: ILinkedNode<T> | null;
    next: ILinkedNode<T> | null;
    private length: number = 0

    constructor(head?: ILinkedNode<T> | null, next?: ILinkedNode<T> | null) {
        this.head = head || null
        this.next = next || null
    }
    
    peek(): T | undefined {
        return this.head?.value
    }

    append(value: T): void {
        let newNode = new LinkedNode<T>(value)
        let currentNode: ILinkedNode<T> | null = this.head

        if (this.length === 0) {
            this.head = newNode
        } else {
            while (currentNode && currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode!.next = newNode
        }

        this.length += 1
    }

    insert(position: number, value: T): boolean {
        if (position < 0 || position > this.length) return false

        const newNode = new LinkedNode<T>(value)
        if (position === 0 && this.length > 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let preNode: ILinkedNode<T> | null = this.getNode(position - 1)
            newNode.next = preNode!.next
            preNode!.next = newNode
        }

        this.length += 1
        return true
    }

    indexOf(value: T): number {
        let currNode = this.head
        let index: number = 0

        while (currNode) {
            if (currNode.value === value) {
                return index
            }

            currNode = currNode.next
            index += 1
        }

        return -1
    }

    removeAt(position: number): T | null {
        if (position < 0 || position >= this.length || this.length === 0) return null

        let currNode = this.head
        if (position === 0) {
            this.head = currNode?.next || null
        } else {
            let preNode = this.getNode(position - 1)
            currNode = preNode?.next || null
            if (preNode === null) return null
            preNode.next = currNode?.next || null
        }

        this.length -= 1
        return currNode?.value || null
    }
    remove(value: T): boolean {
        const position = this.indexOf(value)

        if (position < 0) return false
        this.removeAt(position)
        return true
    }

    update(position: any, value: T): boolean {
        if (position < 0 || position >= this.length) return false

        let currNode = this.getNode(position)

        if (currNode) {
            currNode.value = value
            return true
        }

        return false
    }

    get(position: number): T | null {
        if (position < 0 || position >= this.length) return null

        let currNode = this.getNode(position)
        if (currNode) return currNode.value
        return null
    }
    get size(): number {
        return this.length
    }
    isEmpty(): boolean {
        return this.length === 0
    }

    // 遍历
    traverse(): T[] {
        if (this.length === 0) return []

        let array: T[] = []

        let currentNode = this.head
        while (currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }

        console.log(array.join(' -> '))
        return array
    }

    private getNode(position: number): ILinkedNode<T> | null {
        if (this.length === 0 || position < 0) return null

        let currNode: ILinkedNode<T> | null = this.head
        let index: number = 0
        while (index < position && currNode) {
            currNode = currNode.next
            index += 1
        }

        return currNode
    }

}

// Test
const linkedList = new LinkedList<string>()
console.log('------------- test append -------------')
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')
linkedList.append('eee')
linkedList.traverse()

console.log('------------- test insert -------------')
linkedList.insert(0, 'nba')
linkedList.insert(1, 'cba')
linkedList.traverse()

console.log('------------- test removeAt -------------')
linkedList.removeAt(2)
linkedList.traverse()
linkedList.removeAt(2)
linkedList.traverse()

console.log('------------- test indexOf -------------')
console.log(linkedList.indexOf('nba'))
console.log(linkedList.indexOf('cba'))
console.log(linkedList.indexOf('ddd'))

console.log('------------- test update -------------')
linkedList.update(2, 'cuba')
linkedList.update(3, 'ncaa')
linkedList.traverse()

console.log('------------- test get -------------')
console.log(linkedList.get(4))

console.log('length: ', linkedList.size)
console.log(linkedList.isEmpty())
// End

export default {}