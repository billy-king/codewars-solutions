// My solutions

function fakeBin(x){
    let returnString = []
    for (let i = 0; i < x.length; i++) {
      x[i] < 5 ? returnString.push(0) : returnString.push(1)
    }
    return returnString.join('')
  }

function fakeBin(x) {
    return x.split('').map(e => e < 5 ? 0 : 1).join('')
}