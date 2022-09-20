import { endGame } from '../scripts/game'

const changeBoard = (cell, name, board, ship) => {
  const coordinates = Object.keys(cell)
  const cellElement = document.querySelector(
    '[data-' + name + '] [data-coords="' + coordinates + '"]'
  )

  if (cell[coordinates]) {
    cellElement.classList.add('hitted')

    if (ship.isSunk()) {
      const shipCoords = Object.keys(ship.coordinates)

      for (let i = 0; i < ship.length; i++) {
        const cellElement = document.querySelector(
          '[data-' + name + '] [data-coords="' + shipCoords[i] + '"]'
        )
        cellElement.classList.remove('hitted')
        cellElement.classList.add('sunked')
      }

      if (board.isAllShipsSunk()) endGame(name)
    }
  } else cellElement.classList.add('missed')
}

export default changeBoard
