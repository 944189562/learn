import IList from "../types/IList"

interface ILinkedNode<T> {
    value: T
    next: ILinkedNode<T> | null
}

interface ILinkedList<T> extends IList<T> {
    head: ILinkedNode<T> | null
    next: ILinkedNode<T> | null

    // 追加到尾部
    append(value: T): void
    // 指定位置插入
    insert(position: number, value: T): boolean
    // 删除指定位置节点
    removeAt(position: number): T | null
    // 删除节点
    remove(value: T): boolean
    // 更新指定位置节点
    update(position: number, value: T): boolean
    // 获取指定位置节点
    get(position: number): T | null
    // 返回节点位置
    indexOf(value: T): number
}

export {
    ILinkedNode,
    ILinkedList
}