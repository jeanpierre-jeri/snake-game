import { useEffect, useRef } from 'react'
import { Food } from './Food'
import { Snake } from './Snake'
import { useGameStore } from '../store/game.store'
import debounce from 'just-debounce-it'
import { BOARD_SIZE } from '../config/contants'
import { MobileArrows } from './MobileArrows'
import { Direction } from '../types'

const directionMap: Record<string, Direction> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right'
}

export function Board () {
  const boardRef = useRef<HTMLElement>(null)
  const setSpeed = useGameStore(state => state.setSpeed)
  const [speedX, speedY] = useGameStore(state => state.speed)
  const gameOver = useGameStore(state => state.gameOver)

  const handleMovement = (direction: Direction) => {
    if (gameOver) return

    if (direction === 'up' && speedY !== 1) setSpeed([0, -1])

    if (direction === 'down' && speedY !== -1) setSpeed([0, 1])

    if (direction === 'left' && speedX !== 1) setSpeed([-1, 0])

    if (direction === 'right' && speedX !== -1) setSpeed([1, 0])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (gameOver) return
    const key = e.key
    const direction = directionMap[key]

    if (direction != null) handleMovement(direction)
  }

  const handleClick = (direction: Direction) => {
    handleMovement(direction)
  }

  useEffect(() => {
    const board = boardRef.current

    if (board != null) {
      board.focus()
    }
  }, [])

  const handleKeyDownDebounce = debounce(handleKeyDown, 125)

  return (
    <main ref={boardRef} className='flex flex-col justify-center items-center rounded-md overflow-hidden outline-none' tabIndex={0} onKeyDown={handleKeyDownDebounce}>
      <div style={{ gridTemplate: `repeat(${BOARD_SIZE}, 1fr) / repeat(${BOARD_SIZE}, 1fr)` }} className='aspect-square w-full bg-gray-950 grid'>
        {/* <!-- Snake --> */}
        <Snake />

        {/* <!-- Food --> */}
        <Food />
      </div>
      <MobileArrows handleClick={handleClick} />
    </main>
  )
}
