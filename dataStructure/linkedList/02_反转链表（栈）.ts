/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head

    const stack: ListNode[] = []

    let currNode: ListNode | null = head
    while (currNode) {
        stack.push(currNode)
        currNode = currNode.next || null
    }

    let headNode = stack.pop()!
    currNode = headNode
    while(stack.length) {
        currNode.next = stack.pop()!
        currNode = currNode?.next
    }

    currNode.next = null

    return headNode
}

let node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

let newHead = reverseList(node1)
while(newHead) {
    console.log(newHead.val)
    newHead = newHead.next
}

export {}