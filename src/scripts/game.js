import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import '../dom/boardCreator'
import changeBoard from '../dom/boardChanger'

const player = new Player('player')
const computer = new Player('computer')
const playerBoard = new Gameboard()
const computerBoard = new Gameboard()
let hittedShip

computerBoard.placeShip(3, [3, 3])

hittedShip = player.attack([3, 3], computerBoard)
changeBoard(computerBoard.hittedCells.slice(-1)[0], computer.name, hittedShip)
hittedShip = player.attack([4, 3], computerBoard)
changeBoard(computerBoard.hittedCells.slice(-1)[0], computer.name, hittedShip)
hittedShip = player.attack([5, 3], computerBoard)
changeBoard(computerBoard.hittedCells.slice(-1)[0], computer.name, hittedShip)
