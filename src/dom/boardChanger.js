const changeBoard = (cell, name, ship) => {
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
    }
  } else cellElement.classList.add('missed')
}

export default changeBoard
