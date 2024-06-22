import { CANDIDATES_DATA } from '../';

it('should have the candidates in a specific order', () => {
  expect(CANDIDATES_DATA.length).toEqual(5);
  expect(CANDIDATES_DATA[0].name).toEqual('Trump');
  expect(CANDIDATES_DATA[0].party).toEqual('gop');
  expect(CANDIDATES_DATA[1].name).toEqual('Biden');
  expect(CANDIDATES_DATA[1].party).toEqual('dem');
  expect(CANDIDATES_DATA[2].name).toEqual('Oliver');
  expect(CANDIDATES_DATA[2].party).toEqual('lib');
  expect(CANDIDATES_DATA[3].name).toEqual('Stein');
  expect(CANDIDATES_DATA[3].party).toEqual('grn');
  expect(CANDIDATES_DATA[4].name).toEqual('Kennedy');
  expect(CANDIDATES_DATA[4].party).toEqual('ind');
});
