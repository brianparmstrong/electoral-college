const getWinnerName = winningParty => {
  let stateWinner = '';

  switch (parseInt(winningParty)) {
    case 1:
      stateWinner = 'Trump';
      break;
    case 2:
      stateWinner = 'Biden';
      break;
    case 3:
      stateWinner = 'Jorgensen';
      break;
    case 4:
      stateWinner = 'Hawkins';
      break;
    case 5:
      stateWinner = 'West';
      break;
    default:
      stateWinner = '';
      break;
  }

  return stateWinner;
};

export default getWinnerName;
