import Ship from './Ship'

class Gameboard {
  constructor() {
    this.ships = []
    this.filledCells = []
    this.hittedCells = []
  }

  placeShip(length, coordinates, isRotated = false) {
    const ship = new Ship(length, coordinates, isRotated)

    if (+coordinates[0] + +length > 11) return false
    if (!this.canPlaceShip(ship.coordinates)) return false

    this.ships.push(ship)

    for (const coords of Object.keys(ship.coordinates)) {
      this.filledCells.push(coords)
    }

    return true
  }

  canPlaceShip(coordinates) {
    for (const coords of Object.keys(coordinates)) {
      if (this.filledCells.indexOf(coords) != -1) return false
    }

    return true
  }

  receiveAttack(coordinates) {
    if (!this.checkCell) return

    let hittedShip

    const isHit = this.ships.some(ship => {
      for (let cords of Object.keys(ship.coordinates)) {
        if (cords == coordinates) {
          hittedShip = ship
          return true
        }
      }

      return false
    })

    if (isHit) {
      hittedShip.hit(coordinates)
      if (hittedShip.isSunk()) hittedShip.sunk = true
    }

    this.hittedCells.push({ [coordinates]: isHit })
    return [isHit, hittedShip]
  }

  checkCell(coordinates) {
    return this.hittedCells.includes(coordinates)
  }

  isAllShipsSunk() {
    return this.ships.every(ship => ship.sunk)
  }
}

export default Gameboard
