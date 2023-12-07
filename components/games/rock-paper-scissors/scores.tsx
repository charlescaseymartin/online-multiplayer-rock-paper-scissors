

type RockPaperScissorsScoresType = {
  computerScore: number;
  playerScore: number;
}

export default function RockPaperScissorsScores({ computerScore, playerScore }: RockPaperScissorsScoresType) {
  return (
    <div>
      <span className='flex justify-center'>Scores</span>
      <div className='flex flex-row'>
        <div className='w-full flex flex-row mx-2'>
          <span className='flex-1'>COM</span>
          <span>{computerScore}</span>
        </div>
        <div className='w-full flex flex-row mx-2'>
          <span className='flex-1'>Player 1</span>
          <span>{playerScore}</span>
        </div>
      </div>
    </div>
  )
}