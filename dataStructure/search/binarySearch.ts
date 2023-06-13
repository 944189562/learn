/*
 * @Author: Justin
 * @Date: 2023-06-09 10:48:33
 * @LastEditors: Justin
 * @LastEditTime: 2023-06-09 13:33:06
 * @Description: 💪
 */
/**
 * @description: 
 * @param {T} array
 * @param {T} searchVal
 * @return {number}
 */

function binaraySearch<T>(array: T[], searchVal: T): number {
    if (!array.length) return -1

    let left: number = 0
    let right: number = array.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (array[mid] === searchVal) {
            return mid
        } else if (array[mid] > searchVal) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}

export default binaraySearch

// Test
// const array = [1,2,4,6,8,12]
// const index = binaraySearch<number>(array, 6)

// console.log(index)
// End