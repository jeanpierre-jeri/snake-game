import { useGameStore } from '../store/game.store'

export function Snake () {
  const [positionX, positionY] = useGameStore(state => state.snakePosition)
  const snakeBody = useGameStore(state => state.snakeBody)

  return (
    <>
      <div style={{ gridArea: `${positionX} / ${positionY}` }} className='bg-green-500 rounded-[.5px] z-10 relative flex justify-center items-center after:absolute after:bg-red-500 after:w-1 after:rounded-full after:aspect-square' />
      {/* Snake Body */}
      {snakeBody.map(([x, y], i) => (
        <div key={i} className='bg-green-500 rounded-[.5px] z-10' style={{ gridArea: `${x} / ${y}` }} />
      ))}
    </>
  )
}
