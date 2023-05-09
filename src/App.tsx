import { useEffect } from 'react'
import { Board } from './components/Board'
import { useGameStore } from './store/game.store'

function App () {
  const updateSnakePosition = useGameStore(state => state.updateSnakePosition)
  const [score, highestScore] = useGameStore(state => [state.score, state.highestScore])
  const [snakePosition, snakeBody] = useGameStore(state => [state.snakePosition, state.snakeBody])

  useEffect(() => {
    const intervalId = setInterval(updateSnakePosition, 125)

    return () => {
      clearInterval(intervalId)
    }
  }, [updateSnakePosition])

  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-screen flex justify-center items-center flex-col'>
      <h2 className='text-center text-white mb-2 text-2xl'>Use Arrows to move!</h2>
      <div className='w-full max-w-2xl mx-auto px-4 overflow-hidden'>
        <div className='flex justify-between items-center px-4 py-2 bg-[#040917] text-white mb-1 rounded-md text-2xl'>
          <h2>Score: {score}</h2>
          <h2>Highest Score: {highestScore}</h2>
        </div>
        <Board />
      </div>
      <div className='fixed bg-gray-900 text-white p-4 rounded-md bottom-4 left-4'>
        <p>snakePosition: {JSON.stringify(snakePosition)}</p>
        <p>snakeBody: {JSON.stringify(snakeBody)}</p>
      </div>
    </div>
  )
}

export default App
