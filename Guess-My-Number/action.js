let previousGuessTracker = [];

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
            $('#announcement').html(`${guessNum} is correct! Press "reset" button to play again.`);

        } else {
            // Tells the user to guess higher or lower
            if (guessNum < answer) {
                $('#announcement').html('Guess Higher');
            } else {
                $('#announcement').html('Guess Lower');
            }
        }

        // Tracking number of wrong guesses and displays count
        previousGuessTracker.push(guessNum);
        $('#previous-guesses').html('Previous Guesses: ' + previousGuessTracker.join(', '));

    })
})