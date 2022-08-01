const Ship = require("./ship");

it("ship gets constructed with valid values", () => {
  const testShip = Ship(4);
  expect(testShip.length).toBe(4);
  expect(testShip.hitPositions).toEqual([]);
  expect(testShip.sunk).toBe(false);
});

it("has a hit method and marks position as hit", () => {
  const testShip = Ship(4);
  testShip.hit(3);
  expect(testShip.hitPositions).toEqual([2]);
});
