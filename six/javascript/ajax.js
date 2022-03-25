let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    } else {
      console.log(xhr.statusText)
    }
  }
}

xhr.onerror = function(e) {
  console.error(xhr.statusText)
}

xhr.open('GET', '/example', true)

xhr.send(null)
