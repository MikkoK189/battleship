const GameBoard = require("./gameboard");
const Ship = require("./ship");

const board = GameBoard();

console.log("Webpack configured?");

board.buildBoard();
board.placeShip(2, 3, Ship(4), false);
