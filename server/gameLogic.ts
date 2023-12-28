
type PlayerChoice = {
  id: string;
  hand: string;
}

type PlayerWins = {
  id: string;
  wins: number;
}


export function determineRoundWinner(playerOne: PlayerChoice, playerTwo: PlayerChoice) {
  const playerTwosHand = playerTwo.hand;
  const playerOneId = playerOne.id;
  const playerTwoId = playerTwo.id;

  switch (playerOne.hand) {
    case 'rock':
      if (playerTwosHand === 'paper') return playerTwoId;
      if (playerTwosHand === 'scissors') return playerOneId;
      break;
    case 'paper':
      if (playerTwosHand === 'scissors') return playerTwoId;
      if (playerTwosHand === 'rock') return playerOneId;
      break;
    default:
      if (playerTwosHand === 'rock') return playerTwoId;
      if (playerTwosHand === 'paper') return playerOneId;
      break;
  }
}

export function determineGameWinner(playerOne: PlayerWins, playerTwo: PlayerWins) {
  const playerOneWins = playerOne.wins;
  const playerTwoWins = playerTwo.wins;
  if(playerOneWins > playerTwoWins) return playerOne.id;
  if(playerOneWins < playerTwoWins) return playerTwo.id;
  return null;
}