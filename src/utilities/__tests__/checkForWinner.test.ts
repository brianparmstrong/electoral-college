import { checkForWinner } from '..';

const hasWinner = [55, 45, 0, 0, 0];
const doesNotHaveWinner = [48, 49, 2, 0.5, 0.5];

it('should return whether there is a winner based on EV percent', () => {
  expect(checkForWinner(hasWinner) > -1).toEqual(true);
  expect(checkForWinner(doesNotHaveWinner) > -1).toEqual(false);
});
