import Player from '../factories/Player'
import Gameboard from '../factories/Gameboard'
import '../dom/boardCreator'
import changeBoard from '../dom/boardChanger'

const player = new Player('player')
const computer = new Player('computer')
const playerBoard = new Gameboard()
const computerBoard = new Gameboard()

computerBoard.receiveAttack([1, 5])
changeBoard(computerBoard.hittedCells.slice(-1)[0])
