import { create } from 'zustand'
import { generateInitialPosition, generateRandomPosition } from '../lib/position'
import { BOARD_SIZE, INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y } from '../config/contants'
import { Position, Speed } from '../types'
import Swal from 'sweetalert2'
import { updateHighestScore } from '../lib/score'

interface GameStore {
  snakePosition: Position
  snakeBody: Position[]
  foodPosition: Position
  speed: [Speed, Speed]
  score: number
  highestScore: number
  gameOver: boolean
  updateFoodPosition: () => void
  setSpeed: (speed: [Speed, Speed]) => void
  setScore: (score: number) => void
  updateSnakePosition: () => Promise<void>
  resetGame: () => void
}

export const useGameStore = create<GameStore>()((set, get) => ({
  snakePosition: [INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y] as Position,
  foodPosition: generateInitialPosition(),
  snakeBody: [],
  speed: [0, 0],
  score: 0,
  highestScore: Number(localStorage.getItem('highestScore') ?? '0'),
  gameOver: false,
  updateFoodPosition: () => {
    set({ foodPosition: generateRandomPosition([...get().snakeBody, get().snakePosition]) })
  },
  setSpeed: (speed) => set({ speed }),
  setScore: (score) => set({ score }),
  updateSnakePosition: async () => {
    if (get().gameOver) {
      const score = get().score
      set({ highestScore: updateHighestScore(score) })
      get().resetGame()

      void Swal.fire(
        'Game Over',
        `Your score is ${score}`,
        'error'
      )
      return
    }

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
    const didSnakeEatItself = snakeBody.some(([x, y]) => x === positionX && y === positionY)

    if (positionX < 1 || positionX > BOARD_SIZE || positionY < 1 || positionY > BOARD_SIZE || didSnakeEatItself) {
      set({ gameOver: true })
      return
    }

    set({ snakePosition: [positionX, positionY] as Position })

    snakeBody = snakeBody.map((_, i) => {
      if (i === 0) return [snakeX, snakeY]
      return snakeBody[i - 1]
    })

    set({ snakeBody, score: snakeBody.length })
  },
  resetGame: () => {
    set({ snakePosition: [INITIAL_SNAKE_POSITION_X, INITIAL_SNAKE_POSITION_Y] as Position })
    set({ foodPosition: generateInitialPosition() })
    set({ speed: [0, 0] })
    set({ score: 0 })
    set({ snakeBody: [] })
    set({ gameOver: false })
  }
}))
