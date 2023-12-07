import { useEffect, useState } from 'react';
import RockPaperScissorsControls from './controls';
import RockPaperScissorsScores from './scores';
import RockPaperScissorsPlayersHands from './playersHands';
import RockPaperScissorsMenu from './menu';

enum RPSUsers {
  player = 'player',
  computer = 'computer',
}

export enum RPSResults {
  win = 'You Win!',
  loose = 'You Loose...',
  draw = 'Draw',
}

export enum RPSActions {
  rock = 'rock',
  paper = 'paper',
  scissors = 'scissors',
}

export default function RockPaperScissors() {
  const [showMenu, setShowMenu] = useState(true);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [roundsToPlay, setRoundsToPlay] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computersAction, setComputersAction] = useState<RPSActions | null>(null);
  const [playersAction, setPlayersAction] = useState<RPSActions | null>(null);
  const [gameResults, setGameResults] = useState<RPSResults | null>(null);

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

  const toggleShakingFists = () => {
    const shakingFists = document.querySelectorAll('.shake');
    if (shakingFists) {
      shakingFists.forEach((fist) => fist.classList.toggle('hidden'))
    }
  }

  const determineRoundWinner = (playerChoice: RPSActions, computerChoice: RPSActions) => {
    switch (playerChoice) {
      case RPSActions.rock:
        if (computerChoice === RPSActions.paper) return setComputerScore((prevState) => prevState + 1);
        if (computerChoice === RPSActions.scissors) return setPlayerScore((prevState) => prevState + 1);
        break;
      case RPSActions.paper:
        if (computerChoice === RPSActions.scissors) return setComputerScore((prevState) => prevState + 1);
        if (computerChoice === RPSActions.rock) return setPlayerScore((prevState) => prevState + 1);
        break;
      default:
        if (computerChoice === RPSActions.rock) return setComputerScore((prevState) => prevState + 1);
        if (computerChoice === RPSActions.paper) return setPlayerScore((prevState) => prevState + 1);
        break;
    }
  }

  const determineGameResults = () => {
    console.log({ playerScore, computerScore })
    if (playerScore === computerScore) return setGameResults(RPSResults.draw);
    if (playerScore < computerScore) return setGameResults(RPSResults.loose);
    return setGameResults(RPSResults.win);
  }

  const startGame = () => {
    setShowMenu(false);
    setGameResults(null);
    setPlayersAction(null);
    setComputersAction(null);
    setPlayerScore(0);
    setComputerScore(0);
  }

  useEffect(() => {
    if (playersAction) {
      console.log('player selected:', playersAction);
      toggleShakingFists();

      const actions = Object.values(RPSActions);
      const computerSelection = actions[Math.floor(Math.random() * actions.length)];
      actionSelection(RPSUsers.computer, computerSelection);
    }
  }, [playersAction])

  useEffect(() => {
    if (playersAction && computersAction) {
      console.log('calculating round winner');
      console.log({ roundsPlayed, playersAction, computersAction });
      determineRoundWinner(playersAction, computersAction);
      setRoundsPlayed((prevState) => prevState + 1);
      setPlayersAction(null);
      setComputersAction(null);
      toggleShakingFists();
    }
    console.log({ roundsPlayed, playersAction, computersAction });
  }, [playersAction, computersAction])

  useEffect(() => {
    if (roundsPlayed == roundsToPlay) {
      determineGameResults();
      setRoundsPlayed(0);
      setShowMenu(true)
    }
  }, [roundsPlayed])

  useEffect(() => console.log({ gameResults }), [gameResults])

  return (
    <div className='relative'>
      <RockPaperScissorsMenu isOpen={false} gameResults={gameResults} onPlayClick={startGame} />
      <RockPaperScissorsScores computerScore={computerScore} playerScore={playerScore} />
      <RockPaperScissorsPlayersHands playerHand={playersAction} computerHand={computersAction} />
      <RockPaperScissorsControls onPlayerSelection={onPlayerSelect} />
    </div>
  );
}