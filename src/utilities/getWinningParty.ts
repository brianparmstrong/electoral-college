const getWinningPartyFullName = (winner: string) => {
  switch (winner) {
    case '1':
      return 'Republican';
    case '2':
      return 'Democratic';
    case '3':
      return 'Libertarian';
    case '4':
      return 'Green';
    case '5':
      return 'Independent';
  }
};

export default getWinningPartyFullName;
