import hitBoard from '../scripts/functionality'
import { computerHitBoard } from '../scripts/computerLogic'
import { computerBoard, playerBoard } from '../scripts/game'
import dragDrop from './dragDrop'

const playerBoardElement = document.querySelectorAll('.board')[0]
const computerBoardElement = document.querySelectorAll('.board')[1]

const createBoards = () => {
  playerBoardElement.innerHTML = ''
  computerBoardElement.innerHTML = ''

  for (let i = 1; i <= 10; i++) {
    // Creates player's board
    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell', 'player')
      cell.setAttribute('data-coords', [j, i])
      playerBoardElement.appendChild(cell)
    }
  }

  for (let i = 1; i <= 10; i++) {
    // Creates computer's board
    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell', 'computer')
      cell.setAttribute('data-coords', [j, i])
      computerBoardElement.appendChild(cell)
      cell.addEventListener(
        'click',
        () => {
          hitBoard([j, i], computerBoard, 'computer')
          computerHitBoard(playerBoard, 'player')
        },
        { once: true }
      )
    }
  }

  dragDrop()
}

export default createBoards
