const board = [];

function GameBoard() {
  return {
    getBoard() {
      return board;
    },
    buildBoard() {
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          board.push({
            coord: `${x} ${y}`,
            occupied: false,
          });
        }
      }
    },
    placeShip(x, y, ship, flipped) {
      let coordOccupied = false;
      let coord = findCoordinate(x, y);

      for (let i = 1; i <= ship.length; i++) {
        if (!coord.occupied) {
          const newX = flipped ? x + i : x;
          const newY = flipped ? y : y + i;
          coord = findCoordinate(newX, newY);
        } else {
          coordOccupied = true;
          return;
        }
      }

      if (coordOccupied) {
        console.error("Can't place ship on top of another one");
        return;
      } else {
        coord = findCoordinate(x, y);
        for (let i = 1; i <= ship.length; i++) {
          setOccupied(coord, ship);
          const newX = flipped ? x + i : x;
          const newY = flipped ? y : y + i;
          coord = findCoordinate(newX, newY);
        }
      }
    },
  };
}

function findCoordinate(x, y) {
  const coordToReturn = board.find(
    (boardSquare) => boardSquare.coord == `${x} ${y}`
  );
  return coordToReturn;
}

function setOccupied(coord, ship) {
  coord.occupied = true;
  coord.ship = ship;
}

module.exports = GameBoard;
