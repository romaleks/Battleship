class Player {
  constructor(name) {
    this.name = name
  }

  attack(coordinates, board) {
    return board.receiveAttack(coordinates)[1]
  }
}

export default Player
