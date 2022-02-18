import { render } from '@testing-library/react';
import { STATES_DATA } from '../../../constants';
import Map from '../';

const NO_STATE_WINNERS = {};

const mockMapStateClick = jest.fn();

it('renders correctly', () => {
  const { container } = render(
    <Map
      handleMapStateClick={mockMapStateClick}
      statesData={STATES_DATA}
      stateWinnerNames={NO_STATE_WINNERS}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
