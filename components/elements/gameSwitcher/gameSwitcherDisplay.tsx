import { GameItemType } from './gameSwitcher';
import RockPaperScissors from '@/components/games/rock-paper-scissors/rockPaperScissors';
import TicTacToe from '@/components/games/ticTacToe';
import MatchPairs from '@/components/games/matchPairs';
import WordSearch from '@/components/games/wordSearch';


type GameSwitcherDisplayType = {
  selectedGame: GameItemType;
}


export default function GameSwitcherDisplay({ selectedGame }: GameSwitcherDisplayType) {

  const getGameToDisplay = () => {
    switch (selectedGame.slug) {
      case 'rock-paper-scissors':
        return <RockPaperScissors />;
      case 'tic-tac-toe':
        return <TicTacToe />;
      case 'match-pairs':
        return <MatchPairs />;
      default:
        return <WordSearch />;
    }
  }

  return (
    <div className='rounded-lg p-4 mb-8 bg-gray-300'>
      {getGameToDisplay()}
    </div>
  )
}