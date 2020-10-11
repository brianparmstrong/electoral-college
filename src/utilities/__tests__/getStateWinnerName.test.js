import React from 'react';
import { getStateWinnerName } from '../';

it('should return correct state winner name', () => {
  expect(getStateWinnerName(1)).toEqual('Trump');
  expect(getStateWinnerName('1')).toEqual('Trump');
  expect(getStateWinnerName(2)).toEqual('Biden');
  expect(getStateWinnerName('2')).toEqual('Biden');
  expect(getStateWinnerName(3)).toEqual('Jorgensen');
  expect(getStateWinnerName('3')).toEqual('Jorgensen');
  expect(getStateWinnerName(4)).toEqual('Hawkins');
  expect(getStateWinnerName('4')).toEqual('Hawkins');
  expect(getStateWinnerName(5)).toEqual('West');
  expect(getStateWinnerName('5')).toEqual('West');
  expect(getStateWinnerName(0)).toEqual('');
  expect(getStateWinnerName('0')).toEqual('');
  expect(getStateWinnerName(undefined)).toEqual('');
  expect(getStateWinnerName('undefined')).toEqual('');
});