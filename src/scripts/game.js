import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import '../dom/boardCreator'
import '../dom/dragDrop'

const player = new Player('player')
const computer = new Player('computer')
const playerBoard = new Gameboard()
const computerBoard = new Gameboard()
const endPopup = document.querySelector('.popup-body')
const popupTitle = endPopup.querySelector('.title')

computerBoard.placeShip(3, [3, 3])
computerBoard.placeShip(4, [5, 7], true)
console.log(computerBoard)

const endGame = winnerName => {
  setTimeout(() => {
    endPopup.classList.add('active')
    popupTitle.textContent = winnerName + ' won!'
  }, 500)
}

export { playerBoard, computerBoard, endGame }
