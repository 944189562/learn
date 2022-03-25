function isInViewPort(element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth
  const viewHeight = window.innerHeight || document.documentElement.clientHeight

  const { top, right, bottom, left } = element.getBoundingClientRect()

  return (top > 0) & (left > 0) & (bottom <= viewHeight) & (right <= viewWidth)
}