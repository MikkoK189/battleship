const GameBoard = require("./gameboard");
const Ship = require("./ship");

const testBoard = GameBoard();
testBoard.buildBoard();

it("board exists", () => {
  expect(testBoard.board);
});

it("can place ships on the board", () => {
  const testShip = Ship(4);
  testBoard.placeShip(1, 1, testShip, false);
  for (let i = 1; i <= testShip.length; i++) {
    const testingSquare = testBoard.board.find(
      (boardSquare) => boardSquare.coord == `${i} 1`
    );
    expect(testingSquare.occupied).toBe(true);
  }
});