// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

// My Solution

// function squareSum(numbers){
//   if (numbers.length !== 0 || numbers === undefined) {
//       return numbers.map(e => e !== undefined ? e *= e : e).reduce((a,b) => a + b)
//   } else {
//     return 0
//   }
// }

function squareSum(numbers) {
    return numbers.length !== 0 || numbers === undefined ? numbers.map(e => e !== undefined ? e *= e : e).reduce((a,b) => a + b) : 0
  }