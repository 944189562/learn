import {interval} from 'rxjs'

// ----0----1----2----3---|
const subscription = interval(1000).subscribe(data => console.log(`interval 示例：${data}`))

setTimeout(() => subscription.unsubscribe(), 5000)