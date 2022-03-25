// 枚举 (Enum)

export { } // 确保跟其他示例无成员冲突 scope

// const Status = {
//     fail: 0,
//     success: 1,
//     other: 2
// }

const enum Status {
    fail = 0,
    success = 1,
    other = 2
}

const foo = {
    title: 'title',
    content: 'content',
    status: Status.fail
}