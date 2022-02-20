import { render } from '@testing-library/react';
import { STATES_DATA } from '../../../constants';
import States from '../';

const MOCK_STATES_PROPS = {
  currentEVTotals: [280, 210, 0, 0, 0],
  currentPVTotals: [255, 230, 3, 1, 1],
  handlePropVotes: jest.fn(),
  handleStateWinner: jest.fn(),
  isFromStorage: false,
  popVotesData: [],
  statesData: STATES_DATA,
};

it('renders correctly', () => {
  const { container } = render(<States {...MOCK_STATES_PROPS} />);
  expect(container.firstChild).toMatchSnapshot();
});
