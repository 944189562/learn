import sequentialSearch from "./sequentialSearch";
import binaraySearch from "./binarySearch";

const array = new Array(1000000).fill(0).map((_, index) => index)

const startTime = performance.now()
// const index = sequentialSearch(array, 500000)
const index = binaraySearch(array, 500000)
const endTime = performance.now()

console.log('目标索引: ', index)
console.log('二分查找耗时：', (endTime - startTime) + 'ms')
