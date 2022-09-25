import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import createBoards from '../dom/boardCreator'
import { generateAvailableCoords } from './computerLogic'
import '../dom/dragDrop'
import './functionality'

const player = new Player('player')
const computer = new Player('computer')
let playerBoard = new Gameboard()
let computerBoard = new Gameboard()
const endPopup = document.querySelector('.popup-body')
const popupTitle = endPopup.querySelector('.title')

const startGame = () => {
  const shipsElement = document.querySelector('.ships')
  const shipsContainer = shipsElement.querySelector('.ships-container')
  const computerBoardElement = document.querySelector('[data-computer]')
  shipsElement.style.display = 'block'
  computerBoardElement.style.pointerEvents = 'none'
  shipsContainer.innerHTML = `
    <div data-length="5" class="ship" draggable="true"></div>
    <div data-length="4" class="ship" draggable="true"></div>
    <div data-length="3" class="ship" draggable="true"></div>
    <div data-length="3" class="ship" draggable="true"></div>
    <div data-length="2" class="ship" draggable="true"></div>
  `

  playerBoard = new Gameboard()
  computerBoard = new Gameboard()
  createBoards()
  generateAvailableCoords()
  computerBoard.placeShip(2, [8, 2])
  computerBoard.placeShip(3, [3, 1])
  computerBoard.placeShip(3, [4, 3], true)
  computerBoard.placeShip(4, [2, 7])
  computerBoard.placeShip(5, [8, 5], true)
}

const endGame = winnerName => {
  console.log(playerBoard)
  setTimeout(() => {
    endPopup.classList.add('active')
    popupTitle.textContent = winnerName + ' won!'
  }, 500)
}

export { playerBoard, computerBoard, endGame, startGame }
