// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My solution

function longest(s1, s2) {
    let s3 = []
    s1.split('').forEach(e => {
      if (!s3.includes(e)) {
        s3.push(e)
      }
    })
    s2.split('').forEach(e => {
      if (!s3.includes(e)) {
        s3.push(e)
      }
    })
    return s3.sort().join('')
}