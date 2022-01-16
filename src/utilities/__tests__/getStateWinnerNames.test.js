import React from 'react';
import { getStateWinnerNames } from '../';

const MOCK_DATA = [
  {
    name: 'Alabama',
    stateCode: 'AL',
    winner: '1'
  },
  {
    name: 'NE-CD1',
    stateCode: 'NE1',
    winner: '1'
  }
];

it('should return correct state winner name', () => {
  const mockReturnData = getStateWinnerNames(MOCK_DATA);
  expect(mockReturnData).toEqual({
    'AL': 'Republican'
  });
});