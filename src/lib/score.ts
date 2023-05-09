export function updateHighestScore (score: number) {
  const highestScore = localStorage.getItem('highestScore') ?? '0'

  if (score > Number(highestScore)) {
    localStorage.setItem('highestScore', String(score))
    return score
  }

  return Number(highestScore)
}
