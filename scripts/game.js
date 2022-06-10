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

//function for the timer, using tinloof.com for guidance and help, but modifying the code to suit the game
let time = 10000000;
/**
 * Coverts the time into the format of minutes and seconds
 * @returns time in correct format
 */
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}`;
};

//create an event listener so when the the play button is pressed, the function 'start' is called
let playBtn = document.getElementById('play-btn');
playBtn.addEventListener('click', start);


//set variables
let startTime;
let elapsedTime = 0;
let timerInterval;

/**
 * modifies the innerHTMl of the element with the id of 'timer'
 */
function print(txt) {
    document.getElementById("timer").innerHTML = txt;
};

/**
 * starts the timer once the play button has been pressed
 */
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
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