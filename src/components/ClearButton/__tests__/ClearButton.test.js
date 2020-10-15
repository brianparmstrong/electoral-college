import React from 'react';
import renderer from 'react-test-renderer';
import ClearButton from '../';

it('renders correctly', () => {
  const clearButton = renderer
    .create(
      <ClearButton />
    )
    .toJSON();
  expect(clearButton).toMatchSnapshot();
});
