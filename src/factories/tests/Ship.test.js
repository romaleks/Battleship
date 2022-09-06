import Ship from '../Ship'

let ship

beforeEach(() => {
  ship = new Ship(4, [2, 4])
})

test('Tests if all data recorded correctly', () => {
  expect(ship).toEqual({
    length: 4,
    isRotated: false,
    coordinates: {
      '2,4': false,
      '2,5': false,
      '2,6': false,
      '2,7': false,
    },
    sunk: false,
  })
})

test('Tests if all data recorded correctly if the ship is rotated', () => {
  ship = new Ship(4, [2, 4], true)

  expect(ship).toEqual({
    length: 4,
    isRotated: true,
    coordinates: {
      '2,4': false,
      '3,4': false,
      '4,4': false,
      '5,4': false,
    },
    sunk: false,
  })
})

test('Hits the ship', () => {
  ship.hit([2, 4])
  expect(ship.coordinates['2,4']).toBeTruthy()
})

test('Sunks the ship', () => {
  ship.hit([2, 4])
  ship.hit([2, 5])
  ship.hit([2, 6])
  ship.hit([2, 7])
  expect(ship.isSunk()).toBeTruthy()
})
