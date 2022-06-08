/**
 * @jest-environment jsdom
 */

const {
    restartGame
} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("game.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

//I fully acknowledge and understand that, in a real-world scenario, an extensive set of Jest tests would be more comprehensive.