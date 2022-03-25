function flat(arr = [], result = []) {
  arr.forEach(v => {
    if(Array.isArray(v)) {
      result = result.concat(flat(v, []))
    } else {
      result.push(v)
    }
  })
}

function flat2(arr) {
  arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat2(cur) : cur)
  }, [])
}