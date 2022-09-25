import { playerBoard } from '../scripts/game'

const dragDrop = () => {
  const boardElement = document.querySelectorAll('.cell.player')
  const shipContainer = document.querySelector('.ships-container')
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
      const isPlaced = playerBoard.placeShip(
        shipElement.getAttribute('data-length'),
        cell.getAttribute('data-coords').split(',')
      )

      if (!isPlaced) {
        cell.classList.remove('hovered')
        return
      }

      shipContainer.removeChild(shipElement)
      cell.classList.remove('hovered')
      cell.classList.add('shipped')

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
}

export default dragDrop
