import changeBoard from '../dom/boardChanger'

const availableCoords = []

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    availableCoords.push([j, i])
  }
}

const computerHitBoard = (board, enemyName) => {
  const randomIndex = Math.floor(Math.random() * (availableCoords.length - 1)) // Picks random index of array
  const randomCoords = availableCoords.splice(randomIndex, 1)
  console.log(availableCoords.length)

  setTimeout(() => {
    const hittedShip = board.receiveAttack(randomCoords)[1]
    changeBoard(board.hittedCells.slice(-1)[0], enemyName, hittedShip)
  }, 500)
}

export default computerHitBoard
