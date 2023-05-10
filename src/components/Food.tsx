import { useGameStore } from '../store/game.store'

export function Food () {
  const [positionX, positionY] = useGameStore(state => state.foodPosition)

  return (
    <div style={{ gridArea: `${positionY} / ${positionX}` }} className='bg-red-500 rounded-full' />
  )
}
