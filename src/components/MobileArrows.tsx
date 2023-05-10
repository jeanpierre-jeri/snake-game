import { Direction } from '../types'
import { DownArrowIcon, LeftArrowIcon, RightArrowIcon, UpArrowIcon } from './Icons'

export function MobileArrows ({ handleClick }: { handleClick: (direction: Direction) => void }) {
  return (
    <div className='w-full md:hidden'>
      <div className='flex w-full bg-gray-950 text-white flex-shrink-0 gap-1 rounded-b-md overflow-hidden'>

        <button onClick={() => handleClick('left')} className='flex-grow flex justify-center p-5 bg-[#040917]'>
          <LeftArrowIcon />
        </button>

        <button onClick={() => handleClick('up')} className='flex-grow flex justify-center p-5 bg-[#040917]'>
          <UpArrowIcon />
        </button>

        <button onClick={() => handleClick('right')} className='flex-grow flex justify-center p-5 bg-[#040917]'>
          <RightArrowIcon />
        </button>

        <button onClick={() => handleClick('down')} className='flex-grow flex justify-center p-5 bg-[#040917]'>
          <DownArrowIcon />
        </button>
      </div>
    </div>
  )
}
