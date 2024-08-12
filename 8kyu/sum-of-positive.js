// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My Solution
function positiveSum(arr) {
    let runningTotal = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        runningTotal += arr[i]
      }
    }
    return runningTotal
}

function positiveSum(arr) {
    let runningTotal = 0
    arr.forEach(e => e > 0 ? runningTotal += e : runningTotal)
    return runningTotal
}