class Ship {
  constructor(length, coordinates, isRotated = false) {
    this.length = length
    this.isRotated = isRotated
    this.coordinates = this.calculateCords(coordinates)
    this.sunk = false
  }

  calculateCords(coordinates) {
    const shipCoordinates = {}
    let static = coordinates[0]
    let changing = coordinates[1]

    for (let i = 0; i < this.length; i++) {
      changing += i

      if (this.isRotated) shipCoordinates[[changing, static]] = false
      else shipCoordinates[[static, changing]] = false
    }

    return shipCoordinates
  }

  hit(hittedCoords) {
    this.coordinates[hittedCoords] = true
  }

  isSunk() {
    let isSunk = true

    for (state of this.coordinates) {
      if (!state) {
        isSunk = false
        break
      }
    }

    return isSunk
  }
}

export default Ship
