export default () => {
    const element = document.createElement('h2')

    element.textContent = 'Hello World'
    element.addEventListener('click', ()=> {
        alert('hellp webpack')
    })

    console.log1()

    return element
}