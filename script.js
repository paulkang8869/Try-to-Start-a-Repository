const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]
const array2 = [[1, "2", "3", 2]]


const answer = function (arr) {
    // Creat an unique array for each value
    const setArray = [...new Set(arr)]
    const valueDict = {}
    // Creat an dict for each value
    for (val of setArray) {
        valueDict[val] = []
    }
    for (val of arr) {

        valueDict[val].push(val)
    }

    const cleanArr = []
    for ([key, val] of Object.entries(valueDict)) {
        console.log(`Type of value ${typeof val} ${val}`)
        if (val.length === 1) {
            cleanArr.push(...val)
        }
        else {
            cleanArr.push(val)
        }

    }
    return cleanArr
}

console.log(answer(array))
console.log(answer(array2))