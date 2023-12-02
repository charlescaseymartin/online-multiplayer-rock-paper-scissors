import { GameItemType } from './gameSwitcher';

type GameSwitcherNavType = {
  games: GameItemType[];
  selectedGameId: string;
  onGameSelect: (id: string) => void;
}

export default function GameSwitcherNav({ games, selectedGameId, onGameSelect }: GameSwitcherNavType) {
  const selectedGameStyle = (id: string) => id === selectedGameId ? 'border-4 border-orange-600' : 'bg-orange-600';

  return (
    <div className='md:flex md:justify-center'>
      <div className='flex flex-row justify-between my-6 md:w-1/2'>
        {games.map(({ id, icon, name }) => (
          <div key={id} onClick={() => onGameSelect(id)} className={`w-20 h-w-20 p-2 mx-1 rounded-lg ${selectedGameStyle(id)}`}>
            <img src={icon} alt={name} />
          </div>
        ))}
      </div>
    </div>
  )
}