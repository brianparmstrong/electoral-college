import React from 'react';
import { CANDIDATES_DATA } from '../';

it('should have the candidates in a specific order', () => {
  expect(CANDIDATES_DATA.length).toEqual(5);
  expect(CANDIDATES_DATA[0].name).toEqual('Rep');
  expect(CANDIDATES_DATA[0].party).toEqual('gop');
  expect(CANDIDATES_DATA[1].name).toEqual('Dem');
  expect(CANDIDATES_DATA[1].party).toEqual('dem');
  expect(CANDIDATES_DATA[2].name).toEqual('Lib');
  expect(CANDIDATES_DATA[2].party).toEqual('lib');
  expect(CANDIDATES_DATA[3].name).toEqual('Grn');
  expect(CANDIDATES_DATA[3].party).toEqual('grn');
  expect(CANDIDATES_DATA[4].name).toEqual('Ind');
  expect(CANDIDATES_DATA[4].party).toEqual('ind');
});
