import { RPSActions } from '.';


type RockPaperScissorsControlsType = {
  onPlayerSelection: (action: RPSActions) => void;
}

export default function RockPaperScissorsControls({ onPlayerSelection }: RockPaperScissorsControlsType) {
  return (
    <div className='md:flex md:justify-center'>
      <div className='flex flex-row justify-between mt-8 mb-4 md:w-1/2'>
        <button onClick={() => onPlayerSelection(RPSActions.rock)} className='w-14 h-14 disabled:bg-slate-800'>
          <img src='/images/games/rps/rock-icon.png' alt='rock icon' />
        </button>
        <button onClick={() => onPlayerSelection(RPSActions.paper)} className='w-14 h-14 disabled:bg-slate-800'>
          <img src='/images/games/rps/paper-icon.png' alt='paper icon' />
        </button>
        <button onClick={() => onPlayerSelection(RPSActions.scissors)} className='w-14 h-14 disabled:bg-slate-800'>
          <img src='/images/games/rps/scissors-icon.png' alt='scissors icon' />
        </button>
      </div>
    </div>
  )
}