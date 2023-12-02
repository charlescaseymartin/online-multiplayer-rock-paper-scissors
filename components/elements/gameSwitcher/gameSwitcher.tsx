'use client';

import { useEffect, useState } from 'react';
import GameSwitcherDisplay from './gameSwitcherDisplay';
import GameSwitcherNav from './gameSwitcherNav';
import GamesData from '@/data/games.json';


export type GameItemType = {
  id: string;
  slug: string;
  name: string;
  icon: string;
}


export default function GameSwitcher() {
  const [currentGame, setCurrentGame] = useState<GameItemType>(GamesData[0]);
  const storedSelectedGameId = 'selected-game-id';

  const toggleCurrentGame = (newId: string) => {
    const foundGame = GamesData.find(({ id }) => id === newId)
    if (foundGame) {
      setCurrentGame(foundGame);
      localStorage.setItem(storedSelectedGameId, foundGame.id);
    }
  }

  useEffect(() => {
    // #### add loading state
    const storedGameId = localStorage.getItem(storedSelectedGameId);
    if (storedGameId) {
      const selectedGame = GamesData.find(({ id }) => id === storedGameId);
      if(selectedGame) setCurrentGame(selectedGame)
    } else {
      localStorage.setItem(storedSelectedGameId, currentGame.id);
    }
  }, [])

  // useEffect(() => console.log({ currentGame: GamesData.find(({ id }) => id === currentGameId) }), [currentGameId])

  return (
    <div>
      <GameSwitcherNav
        games={GamesData}
        onGameSelect={toggleCurrentGame}
        selectedGameId={currentGame.id}
      />
      <GameSwitcherDisplay selectedGame={currentGame} />
    </div>
  )
}