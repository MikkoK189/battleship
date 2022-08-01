function Ship(length) {
  return {
    length: length,
    hitPositions: [],
    sunk: false,
    hit(position) {
      this.hitPositions.push(position - 1);
    },
  };
}

module.exports = Ship;
