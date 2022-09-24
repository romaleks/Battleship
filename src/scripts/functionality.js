import changeBoard from '../dom/boardChanger'

const hitBoard = (coordinates, board, enemyName) => {
  const hittedShip = board.receiveAttack(coordinates)[1]
  changeBoard(board.hittedCells.slice(-1)[0], enemyName, board, hittedShip)
}

const activeStartButton = () => {
  const shipContainer = document.querySelector('.ships-container')

  if (shipContainer.children.length > 0) return

  const shipsElement = document.querySelector('.ships')
  const computerBoard = document.querySelector('.board.disabled')
  shipsElement.style.display = 'none'
  computerBoard.style.pointerEvents = 'all'
}

const startButton = document.querySelector('.button')
startButton.addEventListener('click', activeStartButton)

export default hitBoard
