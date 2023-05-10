export function LeftArrowIcon ({ className }: { className?: string }) {
  return (

    <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={`w-6 h-6 ${className ?? ''}`}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
    </svg>
  )
}

export function RightArrowIcon ({ className }: { className?: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={`w-6 h-6 ${className ?? ''}`}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' />
    </svg>
  )
}

export function UpArrowIcon ({ className }: { className?: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={`w-6 h-6 ${className ?? ''}`}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18' />
    </svg>
  )
}

export function DownArrowIcon ({ className }: { className?: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className={`w-6 h-6 ${className ?? ''}`}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3' />
    </svg>
  )
}
