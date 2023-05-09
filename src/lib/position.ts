import { BOARD_SIZE, INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y } from '../config/contants'
import { BoardSizeRange, Position } from '../types'

export const generateRandomPosition = (takenPositions: Position[]): Position => {
  const randomPositionX = Math.floor(Math.random() * BOARD_SIZE) + 1 as BoardSizeRange
  const randomPositionY = Math.floor(Math.random() * BOARD_SIZE) + 1 as BoardSizeRange
  console.log(randomPositionX, randomPositionY, takenPositions)
  const isPositionTaken = takenPositions.some(([x, y]) => x === randomPositionX || y === randomPositionY)
  if (isPositionTaken) {
    return generateRandomPosition(takenPositions)
  }

  return [randomPositionX, randomPositionY] as Position
}

export const generateInitialPosition = (): Position => {
  const randomPositionX = Math.floor(Math.random() * BOARD_SIZE) + 1 as BoardSizeRange
  const randomPositionY = Math.floor(Math.random() * BOARD_SIZE) + 1 as BoardSizeRange

  if (randomPositionX === INITIAL_SNAKE_POSITION_X || randomPositionY === INITIAL_SNAKE_POSITION_Y) {
    return generateInitialPosition()
  }

  return [randomPositionX, randomPositionY] as Position
}
