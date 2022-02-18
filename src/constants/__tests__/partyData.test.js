import { PARTY_MAP } from '../';

it('should have the parties in a specific order', () => {
  expect(PARTY_MAP.length).toEqual(5);
  expect(PARTY_MAP[0]).toEqual('gop');
  expect(PARTY_MAP[1]).toEqual('dem');
  expect(PARTY_MAP[2]).toEqual('lib');
  expect(PARTY_MAP[3]).toEqual('grn');
  expect(PARTY_MAP[4]).toEqual('ind');
});
