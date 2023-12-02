import { useEffect, useState } from 'react';
import RockPaperScissorsControls from './rockPaperScissorsControls';

enum RPSUsers {
  player = 'player',
  computer = 'computer',
}

export enum RPSActions {
  rock = 'rock',
  paper = 'paper',
  scissors = 'scissors',
}

export default function RockPaperScissors() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computersAction, setComputersAction] = useState<RPSActions>();
  const [playersAction, setPlayersAction] = useState<RPSActions>();

  const actionSelection = (user: RPSUsers, action: RPSActions): void => {
    const validAction = Object.values(RPSActions).find((playableAction) => playableAction === action);
    if (validAction) {
      if (user === RPSUsers.player) {
        setPlayersAction(validAction);
      } else {
        setComputersAction(validAction);
      }
    }
  }

  const onPlayerSelect = (action: RPSActions) => actionSelection(RPSUsers.player, action);

  const determineRoundWinner = (playerChoice: RPSActions, computerChoice: RPSActions) => {
    switch (playerChoice) {
      case RPSActions.rock:
        if (computerChoice === RPSActions.paper) setComputerScore(computerScore + 1);
        if (computerChoice === RPSActions.scissors) setPlayerScore(playerScore + 1);
        break;
      case RPSActions.paper:
        if (computerChoice === RPSActions.scissors) setComputerScore(computerScore + 1);
        if (computerChoice === RPSActions.rock) setPlayerScore(playerScore + 1);
        break;
      default:
        if (computerChoice === RPSActions.rock) setComputerScore(computerScore + 1);
        if (computerChoice === RPSActions.paper) setPlayerScore(playerScore + 1);
        break;
    }
  }

  useEffect(() => {
    if (playersAction) {
      const actions = Object.values(RPSActions);
      const computerSelection = actions[Math.floor(Math.random() * actions.length)];
      actionSelection(RPSUsers.computer, computerSelection);
    }
  }, [playersAction])

  useEffect(() => {
    if (playersAction && computersAction) {
      determineRoundWinner(playersAction, computersAction);
      setPlayersAction(undefined);
      setComputersAction(undefined);
    }
    console.log({ playersAction, computersAction })
  }, [playersAction, computersAction])

  return (
    <div>
      <div>
        <span>Scores</span>
        <div className='flex flex-row'>
          <div className='w-full flex flex-row mx-2'>
            <span className='flex-1'>COM</span>
            <span>{computerScore}</span>
          </div>
          <div className='w-full flex flex-row mx-2'>
            <span className='flex-1'>Player 1</span>
            <span>{playerScore}</span>
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between h-80'>
        <div className='flex items-center justify-center w-full mr-3 rounded-lg bg-gray-200'>
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='COM action' className='w-14 h-14 shake' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='COM action' className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='COM action' className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='COM action' className='w-14 h-14 hidden' />
        </div>

        <div className='flex items-center justify-center w-full rounded-lg bg-gray-200'>
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='Player action' className='w-14 h-14 shake' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='Player action' className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='Player action' className='w-14 h-14 hidden' />
          <img src='/images/games/rock-paper-scissors/fist-icon.png' alt='Player action' className='w-14 h-14 hidden' />
        </div>
      </div>

      <RockPaperScissorsControls onPlayerSelection={onPlayerSelect} />
    </div>
  );
}