function Ship(length) {
  return {
    length: length,
    hitPositions: [],
    sunk: false,
    hit(position) {
      this.hitPositions.push(position - 1);
      this.isSunk();
    },
    isSunk() {
      if (this.hitPositions.length >= length - 1) {
        this.sunk = true;
      }
    },
  };
}

module.exports = Ship;
