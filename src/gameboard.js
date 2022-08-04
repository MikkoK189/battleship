function GameBoard() {
  return {
    board: [],
    buildBoard() {
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          this.board.push({
            coord: `${x} ${y}`,
            occupied: false,
          });
        }
      }
    },
    placeShip(x, y, ship, flipped) {
      let coordOccupied = false;
      let coord = this.board.find(
        (boardSquare) => boardSquare.coord == `${x} ${y}`
      );

      if (!coord.occupied) {
        for (let i = 1; i <= ship.length; i++) {
          if (!flipped) {
            if (!coord.occupied) {
              coord = this.board.find(
                (boardSquare) => boardSquare.coord == `${x + i} ${y}`
              );
            } else {
              coordOccupied = true;
              return;
            }
          } else {
            if (!coord.occupied) {
              coord = this.board.find(
                (boardSquare) => boardSquare.coord == `${x} ${y + i}`
              );
            } else {
              coordOccupied = true;
              return;
            }
          }
        }
      }

      if (coordOccupied) {
        console.error("Can't place ship on top of another one");
        return;
      } else {
        coord = this.board.find(
          (boardSquare) => boardSquare.coord == `${x} ${y}`
        );
        for (let i = 1; i <= ship.length; i++) {
          if (!flipped) {
            coord.occupied = true;
            coord.ship = ship;
            coord = this.board.find(
              (boardSquare) => boardSquare.coord == `${x + i} ${y}`
            );
          } else {
            coord.occupied = true;
            coord.ship = ship;
            coord = this.board.find(
              (boardSquare) => boardSquare.coord == `${x} ${y + i}`
            );
          }
        }
      }
    },
  };
}

module.exports = GameBoard;
