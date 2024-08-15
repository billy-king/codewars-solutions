// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My solution

function accum(s) {
    let accumString = ''
      for (let i = 0 ; i <s.length; i++) {
      let repeatStr = s[i].toLowerCase().repeat(i + 1)
      let capitalRepeatStr = repeatStr[0].toUpperCase() + repeatStr.slice(1)
      accumString == 0 ? accumString = capitalRepeatStr : accumString += `-${capitalRepeatStr}`
    }
    return accumString
  }