import Gameboard from '../gameboard'

let gameboard

beforeEach(() => {
  gameboard = new Gameboard()
  gameboard.placeShip(4, [2, 4])
  gameboard.placeShip(2, [4, 7])
})

test('Returns true if any ship is hitted', () => {
  expect(gameboard.receiveAttack([2, 4])[0]).toBeTruthy()
  expect(gameboard.receiveAttack([3, 4])[0]).toBeTruthy()
  expect(gameboard.receiveAttack([4, 4])[0]).toBeTruthy()
  expect(gameboard.receiveAttack([5, 4])[0]).toBeTruthy()
})

test('Returns false if no ship is hitted', () => {
  expect(gameboard.receiveAttack([1, 4])[0]).toBeFalsy()
  expect(gameboard.receiveAttack([5, 6])[0]).toBeFalsy()
})

test('Returns true if all ships are sunk', () => {
  gameboard.receiveAttack([2, 4])
  gameboard.receiveAttack([3, 4])
  gameboard.receiveAttack([4, 4])
  gameboard.receiveAttack([5, 4])
  gameboard.receiveAttack([4, 7])
  gameboard.receiveAttack([5, 7])
  expect(gameboard.isAllShipsSunk()).toBeTruthy()
})

test('Returns false if not all ships are sunk', () => {
  gameboard.receiveAttack([4, 7])
  gameboard.receiveAttack([5, 7])
  expect(gameboard.isAllShipsSunk()).toBeFalsy()
})
