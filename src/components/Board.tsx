import { useEffect, useRef } from 'react'
import { Food } from './Food'
import { Snake } from './Snake'
import { useGameStore } from '../store/game.store'

export function Board () {
  const boardRef = useRef<HTMLElement>(null)
  const setSpeed = useGameStore(state => state.setSpeed)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const key = e.key

    if (key === 'ArrowUp') setSpeed([-1, 0])

    if (key === 'ArrowDown') setSpeed([1, 0])

    if (key === 'ArrowLeft') setSpeed([0, -1])

    if (key === 'ArrowRight') setSpeed([0, 1])
  }

  useEffect(() => {
    const board = boardRef.current

    if (board != null) {
      board.focus()
    }
  }, [])

  return (
    <main ref={boardRef} className='flex justify-center items-center rounded-md overflow-hidden outline-none' tabIndex={0} onKeyDown={handleKeyDown}>
      <div style={{ gridTemplate: 'repeat(30, 1fr) / repeat(30, 1fr)' }} className='aspect-square w-full bg-gray-950 grid'>
        {/* <!-- Snake --> */}
        <Snake />

        {/* <!-- Food --> */}
        <Food />
      </div>
    </main>
  )
}
