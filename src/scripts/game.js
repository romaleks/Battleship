import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import '../dom/boardCreator'

const player = new Player('player')
const computer = new Player('computer')
const playerBoard = new Gameboard()
const computerBoard = new Gameboard()

computerBoard.placeShip(3, [3, 3])
computerBoard.placeShip(4, [5, 7], true)

playerBoard.placeShip(3, [3, 3])
playerBoard.placeShip(4, [5, 7], true)

export { playerBoard, computerBoard }
