const GameBoard = require("./gameboard");
const Ship = require("./ship");

const testBoard = new GameBoard();
testBoard.buildBoard();

it("board exists", () => {
  expect(testBoard.board.length).toBeGreaterThan(0);
});

it("can place ships on the board", () => {
  const testShip = Ship(4);
  testBoard.placeShip(1, 1, testShip, true);
  for (let i = 1; i <= testShip.length; i++) {
    const testingSquare = testBoard
      .getBoard()
      .find((boardSquare) => boardSquare.coord == `${i} 1`);
    expect(testingSquare.occupied).toBe(true);
  }
});
