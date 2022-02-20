const checkForWinner = (array: Array<number>) =>
  array.findIndex((votePercent: number) => votePercent > 50);

export default checkForWinner;
