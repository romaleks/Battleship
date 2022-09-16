const playerBoard = document.querySelectorAll('.board')[0]
const computerBoard = document.querySelectorAll('.board')[1]

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell', 'player')
  playerBoard.appendChild(cell)
}

for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div')
  cell.classList.add('cell', 'computer')
  computerBoard.appendChild(cell)
}
