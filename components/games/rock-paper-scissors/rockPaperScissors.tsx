import RockPaperScissorsControls from "./rockPaperScissorsControls";

export default function RockPaperScissors() {
  
  // game logic
  
  return (
    <div>
      <div>score</div>
      <div className='flex flex-row'>
        <div className='flex-1'>CPU</div>
        <div className='flex-1'>Player 1</div>
      </div>
      <div className='flex flex-row justify-between h-80'>
        <div className='flex items-center justify-center w-full mr-3 rounded-lg bg-gray-200'>
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="CPU's hand" className='w-14 h-14 shake' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="CPU's hand" className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="CPU's hand" className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="CPU's hand" className='w-14 h-14 hidden' />
        </div>

        <div className='flex items-center justify-center w-full rounded-lg bg-gray-200'>
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="Player's hand" className='w-14 h-14 shake' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="Player's hand" className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="Player's hand" className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt="Player's hand" className='w-14 h-14 hidden' />
        </div>
      </div>
      <RockPaperScissorsControls />
    </div>
  );
}