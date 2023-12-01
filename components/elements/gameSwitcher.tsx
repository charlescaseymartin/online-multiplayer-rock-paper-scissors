'use client';

import { useState } from 'react';
import GameSwitcherDisplay from './gameSwitcherDisplay';
import GameSwitcherNav from './gameSwitcherNav';


export default function GameSwitcher() {
  const [currentGameId, setCurrentGameId] = useState('');

  const toggleCurrentGame = (id: string) => {
    // find id amongst other games
    // if id doesnt exist exit
    // if id does exist set the found game id
  }
  
  return (
    <div>
      <GameSwitcherNav />
      <GameSwitcherDisplay />     
    </div>
  )
}