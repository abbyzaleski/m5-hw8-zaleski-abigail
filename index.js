// Create an Array of at least 3 losing messages

const losses = [
    "Try again next time", 
    "Too bad, so sad", 
    "Not a winner this time"
];

// Create variables to count wins and losses

var wins = 0,
    losses = 0;

function wins() {
    wins += 1;
    document.getElementById('wins').innerHTML = wins;
}

function losses() {
    losses += 1;
    document.getElementById('losses').innerHTML = losses;
}

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

// target all .box elements and attach a click event listener to each one using a loop

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
    })
})

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

public class generate_random_between_two_number {
	public static void main(String[] args) {

		System.out.println(
				((int) (Math.random() * (3 - 1))) + 1);

	}
}

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses