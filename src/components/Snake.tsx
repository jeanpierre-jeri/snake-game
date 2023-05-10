import { useEffect, useState } from 'react'
import { useGameStore } from '../store/game.store'
import { Direction } from '../types'

export function Snake () {
  const [positionX, positionY] = useGameStore(state => state.snakePosition)
  const snakeBody = useGameStore(state => state.snakeBody)
  const [speedX, speedY] = useGameStore(state => state.speed)
  const gameOver = useGameStore(state => state.gameOver)
  const [direction, setDirection] = useState<Direction>('up')

  useEffect(() => {
    if (gameOver) return
    if (speedX === 0 && speedY === 0) return
    if (speedX === 0 && speedY === 1) setDirection('down')
    if (speedX === 0 && speedY === -1) setDirection('up')
    if (speedX === 1 && speedY === 0) setDirection('right')
    if (speedX === -1 && speedY === 0) setDirection('left')
  }, [speedX, speedY, gameOver])

  const roundedHead = {
    up: 'rounded-t-full',
    down: 'rounded-b-full',
    left: 'rounded-l-full',
    right: 'rounded-r-full'
  }

  const leftEyePosition = {
    up: 'before:left-[20%]',
    down: 'before:right-[20%]',
    left: 'before:bottom-[20%]',
    right: 'before:top-[20%]'
  }

  const rightEyePosition = {
    up: 'after:right-[20%]',
    down: 'after:left-[20%]',
    left: 'after:top-[20%]',
    right: 'after:bottom-[20%]'
  }

  return (
    <>
      <div
        style={{ gridArea: `${positionY} / ${positionX}` }}
        className={`
          relative bg-green-500 z-20 flex justify-center items-center
          ${snakeBody.length > 0 ? roundedHead[direction] : 'rounded-full'}
          before:absolute before:bg-red-500 before:rounded-full before:w-[20%] before:aspect-square ${leftEyePosition[direction]}
          after:absolute after:bg-red-500 after:rounded-full after:w-[20%] after:aspect-square ${rightEyePosition[direction]}
        `}
      />
      {/* Snake Body */}
      {snakeBody.map(([x, y], i) => (
        <div
          key={i}
          className='bg-green-500 rounded-sm z-10'
          style={{ gridArea: `${y} / ${x}` }}
        />
      ))}
    </>
  )
}
