/* jshint esversion: 11*/

/**
 * @jest-environment jsdom
 */

const {
    restartGame,
    pairs,
    totalMoves
} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("game.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

//Code is used from Stack Overflow, referenced in the Credits of the README.md
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

//test to see if the score values are set to 0 on page load
describe("Score values are set to 0 on page load", () => {
    beforeAll(() => {
        let pairs = 3;
        let totalMoves = 7;
        restartGame();
    });

    test("Pairs value is set to 0", () => {
        expect(pairs).toEqual(0);
    });

    test("Moves value is set to 0", () => {
        expect(totalMoves).toEqual(0);
    });
});