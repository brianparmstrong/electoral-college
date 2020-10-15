import React from 'react';
import renderer from 'react-test-renderer';
import { STATES_DATA } from '../../../constants';
import States from '../';

const MOCK_STATES_PROPS = {
  currentEVTotals: [ 280, 210, 0, 0, 0 ],
  currentPVTotals: [ 255, 230, 3, 1, 1 ],
  handlePropVotes: jest.fn(),
  handleStateWinner: jest.fn(),
  isFromStorage: false,
  popVotesData: [],
  statesData: STATES_DATA
};

it('renders correctly', () => {
  const states = renderer
    .create(
      <States { ...MOCK_STATES_PROPS } />
    )
    .toJSON();
  expect(states).toMatchSnapshot();
});
