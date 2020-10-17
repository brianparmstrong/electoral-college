import React from 'react';
import { getWinnerName } from '../';

it('should return correct state winner name', () => {
  expect(getWinnerName(1)).toEqual('Trump');
  expect(getWinnerName('1')).toEqual('Trump');
  expect(getWinnerName(2)).toEqual('Biden');
  expect(getWinnerName('2')).toEqual('Biden');
  expect(getWinnerName(3)).toEqual('Jorgensen');
  expect(getWinnerName('3')).toEqual('Jorgensen');
  expect(getWinnerName(4)).toEqual('Hawkins');
  expect(getWinnerName('4')).toEqual('Hawkins');
  expect(getWinnerName(5)).toEqual('West');
  expect(getWinnerName('5')).toEqual('West');
  expect(getWinnerName(0)).toEqual('');
  expect(getWinnerName('0')).toEqual('');
  expect(getWinnerName(undefined)).toEqual('');
  expect(getWinnerName('undefined')).toEqual('');
});