import Ship from './Ship'

class Gameboard {
  constructor() {
    this.ships = []
    this.hittedCells = []
  }

  placeShip(length, coordinates) {
    const ship = new Ship(length, coordinates)
    this.ships.push(ship)
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
