import { getOrderedVoteTotals } from '..';

it('should order vote totals', () => {
  expect(getOrderedVoteTotals([45, 50, 2.5, 1, 1.5])).toEqual({
    first: 50,
    second: 45,
    third: 2.5,
    fourth: 1.5,
    fifth: 1,
  });
  expect(getOrderedVoteTotals([55, 39, 0.5, 1, 4.5])).toEqual({
    first: 55,
    second: 39,
    third: 4.5,
    fourth: 1,
    fifth: 0.5,
  });
});
