import { playerBoard } from '../scripts/game'

const boardElement = document.querySelectorAll('.cell.player')
const shipList = document.querySelectorAll('.ship')
let shipElement

shipList.forEach(ship => ship.addEventListener('mousedown', () => (shipElement = ship)))

boardElement.forEach(cell => {
  cell.addEventListener('dragenter', () => cell.classList.add('hovered'))
  cell.addEventListener('dragleave', () => cell.classList.remove('hovered'))
  cell.addEventListener('dragover', ev => {
    ev.preventDefault()
  })
  cell.addEventListener('drop', () => {
    shipElement.style.display = 'none'
    cell.classList.remove('hovered')
    cell.classList.add('shipped')

    playerBoard.placeShip(
      shipElement.getAttribute('data-length'),
      cell.getAttribute('data-coords').split(',')
    )
    const ship = playerBoard.ships.slice(-1)[0]
    const shipCoords = Object.keys(ship.coordinates)

    for (let i = 0; i < ship.length; i++) {
      const cellElement = document.querySelector(
        '[data-player] [data-coords="' + shipCoords[i] + '"]'
      )
      cellElement.classList.add('shipped')
    }
  })
})