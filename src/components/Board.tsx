import { useEffect, useRef } from 'react'
import { Food } from './Food'
import { Snake } from './Snake'
import { useGameStore } from '../store/game.store'
import debounce from 'just-debounce-it'
import { BOARD_SIZE } from '../config/contants'

export function Board () {
  const boardRef = useRef<HTMLElement>(null)
  const setSpeed = useGameStore(state => state.setSpeed)
  const [speedX, speedY] = useGameStore(state => state.speed)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const key = e.key

    if (key === 'ArrowUp' && speedX !== 1) setSpeed([-1, 0])

    if (key === 'ArrowDown' && speedX !== -1) setSpeed([1, 0])

    if (key === 'ArrowLeft' && speedY !== 1) setSpeed([0, -1])

    if (key === 'ArrowRight' && speedY !== -1) setSpeed([0, 1])
  }

  useEffect(() => {
    const board = boardRef.current

    if (board != null) {
      board.focus()
    }
  }, [])

  const handleKeyDownDebounce = debounce(handleKeyDown, 125)

  return (
    <main ref={boardRef} className='flex justify-center items-center rounded-md overflow-hidden outline-none' tabIndex={0} onKeyDown={handleKeyDownDebounce}>
      <div style={{ gridTemplate: `repeat(${BOARD_SIZE}, 1fr) / repeat(${BOARD_SIZE}, 1fr)` }} className='aspect-square w-full bg-gray-950 grid'>
        {/* <!-- Snake --> */}
        <Snake />

        {/* <!-- Food --> */}
        <Food />
      </div>
    </main>
  )
}
