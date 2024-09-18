// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// My Solution

class Ghost {
    constructor() {
      this.color = this.randomColor()
    }
    

    randomColor() {
        let colorOptions = ["white", "yellow", "purple", "red"]
        let randomNumber = Math.floor(Math.random() * colorOptions.length)
        return colorOptions[randomNumber]
    }
}