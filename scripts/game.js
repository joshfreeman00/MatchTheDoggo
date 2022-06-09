const cards = document.querySelectorAll(".card");
const totalCards = cards.length;

/**
 * Shuffles the cards
 */
function shuffleCards() {
    cards.forEach((card) => {
        card.style.order = Math.floor(Math.random() * 12);
    });
};

//Once the page has fully loaded it calls the function to shuffle the cards
window.onload = () => {
    shuffleCards();
};

//score values for the start of a new game
let pairs = 0;
let totalMoves = 0;

/**
 * Increment pairs value once a pair has been found
 */
function incrementPairs() {
    pairs++;
    if (pairs === totalCards / 2) {
        alert("You win!")
    }
};





//function to restart the game
function restartGame() {
    window.location.reload();
};

module.exports = {
    restartGame
};