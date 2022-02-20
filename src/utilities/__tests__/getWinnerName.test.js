import { getWinnerName } from '../';

it('should return correct state winner name', () => {
  expect(getWinnerName('1')).toEqual('Republican');
  expect(getWinnerName('2')).toEqual('Democratic');
  expect(getWinnerName('3')).toEqual('Libertarian');
  expect(getWinnerName('4')).toEqual('Green');
  expect(getWinnerName('5')).toEqual('Independent');
  expect(getWinnerName('0')).toEqual('');
  expect(getWinnerName(undefined)).toEqual('');
  expect(getWinnerName('undefined')).toEqual('');
});
