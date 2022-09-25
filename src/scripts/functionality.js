import changeBoard from '../dom/boardChanger'
import { startGame } from './game'

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

const activateRestartButton = () => {
  const popup = document.querySelector('.popup-body')
  popup.classList.remove('active')
  startGame()
}

const startButton = document.querySelector('#start-btn')
const restartButton = document.querySelector('#restart-btn')
startButton.addEventListener('click', activeStartButton)
restartButton.addEventListener('click', activateRestartButton)

export default hitBoard
