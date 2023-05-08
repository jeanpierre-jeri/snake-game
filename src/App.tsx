import { useEffect } from 'react'
import { Board } from './components/Board'
import { useGameStore } from './store/game.store'

function App () {
  const startGame = useGameStore(state => state.startGame)
  useEffect(() => {
    setInterval(startGame, 1000)
  }, [startGame])

  return (
    <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black min-h-screen flex justify-center items-center flex-col'>
      <div className='w-full max-w-sm mx-auto px-4 overflow-hidden'>
        <div className='flex justify-between items-center px-4 py-2 bg-[#040917] text-white mb-1 rounded-md'>
          <h2>Score: 15</h2>
          <h2>High Score: 30</h2>
        </div>
        <Board />
      </div>
    </div>
  )
}

export default App
