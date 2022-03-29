var names = ['nba', 'cba','abc']

var [item1, item2, item3, item4 = 'test'] = names
console.log(item1, item2, item3, item4)

var [,,iteml] = names
console.log(iteml)

var [itemx, ...newNames] = names
console.log(itemx, newNames)
