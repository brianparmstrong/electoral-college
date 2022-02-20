import { render } from '@testing-library/react';
import PopularVoteInput from '../';

const MOCK_PV_INPUT_PROPS = {
  currentPVTotals: [100, 90, 5, 2, 1],
  evs: '20',
  handlePropVotes: jest.fn(),
  name: 'Pennsylvania',
  party: 'grn',
  percent: '10',
};

it('renders correctly', () => {
  const { container } = render(<PopularVoteInput {...MOCK_PV_INPUT_PROPS} />);
  expect(container.firstChild).toMatchSnapshot();
});
