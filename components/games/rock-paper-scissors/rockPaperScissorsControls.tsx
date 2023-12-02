

export default function RockPaperScissorsControls() {
  return (
    <div className='flex flex-row justify-between mt-8 mb-4'>
      <span className='w-14 h-14'>
        <img src='/images/games/rock-paper-scissors/rock-icon.png' alt='rock icon' />
      </span>
      <span className='w-14 h-14'>
        <img src='/images/games/rock-paper-scissors/paper-icon.png' alt='paper icon' />
      </span>
      <span className='w-14 h-14'>
        <img src='/images/games/rock-paper-scissors/scissors-icon.png' alt='scissors icon' />
      </span>
    </div>
  )
}