class Ship {
  constructor(length, coordinates, isRotated) {
    this.length = length
    this.isRotated = isRotated
    this.coordinates = this.calculateCords(coordinates)
    this.sunk = false
  }

  calculateCords(coordinates) {
    const shipCoordinates = {}
    let x = coordinates[0]
    let y = coordinates[1]

    for (let i = 0; i < this.length; i++) {
      if (this.isRotated) shipCoordinates[[x, y + i]] = false
      else shipCoordinates[[x + i, y]] = false
    }

    return shipCoordinates
  }

  hit(hittedCoords) {
    this.coordinates[hittedCoords] = true
  }

  isSunk() {
    let isSunk = true

    for (let state of Object.values(this.coordinates)) {
      if (!state) {
        isSunk = false
        break
      }
    }

    return isSunk
  }
}

export default Ship
