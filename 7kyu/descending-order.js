// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    return Number( // to convert to number this whole following block of code
        n.toString() // converting to string so we can split to an array
        .split('') // splitting each value into an array
        .sort() // sorting each number from least to greatest
        .reverse() // reversing the sort
        .join('')) // putting the array back into one string
}