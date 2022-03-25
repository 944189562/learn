// 接口 interface 约束对象的结构

export { }

interface Post {
    title: string
    content: string
    subtitle?: string // 可选
    readonly sumary: string // 只读
}

function printPost(post: Post) {
    console.log(post.title, post.content)
}

// 可选、只读、动态成员

interface Cache {
    [prop: string]: string // 动态
}

const cache: Cache = {}
