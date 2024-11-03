const getWinnerClassName = (winner = '') => {
  let winnerClass = '';

  switch (winner) {
    case '1':
    case 'Republican':
      winnerClass = 'gop';
      break;
    case '2':
    case 'Democratic':
      winnerClass = 'dem';
      break;
    case '3':
    case 'Libertarian':
      winnerClass = 'lib';
      break;
    case '4':
    case 'Green':
      winnerClass = 'grn';
      break;
    case '5':
    case 'Independent':
      winnerClass = 'ind';
      break;
    default:
      winnerClass = '';
      break;
  }

  return winnerClass;
};

export default getWinnerClassName;
