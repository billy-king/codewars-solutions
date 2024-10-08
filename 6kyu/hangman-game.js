// Hangman
// Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other tries to guess it by suggesting letters, within a certain number of guesses.

// Everytime the player misses a word, a part of the sketch is drawn:

// Hangman

// If the player finds the word before being hung he wins. He has 6 chances to miss before being hung.

// Your task
// You have to implement a class Hangman that receives a word in it's constructor and has the method guess, that will be used by the player to try to guess the word.

// Your method guess will receive a letter as parameter and has this return behaviour:

// if the player found the word: You found the word! ({word})
// if the player got hung: You got hung! The word was {word}.
// if the game still on: {game state}
// if the game has ended already: The game has ended.
// important: if the player guesses a letter that was already guessed, you should ignore it and return the {game state}

// {game state}
// The {game state} is the word to be found with all letters separated by white space. The letters that weren't found yet will be replaced with _ and, if the player had missed one or more letters, we will keep this record adding # to the output followed by a string with all missed letters in order of occurence.

// Ex. If the player is trying to guess the word codewars and attempts with the letters d,w,u,a,c,g,s, respectively, he would guess the letters d,w,a,c,s right and miss the letters u,g. The game state at this point should look like:

// c _ d _ w a _ s # ug

// #Example:

// let hangman = new Hangman('wars');

// hangman.guess('w')
// w _ _ _
// hangman.guess('u')
// w _ _ _ # u
// hangman.guess('s')
// w _ _ s # u
// hangman.guess('a')
// w a _ s # a
// hangman.guess('r')
// # You found the word! (wars)
// hangman.guess('g')
// # The game has ended.

// My Solution

class Hangman {
    constructor(word) {
        this.word = word;
        this.chances = 6;
        this.guesses = [];
        this.gameState = word.split('').map(_ => '_').join(' ');
    }
    setGameState(index) {
        this.gameState = this.word.split('').map((_,i) => index === i ? this.word[i] : '_').join(' ');
    }
    guess(letter) {
        if (this.chances === 0) {
            return 'You got hung!';
        } else if (this.guesses.includes(letter)) {
            return 'The game has ended.';
        } else if (this.word.includes(letter)) {
            this.setGameState(this.word.indexOf(letter))
            this.guesses.push(letter)
            return this.gameState
        }
        // RIGHT NOW IT SWAPS THE LETTER IN THE SOLVED GAMESTATE
        // needs to find the letter in the word
        // needs to put the letter in the correct spot
        // if letter has been guessed, you ignore it and return the game state
    }
}