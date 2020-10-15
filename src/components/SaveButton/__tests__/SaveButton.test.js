import React from 'react';
import renderer from 'react-test-renderer';
import SaveButton from '../';

const MOCK_TOTALS = {
  currentEVTotals: [ 280, 210, 0, 0, 0 ],
  currentPVTotals: [ 255, 230, 3, 1, 1 ]
}

it('renders correctly', () => {
  const saveButton = renderer
    .create(
      <SaveButton { ...MOCK_TOTALS } />
    )
    .toJSON();
  expect(saveButton).toMatchSnapshot();
});
