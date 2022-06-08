//Array of dog images, with each image appeaing twice
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
    ["assets/images/dpg7.jpg"]
];

const totalCards = cardArray.length;


//function to restart the game
function restartGame() {
    window.location.reload();
};

module.exports = {
    restartGame
};