function* test() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

function* objectEntries(obj) {
  let proKeys = Reflect.ownKeys(obj)

  for (let prokey of proKeys) {
    yield [prokey, obj[prokey]]
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}
