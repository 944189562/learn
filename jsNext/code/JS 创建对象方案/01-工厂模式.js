function createPerson(name, age, height, address) {
  var p = new Object()
  p.name = name
  p.age = name
  p.height = height
  p.address = address

  p.eating = function() {
    console.log(this.name+' eating!')
  }

  p.running = function() {
    console.log(this.name+' running!')
  }

  return p
}

// 弊端：对象没有具体类型

var p1 = createPerson('zs', 18, 1.75, 'shanghai')
var p2 = createPerson('zs', 18, 1.75, 'shanghai')
var p3 = createPerson('zs', 18, 1.75, 'shanghai')

console.log(p1)