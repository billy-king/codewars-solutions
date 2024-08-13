// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution

function findAverage(arr) {
    return arr == 0 ? 0 : (Number(arr.reduce((a,b) => a + b))) / arr.length
}