import React from 'react';
import renderer from 'react-test-renderer';
import Candidate from '../';

const MOCK_CANDIDATE = {
  name: 'Dem',
  party: 'dem',
  popularVoteTotals: 40,
  winnerTakeAllTotal: 48
};

it('renders correctly', () => {
  const candidate = renderer
    .create(
      <Candidate {...MOCK_CANDIDATE} />
    )
    .toJSON();
  expect(candidate).toMatchSnapshot();
});
