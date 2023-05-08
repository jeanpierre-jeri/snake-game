import { INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y } from '../config/contants'
import { PositionRange } from '../types'

export const generateRandomPosition = (): PositionRange => {
  const randomPosition = Math.floor(Math.random() * 30) + 1 as PositionRange
  if (randomPosition === INITIAL_SNAKE_POSITION_Y || randomPosition === INITIAL_SNAKE_POSITION_X) {
    return generateRandomPosition()
  }

  return randomPosition
}
