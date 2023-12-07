'use client';

import { useEffect } from 'react';
import { RPSActions } from '.';

type RockPaperScissorsPlayersHandsType = {
  playerHand: RPSActions | null;
  computerHand: RPSActions | null;
}

export default function RockPaperScissorsPlayersHands({ playerHand, computerHand }: RockPaperScissorsPlayersHandsType) {
  const convertCollectionToList = (collection: HTMLCollection): Element[] => {
    const results: Element[] = [];
    for (let idx = 0; idx < collection.length; idx++) {
      results.push(collection[idx]);
    }
    return results;
  }

  const displayPlayerHand = (selectedHand: RPSActions, listOfImages: Element[]) => {
    // const currentImage = listOfImages.find(({ classList }) => !classList.contains('hidden'));
    // if (currentImage) currentImage.classList.add('hidden');
    let newImage = listOfImages[0];

    listOfImages.forEach((imageElement) => {
      const srcAttribute = imageElement.getAttribute('src');
      if (srcAttribute && srcAttribute.includes(selectedHand)) {
        newImage = imageElement;
        return;
      }
    });

    if (newImage) newImage.classList.remove('hidden');
  }

  const determinePlayersAction = (hand: RPSActions, listOfImages: Element[]) => {
    switch (hand) {
      case RPSActions.rock:
        displayPlayerHand(hand, listOfImages);
        break;

      case RPSActions.paper:
        displayPlayerHand(hand, listOfImages);
        break;

      case RPSActions.scissors:
        displayPlayerHand(hand, listOfImages);
        break;
    }
  }

  useEffect(() => {
    const container = document.getElementById('playersActions');
    if (container) {
      const computersActions = container.children[0];
      const playersActions = container.children[1];

      if (computerHand && computersActions) {
        const computersActionList = convertCollectionToList(computersActions.children);
        determinePlayersAction(computerHand, computersActionList);
      }

      if (playerHand && playersActions) {
        const playersActionList = convertCollectionToList(playersActions.children);
        determinePlayersAction(playerHand, playersActionList);
      }
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