class Player {
  constructor(name) {
    this.name = name
  }

  attack(coordinates, board) {
    board.recieveAttach(coordinates)
  }
}
