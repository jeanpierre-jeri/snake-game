import { useGameStore } from '../store/game.store'

export function Snake () {
  const [positionX, positionY] = useGameStore(state => state.snakePosition)
  const snakeBody = useGameStore(state => state.snakeBody)
  const [speedX, speedY] = useGameStore(state => state.speed)

  const direction = speedX === 0 ? (speedY === 1 ? 'right' : 'left') : (speedX === 1 ? 'bottom' : 'up')
  const roundedHead = {
    up: 'rounded-t-full',
    bottom: 'rounded-b-full',
    left: 'rounded-l-full',
    right: 'rounded-r-full'
  }

  const leftEyePosition = {
    up: 'before:left-[3px]',
    bottom: 'before:right-[3px]',
    left: 'before:bottom-[3px]',
    right: 'before:top-[3px]'
  }

  const rightEyePosition = {
    up: 'after:right-[3px]',
    bottom: 'after:left-[3px]',
    left: 'after:top-[3px]',
    right: 'after:bottom-[3px]'
  }

  return (
    <>
      <div
        style={{ gridArea: `${positionX} / ${positionY}` }}
        className={`
          relative bg-green-500 z-20 flex justify-center items-center
          ${snakeBody.length > 0 ? roundedHead[direction] : 'rounded-full'}
          before:absolute before:bg-red-500 before:rounded-full before:w-[3px] before:aspect-square ${leftEyePosition[direction]}
          after:absolute after:bg-red-500 after:rounded-full after:w-[3px] after:aspect-square ${rightEyePosition[direction]}
        `}
      />
      {/* Snake Body */}
      {snakeBody.map(([x, y], i) => (
        <div
          key={i}
          className='bg-green-500 rounded-sm z-10'
          style={{ gridArea: `${x} / ${y}` }}
        />
      ))}
    </>
  )
}
