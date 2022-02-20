const getWinnerClassName = (winner: string) => {
  let winnerClass = '';

  switch (winner) {
    case '1':
      winnerClass = 'gop';
      break;
    case '2':
      winnerClass = 'dem';
      break;
    case '3':
      winnerClass = 'lib';
      break;
    case '4':
      winnerClass = 'grn';
      break;
    case '5':
      winnerClass = 'ind';
      break;
    default:
      winnerClass = '';
      break;
  }

  return winnerClass;
};

export default getWinnerClassName;
