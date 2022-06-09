//Array of dog images, with each image appearing twice
const cardArray = [
    ["assets/images/dog1.jpg"],
    ["assets/images/dog1.jpg"],
    ["assets/images/dog3.jpg"],
    ["assets/images/dog3.jpg"],
    ["assets/images/dog4.jpg"],
    ["assets/images/dog4.jpg"],
    ["assets/images/dog5.jpg"],
    ["assets/images/dog5.jpg"],
    ["assets/images/dog6.jpg"],
    ["assets/images/dog6.jpg"],
    ["assets/images/dog7.jpg"],
    ["assets/images/dog7.jpg"]
];

const totalCards = cardArray.length;

//shuffle cards at the start of each game, code from Stack Overflow called 'durstenfeld shuffle'
function shuffleCards(array) {
    for (let i = cardArray.length - 1; i > -1; --i) {
        let j = Math.floor(Math.random() * (i + 1)); //Generates a random number

        //read card at current i value
        let cardNum = cardArray[i][0];
        let cardImage = cardArray[i][1];

        //swap the values with a random element
        cardArray[i][1] = cardArray[j][1];
        cardArray[i][0] = cardArray[j][0];
    };
};







//function to restart the game
function restartGame() {
    window.location.reload();
};

module.exports = {
    restartGame
};