import axios from 'axios'
import './js/math'

const message = 'Hello Webpack'

const foo = (bar) => {
  console.log(bar)
}

foo(message)

if (module.hot) {
  module.hot.accept('./js/math.js', () => {
    console.log('math 模块更新')
  })
}

axios.get('/api/moment?offset=8&size=10').then((res) => {
  console.log(res)
})
