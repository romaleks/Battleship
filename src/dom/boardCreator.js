const playerBoard = document.querySelectorAll('.board')[0]
const computerBoard = document.querySelectorAll('.board')[1]

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('div')
    cell.classList.add('cell', 'player')
    cell.setAttribute('data-coords', [i, j])
    playerBoard.appendChild(cell)
  }
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('div')
    cell.classList.add('cell', 'computer')
    cell.setAttribute('data-coords', [j, i])
    computerBoard.appendChild(cell)
  }
}
