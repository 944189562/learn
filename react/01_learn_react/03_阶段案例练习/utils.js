function formatPrice(price) {
  let _price = price
  if (typeof _price !== 'number') {
    _price = Number(price) || 0
  }
  return '￥' + _price.toFixed(2)
}