(function () {
  require.config({
    baseUrl: '',
    paths: {
      foo: './src/foo',
      bar: './src/bar'
    }
  })

  require(['foo', 'bar'], function (foo, bar) {
    console.log(foo)
    console.log(bar)
  })
})()