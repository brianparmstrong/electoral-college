import React from 'react';
import { calculateEVPercentage } from '../';

it('should calculate percentage based on value passed in', () => {
  expect(calculateEVPercentage(100)).toEqual(18.587360594795538);
  expect(calculateEVPercentage(0)).toEqual(0);
  expect(calculateEVPercentage(538)).toEqual(100);
});