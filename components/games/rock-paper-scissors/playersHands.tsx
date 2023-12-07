'use client';

import { useEffect } from 'react';
import { RPSActions } from '.';

type RockPaperScissorsPlayersHandsType = {
  playerHand: RPSActions | null;
  computerHand: RPSActions | null;
}

export default function RockPaperScissorsPlayersHands({ playerHand, computerHand }: RockPaperScissorsPlayersHandsType) {

  useEffect(() => {
    const container = document.getElementById('playersActions');
    if (container) {
      const computersActions = container.children[0];
      const playersActions = container.children[1];

      if (playerHand) {}

      if (computerHand) {}
    }
  }, [playerHand, computerHand])

  return (
    <div id='playersActions' className='flex flex-row justify-between h-80'>
      <div className='flex items-center justify-center w-full mr-3 rounded-lg bg-gray-200'>
        <img src='/images/games/rps/fist-icon.png' alt='COM action' className='w-14 h-14 shake' />
        <img src='/images/games/rps/paper-icon.png' alt='COM action' className='w-14 h-14 hidden' />
        <img src='/images/games/rps/rock-icon.png' alt='COM action' className='w-14 h-14 hidden' />
        <img src='/images/games/rps/scissors-icon.png' alt='COM action' className='w-14 h-14 hidden' />
      </div>

      <div className='flex items-center justify-center w-full rounded-lg bg-gray-200'>
        <img src='/images/games/rps/fist-icon.png' alt='Player action' className='w-14 h-14 shake' />
        <img src='/images/games/rps/paper-icon.png' alt='Player action' className='w-14 h-14 hidden' />
        <img src='/images/games/rps/rock-icon.png' alt='Player action' className='w-14 h-14 hidden' />
        <img src='/images/games/rps/scissors-icon.png' alt='Player action' className='w-14 h-14 hidden' />
      </div>
    </div>
  )
}