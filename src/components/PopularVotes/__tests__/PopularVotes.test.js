import React from 'react';
import renderer from 'react-test-renderer';
import PopularVotes from '../';

const MOCK_POP_VOTES_PROPS = {
  currentPVTotals: [ 100, 90, 5, 2, 1 ],
  evs: 1,
  handlePropVotes: jest.fn(),
  name: 'ME-CD1',
  popVotesData: { values: [ '', '', '', '', '' ] },
  showPopVotes: true,
  stateEvs: 4
};

it('renders correctly', () => {
  const popVotes = renderer
    .create(
      <PopularVotes { ...MOCK_POP_VOTES_PROPS } />
    )
    .toJSON();
  expect(popVotes).toMatchSnapshot();
});
