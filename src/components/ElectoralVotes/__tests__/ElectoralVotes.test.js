import React from 'react';
import renderer from 'react-test-renderer';
import ElectoralVotes from '../';

const MOCK_VOTE_INFO = {
  party: 'ind',
  popularVoteTotals: 10,
  winnerTakeAllTotal: 0
};

it('renders correctly', () => {
  const electoralVotes = renderer
    .create(
      <ElectoralVotes {...MOCK_VOTE_INFO} />
    )
    .toJSON();
  expect(electoralVotes).toMatchSnapshot();
});
