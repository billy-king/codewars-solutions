// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
// Have fun! ;)

// My Solution

function getStrings(city){
    let returnObj = {}
    city.split(' ').join('').split('').forEach(ele => {
        if (returnObj[ele]) {
            returnObj[ele] += '*';
        } else {
            returnObj[ele] = '*';
        }
    });
    return returnObj
}

let counter = {}

let currentReaderBoard = document.querySelector('#currentReaderBoard')
let newReaderBoard = document.querySelector('#newReaderBoard')
let button = document.querySelector('#getLetters')
let placeToPut = document.querySelector('#placeToPut')

button.addEventListener('click', getLetters)

function getLetters() {
    let str1 = currentReaderBoard.value.toUpperCase()
    let str2 = newReaderBoard.value.toUpperCase()
    // get characters from str1 and store in an array -- include punctuation marks
    let str1Arr = str1.split('').filter(item => item !== ' ')
    // get characters from str2 and store in an array -- include punctuation marks
    let str2Arr = str2.split('').filter(item => item !== ' ')
    // double the amount of each character occurrence in both arrays (for both sides of the readerboard)
    str1Arr.forEach(item => str1Arr.push(item))
    str2Arr.forEach(item => str2Arr.push(item))
    // compare the item of what's already on the board (str1). If it's already on the board, remove it from str2
    str1Arr.forEach(item => str2Arr.includes(item) ? str2Arr.splice(str2Arr.indexOf(item),1) : console.log('nothing happened'))
    // sort in alphabetical order
    str2Arr.sort()
    // put items into object as properties, set values to number of occurrences
    str2Arr.forEach(ele => {
            if (counter[ele]) {
                counter[ele] += 1;
            } else {
                counter[ele] = 1;
            }
        });
    
    for (let key in counter) {
        if (counter.hasOwnProperty(key)) {
            value = counter[key];
            placeToPut.innerHTML += `<p>${key}: ${value}</p>`
        }
    }
}
// put the keys of counter into it's own array
let counterKeys = Object.keys(counter)
// gets value from the 4th property in the object
counter[counterKeys[3]]
