import { getStateWinnerNames } from '..';

const MOCK_DATA = [
  {
    name: 'Alabama',
    stateCode: 'AL',
    winner: '1',
  },
  {
    name: 'California',
    stateCode: 'CA',
    winner: '2',
  },
  {
    name: 'Michigan',
    stateCode: 'MI',
    winner: '4',
  },
  {
    name: 'Nevada',
    stateCode: 'NV',
    winner: '5',
  },
  {
    name: 'New Hampshire',
    stateCode: 'NH',
    winner: '3',
  },
  {
    name: 'NE-CD1',
    stateCode: 'NE1',
    winner: '1',
  },
];

it('should return correct state winner name', () => {
  const mockReturnData = getStateWinnerNames(MOCK_DATA);
  expect(mockReturnData).toEqual({
    AL: 'Republican',
    CA: 'Democratic',
    MI: 'Green',
    NH: 'Libertarian',
    NV: 'Independent',
  });
});
