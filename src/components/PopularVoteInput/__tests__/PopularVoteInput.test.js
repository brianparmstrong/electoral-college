import React from 'react';
import renderer from 'react-test-renderer';
import PopularVoteInput from '../';

const MOCK_PV_INPUT_PROPS = {
  currentPVTotals: [ 100, 90, 5, 2, 1 ],
  evs: 20,
  handlePropVotes: jest.fn(),
  name: 'Pennsylvania',
  party: 'grn',
  percent: '10'
};

it('renders correctly', () => {
  const popVoteInput = renderer
    .create(
      <PopularVoteInput { ...MOCK_PV_INPUT_PROPS } />
    )
    .toJSON();
  expect(popVoteInput).toMatchSnapshot();
});
