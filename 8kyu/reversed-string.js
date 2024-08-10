// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution

function solution(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++) newStr = str[i] + newStr;
    return newStr
  }