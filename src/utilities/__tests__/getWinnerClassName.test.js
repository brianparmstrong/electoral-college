import { getWinnerClassName } from '../';

it('should return correct state winner name', () => {
  expect(getWinnerClassName('1')).toEqual('gop');
  expect(getWinnerClassName('2')).toEqual('dem');
  expect(getWinnerClassName('3')).toEqual('lib');
  expect(getWinnerClassName('4')).toEqual('grn');
  expect(getWinnerClassName('5')).toEqual('ind');
  expect(getWinnerClassName('0')).toEqual('');
  expect(getWinnerClassName(undefined)).toEqual('');
  expect(getWinnerClassName('undefined')).toEqual('');
});
