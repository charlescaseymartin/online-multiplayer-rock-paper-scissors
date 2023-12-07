import { RPSResults } from '.';


type RockPaperScissorsMenuType = {
  isOpen: boolean;
  gameResults: RPSResults | null;
  onPlayClick: () => void;
}

export default function RockPaperScissorsMenu({ isOpen, gameResults, onPlayClick }: RockPaperScissorsMenuType) {
  const results = gameResults;
  return (
    <div className={`absolute z-10 p-4 w-full h-full rounded-lg bg-purple-700 ${!isOpen ? 'hidden' : ''} ${gameResults ? 'fade-in' : ''}`}>
      {results && <div>{results}</div>}
      <p>Would you like to play{results ? ' again' : ''}?</p>
      <button onClick={onPlayClick}>play!</button>
    </div>
  )
}