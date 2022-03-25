try {
  let arr = [1, 2, 3, 4]
  arr.forEach((item, index) => {
    if (item === 3) {
      throw new Error('LoopTerminates')
    }

    console.log(item)
  })
} catch (error) {
  if (error.message !== 'LoopTerminates') throw error
}
