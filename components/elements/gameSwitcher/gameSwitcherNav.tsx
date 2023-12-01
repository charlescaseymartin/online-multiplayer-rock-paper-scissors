import { GameItemType } from './gameSwitcher';

type GameSwitcherNavType = {
  games: GameItemType[];
  selectGame: (id: string) => void;
}

export default function GameSwitcherNav({ games, selectGame }: GameSwitcherNavType) {
  return (
    <div className='md:flex md:justify-center'>
      <div className='flex flex-row justify-between my-6 md:w-1/2'>
        {games.map(({ id, icon, name }) => (
          <div key={id} onClick={() => selectGame(id)} className='w-14 h-14 p-1 mx-1 rounded-lg bg-orange-600'>
            <img src={icon} alt={name} />
          </div>
        ))}
      </div>
    </div>
  )
}