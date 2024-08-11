// Implement a function that returns the minimal and maximal value of a list (in this order).

// My Solution

function getMinMax(arr) {
    let minNum = arr.reduce((a, b) => Math.min(a,b))
    let maxNum = arr.reduce((a, b) => Math.max(a,b))
    return [minNum, maxNum]
}