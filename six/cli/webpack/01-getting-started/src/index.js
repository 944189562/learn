import createHeading from './heading.js'
import './hello.md'

const heading = createHeading()

document.body.append(heading)

const ul = document.createElement('ul')
document.body.append(ul)

// fetch('https://api.github.com/users')

fetch('/api/users')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item.login
            ul.append(li)
        })
    })