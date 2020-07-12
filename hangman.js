/*
CHALLENGE 1:
1. Create a constructor function for the hangman game
2. Setup two attributes. One for the word itself. Another for the number of guesses allowed
3. Create two instances of it and print both to the console
*/

/*
CHALLENGE 2:
1. Set up the word instance property as an array of lower case letters
2. Set up another instance property to store guessed letters
3. Create a method that gives you the word puzzle back
No guesses? -> ***
 Guessed "C", "b" and "t"? -> c*t
*/

/*
CHALLENGE 3:
Create a method for making a guess
1. Should accept a character for guessing
2. Should add unique guesses to list of guesses
3. Should decrement the guesses left if a unique guess isn't a match
4. Add a key press event to trigger the guesses
*/

// SOLUTION

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split(''),
        this.remainingGuesses = remainingGuesses,
        this.guessedLetters = []
    }
    getPuzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }
    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if(isUnique) {
            this.guessedLetters.push(guess);
        }
        if( isUnique && isBadGuess ) {
            this.guessedLetters--;
        }
    }
}

const game1 = new Hangman('Dog', 3);
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
    console.log(game1.remainingGuesses);
});

// const game2 = new Hangman('Musico', 5);
// console.log(game2.getPuzzle());

/*CHALLENGE 4:
1. Display the puzzle to the browser instead of the console.
2. Display the guesses left to the browser instead of the console
3. Separate the Hangman definition from the rest of the app (use app.js)
*/
