import { playerBoard } from '../scripts/game'

const boardElement = document.querySelectorAll('.cell.player')
const ship = document.querySelector('.ship')

boardElement.forEach(cell => {
  cell.addEventListener('dragenter', () => cell.classList.add('hovered'))
  cell.addEventListener('dragleave', () => cell.classList.remove('hovered'))
  cell.addEventListener('dragover', ev => {
    ev.preventDefault()
  })
  cell.addEventListener('drop', () => {
    cell.classList.remove('hovered')
    cell.classList.add('shipped')
    playerBoard.placeShip(1, cell.getAttribute('data-coords').split(','))
    console.log(playerBoard)
    console.log(cell.getAttribute('data-coords').split(','))

    for (let i = 0; i < ship.length; i++) {
      const cellElement = document.querySelector(
        '[data-player] [data-coords="' + shipCoords[i] + '"]'
      )
      cellElement.classList.remove('hitted')
      cellElement.classList.add('sunked')
    }
  })
})
