import { create } from 'zustand'
import { generateRandomPosition } from '../lib/position'
import { INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y } from '../config/contants'
import { Position, Speed } from '../types'

interface GameStore {
  snakePosition: Position
  snakeBody: Position[]
  foodPosition: Position
  speed: [Speed, Speed]
  score: number
  updateFoodPosition: () => void
  setSpeed: (speed: [Speed, Speed]) => void
  setScore: (score: number) => void
  startGame: () => void
  resetGame: () => void
}

export const useGameStore = create<GameStore>()((set, get) => ({
  snakePosition: [INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y],
  foodPosition: [generateRandomPosition(), generateRandomPosition()],
  snakeBody: [],
  speed: [0, 0],
  score: 0,
  updateFoodPosition: () => {
    const randomNumber = Math.floor(Math.random() * 30) + 1
    set({ foodPosition: [randomNumber, randomNumber] as Position })
  },
  setSpeed: (speed) => set({ speed }),
  setScore: (score) => set({ score }),
  startGame: () => {
    const [snakeX, snakeY] = get().snakePosition
    const [foodX, foodY] = get().foodPosition
    const [speedX, speedY] = get().speed

    let snakeBody = [...get().snakeBody]

    if (snakeX === foodX && snakeY === foodY) {
      get().updateFoodPosition()

      snakeBody.push([foodX, foodY])
    }

    const positionX = snakeX + speedX
    const positionY = snakeY + speedY

    if (positionX < 1 || positionX > 30 || positionY < 1 || positionY > 30) {
      // window.alert('Game Over')
      // get().resetGame()
      return
    }

    set({ snakePosition: [positionX, positionY] as Position })

    snakeBody = snakeBody.map((_, i) => {
      const x = positionX - (speedX * (i + 1))
      const y = positionY - (speedY * (i + 1))
      return [x, y] as Position
    })

    set({ snakeBody })
  },
  resetGame: () => {
    set({ snakePosition: [INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y] })
    set({ foodPosition: [generateRandomPosition(), generateRandomPosition()] })
    set({ speed: [0, 0] })
    set({ score: 0 })
  }
}))
