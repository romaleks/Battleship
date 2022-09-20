import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import '../dom/boardCreator'

const player = new Player('player')
const computer = new Player('computer')
const playerBoard = new Gameboard()
const computerBoard = new Gameboard()
const endPopup = document.querySelector('.popup-body')
const popupTitle = endPopup.querySelector('.title')

computerBoard.placeShip(3, [3, 3])
computerBoard.placeShip(4, [5, 7], true)

playerBoard.placeShip(3, [3, 3])
playerBoard.placeShip(4, [2, 7], true)

const endGame = winnerName => {
  endPopup.classList.add('active')
  popupTitle.textContent = winnerName[0].toUpperCase() + winnerName.slice(1) + ' won!'
}

export { playerBoard, computerBoard, endGame }
