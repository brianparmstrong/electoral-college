const getWinnerFromParty = (party: string) => {
  switch (party) {
    case 'Republican':
      return '1';
    case 'Democratic':
      return '2';
    case 'Libertarian':
      return '3';
    case 'Green':
      return '4';
    case 'Independent':
      return '5';
  }
};

export default getWinnerFromParty;
