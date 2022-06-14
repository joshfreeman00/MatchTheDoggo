//Game variables
const cards = document.querySelectorAll('.card-total');
const totalCards = cards.length;
let movesSpan = document.getElementById('moves');
let pairsSpan = document.getElementById('pairs');

const cardFlip = document.querySelectorAll('.card-structure');
let firstSelect, secondSelect;
let isCardFlipped = false;

//score values for the start of a new game
let pairs = 0;
let totalMoves = 0;

/**
 * Shuffles the cards
 */
function shuffleCards() {
    cards.forEach((card) => {
        card.classList.add('card-disabled');
        card.style.order = Math.floor(Math.random() * 12);
    });
};

/**
 * Increment pairs value once a pair has been found
 */
function incrementPairs() {
    pairs++;
    pairsSpan.innerText = pairs;
    if (pairs === totalCards / 2) {
        alert('You win!')
    }
};

/**
 * Increment moves for every card clicked
 */
function incrementMoves() {
    totalMoves++;
    movesSpan.innerText = totalMoves;
};

for (let i = 0; i < cardFlip.length; i++) {
    cardFlip[i].addEventListener('click', flipCard);
};

function flipCard() {
    incrementMoves();
    this.classList.add('is-flipped');
    this.closest('.card-total').classList.add('card-disabled');
    if (!isCardFlipped) {
        isCardFlipped = true;
        firstSelect = this;
        return;
    } else {
        secondSelect = this;
        isCardFlipped = false;
        checkCards();
    }
};

function checkCards() {
    let activeCards = document.querySelectorAll('.card-total:not(.card-disabled)');
    activeCards.forEach(card => {
        console.log(card);
        card.classList.add('card-disabled');
    });
    if (firstSelect.dataset.dog === secondSelect.dataset.dog) {
        disablePair();
        incrementPairs();
    } else {
        unflipCards();
    }
    setTimeout(() => {
        activeCards.forEach(card => {
            card.classList.remove('card-disabled');
        });
    }, 1500);
};

function disablePair() {
    firstSelect.removeEventListener('click', flipCard);
    secondSelect.removeEventListener('click', flipCard);
};

function unflipCards() {
    setTimeout(() => {
        firstSelect.classList.remove('is-flipped');
        secondSelect.classList.remove('is-flipped');
        firstSelect.closest('.card-total').classList.remove('card-disabled');
        secondSelect.closest('.card-total').classList.remove('card-disabled');
    }, 1500);
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

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');

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
    document.getElementById('timer').innerHTML = txt;
};

/**
 * starts the timer once the play button has been pressed
 */
function start() {
    cards.forEach((card) => {
        card.classList.remove('card-disabled');
    });
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
};

//modal scripting

//set variables for the modal
let modal = document.getElementById('htp-modal');
let htpBtn = document.getElementById('htp');
let closeBtn = document.getElementsByClassName('close');

/**
 * Calls the modal to open when the 'How to play' is clicked
 */
$(htpBtn).click(function () {
    modal.style.display = 'block';
})

/**
 * When the user clicks the close button, the modal closes
 */
$(closeBtn).click(function () {
    modal.style.display = 'none';
})

/**
 * restarts the game by refreshing the window
 */
function restartGame() {
    window.location.reload();
};

if (typeof module !== 'undefined') module.exports = {
    restartGame
};