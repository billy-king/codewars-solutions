// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution

function XO(str) {
    let exes = 0
    let ohs = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            exes++
        } else if (str[i].toLowerCase() === 'o') {
            ohs++
        }
    }
    return exes === ohs ? true : false
}