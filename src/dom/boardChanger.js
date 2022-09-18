const changeBoard = cell => {
  const coordinates = Object.keys(cell)
  const cellElement = document.querySelector('[data-coords="' + coordinates + '"]')

  if (cell[coordinates]) cellElement.classList.add('hitted')
  else cellElement.classList.add('missed')
}

export default changeBoard
