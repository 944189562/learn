/*
 * @Author: Justin
 * @Date: 2023-06-09 10:41:23
 * @LastEditors: Justin
 * @LastEditTime: 2023-06-09 13:34:16
 * @Description: 💪
 */
/*
 * @Author: Justin
 * @Date: 2023-06-09 10:41:23
 * @LastEditors: Justin
 * @LastEditTime: 2023-06-09 13:24:14
 * @Description: 💪
 */

/**
 * @description: 
 * @param {T} array
 * @param {T} searchVal
 * @return {number}
 */

function sequentialSearch<T>(array: T[], searchVal: T): number {
    if (!array.length) return -1

    let index = 0
    for (let value of array) {
        if (value === searchVal) {
            return index
        }
        index += 1
    }

    return -1
}

export default sequentialSearch


// Test
// const array = [1,2,4,6,8,12]
// const index = sequentialSearch<number>(array, 6)

// console.log(index)
// End