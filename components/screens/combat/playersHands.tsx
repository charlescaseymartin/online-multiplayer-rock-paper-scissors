'use client';

import { useEffect, useState } from 'react';
import { RPSActions } from './types';



type SetPlayerHandType = (value: RPSActions) => void;

type PlayableHandType = {
  src: string;
  alt: string;
  action: RPSActions;
  shake?: boolean;
}

type RockPaperScissorsPlayersHandsType = {
  playerHand: RPSActions;
  computerHand: RPSActions;
}


const playableActionHands: PlayableHandType[] = [
  {
    action: RPSActions.fist,
    src: '/images/games/rps/fist-icon.png',
    alt: 'COM action',
    shake: true,
  },
  {
    action: RPSActions.paper,
    src: '/images/games/rps/paper-icon.png',
    alt: 'COM action',
  },
  {
    action: RPSActions.rock,
    src: '/images/games/rps/rock-icon.png',
    alt: 'COM action',
  },
  {
    action: RPSActions.scissors,
    src: '/images/games/rps/scissors-icon.png',
    alt: 'COM action',
  },
]

export default function RockPaperScissorsPlayersHands({ playerHand, computerHand }: RockPaperScissorsPlayersHandsType) {
  const [playerActionHand, setPlayerActionHand] = useState(playableActionHands[0]);
  const [computerActionHand, setComputerActionHand] = useState(playableActionHands[0]);

  const setCompHand = (handAction: RPSActions) => {
    const playableAction = playableActionHands.find(({ action }) => action === handAction);
    if(playableAction) setComputerActionHand(playableAction);
  }

  const setPlayerHand = (handAction: RPSActions) => {
    const playableAction = playableActionHands.find(({ action }) => action === handAction);
    if(playableAction) setPlayerActionHand(playableAction);
  }

  const displayHands = (hand: RPSActions, toggleHand: SetPlayerHandType) => {
    switch (hand) {
      case RPSActions.rock:
        toggleHand(hand);
        break;

      case RPSActions.paper:
        toggleHand(hand);
        break;

      case RPSActions.scissors:
        toggleHand(hand);
        break;

      default:
        toggleHand(RPSActions.fist);
        break;
    }
  }

  useEffect(() => {
    if (computerHand) {
      displayHands(computerHand, setCompHand);
    }

    if (playerHand) {
      displayHands(playerHand, setPlayerHand);
    }
  }, [playerHand, computerHand])

  return (
    <div id='playersActions' className='flex flex-row justify-between h-80'>
      <div className='flex items-center justify-center w-full mr-3 rounded-lg bg-gray-200'>
        <img src={computerActionHand.src} alt={`${computerActionHand.alt}`} className={`w-14 h-14${computerActionHand.shake ? ' shake' : ''}`} />
      </div>

      <div className='flex items-center justify-center w-full rounded-lg bg-gray-200'>
        <img src={playerActionHand.src} alt={`${playerActionHand.alt}`} className={`w-14 h-14${playerActionHand.shake ? ' shake' : ''}`} />
      </div>
    </div>
  )
}