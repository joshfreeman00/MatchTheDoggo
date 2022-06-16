/* jshint esversion: 11*/


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

//Code is taken from Stack Overflow, referenced in the Credits of the README.md
describe("function restarts game by reloading the page", () => {
    const original = window.location;

    const restartGame = () => {
        window.location.reload(true);
    };

    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                reload: jest.fn()
            },
        });
    });

    afterAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: original
        });
    });

    it('mocks reload function', () => {
        expect(jest.isMockFunction(window.location.reload)).toBe(true);
    });

    it('calls reload function', () => {
        restartGame(); // as defined above..
        expect(window.location.reload).toHaveBeenCalled();
    });
});