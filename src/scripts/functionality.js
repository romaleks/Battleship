import changeBoard from '../dom/boardChanger'

const hitBoard = (coordinates, board, enemyName) => {
  const hittedShip = board.receiveAttack(coordinates)[1]
  changeBoard(board.hittedCells.slice(-1)[0], enemyName, board, hittedShip)
}

export default hitBoard
