let previousGuessTracker = [];
let numberOfGuesses = 1;

$(document).ready(() => {
    const answer = Math.floor(Math.random() * 10); // Randomly generated number and logic to determine if guess is right
    // Allow user to click enter in addition to pressing submit button to provide a guess
    $('#users-guess').on('keypress', (e) => {
        if(e.keyCode === 13) {
            $('#submit').click();
        }
    })

    // Click reset button to reload the game
    $('button').on('click', () => {
        location.reload(true);
    })

    $('#submit').on('click', () => {
        let guess = $('input:text').val(); // selects input elements of type="text"
        let guessNum = parseInt(guess); // converts input (type is string) to a number type

        // Handle guess logic
        if(guessNum === answer) {
            //$('#previous-guesses').hide();
            if (numberOfGuesses === 1) {
                $('#announcement').html(`${guessNum} is correct! You guess it in ${numberOfGuesses} try. \n Press "reset" button to play again.`);
            } else {
                $('#announcement').html(`${guessNum} is correct! You guess it in ${numberOfGuesses} tries. \n Press "reset" button to play again.`);
            }

        } else {
            // Tells the user to guess higher or lower
            console.log(guessNum);
            console.log(guess);
            console.log(typeof guessNum);
            console.log(typeof NaN)
            if (guessNum > answer) {
                $('#announcement').html('Guess Lower');
                numberOfGuesses++;
            }
            else if (guessNum < answer) {
                $('#announcement').html('Guess Higher');
                numberOfGuesses++;
            } else {
                $('#announcement').html('Please enter a number');
                numberOfGuesses++;
            }
        }

        // Tracking number of wrong guesses and displays count
        previousGuessTracker.push(guessNum);
        $('#previous-guesses').html('<b>Previous Guesses:</b> ' + previousGuessTracker.join(', '));

    })
})