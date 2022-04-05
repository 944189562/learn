console.log(document.cookie)

// 内存cookie
document.cookie = 'name=jz'
document.cookie = 'age=18'

// 设置过期时间 10后cookie过期
document.cookie = 'name=jz;max-age=10'