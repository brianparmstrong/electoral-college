import React from 'react';
import renderer from 'react-test-renderer';
import { STATES_DATA } from '../../../constants';
import Map from '../';

const NO_STATE_WINNERS = {};

const mockMapStateClick = jest.fn();

it('renders correctly', () => {
  const map = renderer
    .create(
      <Map
        handleMapStateClick={mockMapStateClick}
        statesData={STATES_DATA}
        stateWinnerNames={NO_STATE_WINNERS} />
    )
    .toJSON();
  expect(map).toMatchSnapshot();
});
