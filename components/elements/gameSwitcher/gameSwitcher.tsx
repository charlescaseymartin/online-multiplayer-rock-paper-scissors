'use client';

import { useEffect, useState } from 'react';
import GameSwitcherDisplay from './gameSwitcherDisplay';
import GameSwitcherNav from './gameSwitcherNav';
import GamesData from '@/data/games.json';


export type GameItemType = {
  id: string;
  name: string;
  icon: string;
}


export default function GameSwitcher() {
  const [currentGameId, setCurrentGameId] = useState<string>(GamesData[0].id);
  const selectedGameId = 'selected-game-id';

  const toggleCurrentGame = (newId: string) => {
    const foundGame = GamesData.find(({ id }) => id === newId)
    if (foundGame) {
      setCurrentGameId(foundGame.id);
      localStorage.setItem(selectedGameId, foundGame.id);
    }
  }

  useEffect(() => {
    const storedGameId = localStorage.getItem(selectedGameId);
    if(storedGameId) {
      setCurrentGameId(storedGameId)
    } else {
      localStorage.setItem(selectedGameId, currentGameId);
    }
  }, [])

  // useEffect(() => console.log({ currentGame: GamesData.find(({ id }) => id === currentGameId) }), [currentGameId])

  return (
    <div>
      <GameSwitcherNav games={GamesData} selectGame={toggleCurrentGame} />
      <GameSwitcherDisplay />
    </div>
  )
}