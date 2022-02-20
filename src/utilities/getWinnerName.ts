const getWinnerName = (winningParty: string) => {
  let stateWinner = '';

  switch (winningParty) {
    case '1':
      stateWinner = 'Republican';
      break;
    case '2':
      stateWinner = 'Democratic';
      break;
    case '3':
      stateWinner = 'Libertarian';
      break;
    case '4':
      stateWinner = 'Green';
      break;
    case '5':
      stateWinner = 'Independent';
      break;
    default:
      stateWinner = '';
      break;
  }

  return stateWinner;
};

export default getWinnerName;
