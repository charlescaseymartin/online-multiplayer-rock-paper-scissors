import { RPSActions } from "./rockPaperScissors";


type RockPaperScissorsControlsType = {
  onPlayerSelection: (action: RPSActions) => void;
}

export default function RockPaperScissorsControls({ onPlayerSelection }: RockPaperScissorsControlsType) {
  return (
    <div className='md:flex md:justify-center'>
      <div className='flex flex-row justify-between mt-8 mb-4 md:w-1/2'>
        <span onClick={() => onPlayerSelection(RPSActions.rock)} className='w-14 h-14'>
          <img src='/images/games/rock-paper-scissors/rock-icon.png' alt='rock icon' />
        </span>
        <span onClick={() => onPlayerSelection(RPSActions.paper)} className='w-14 h-14'>
          <img src='/images/games/rock-paper-scissors/paper-icon.png' alt='paper icon' />
        </span>
        <span onClick={() => onPlayerSelection(RPSActions.scissors)} className='w-14 h-14'>
          <img src='/images/games/rock-paper-scissors/scissors-icon.png' alt='scissors icon' />
        </span>
      </div>
    </div>
  )
}