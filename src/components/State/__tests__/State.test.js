import React from 'react';
import renderer from 'react-test-renderer';
import State from '../';

const MOCK_STATE_PROPS = {
  evs: 15,
  isFromStorage: false,
  name: 'North Carolina',
  stateClickedFromMap: true,
  stateCode: 'NC',
  toggleWinner: jest.fn(),
  winner: 3
};

it('renders correctly', () => {
  const state = renderer
    .create(
      <State { ...MOCK_STATE_PROPS } />
    )
    .toJSON();
  expect(state).toMatchSnapshot();
});
