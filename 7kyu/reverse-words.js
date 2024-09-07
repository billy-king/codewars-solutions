// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My Solution

function reverseWords(str) {
    let array = str.split(' ')
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split('').reverse().join('')
    }
    return array.join(' ')
}