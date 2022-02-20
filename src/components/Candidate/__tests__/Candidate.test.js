import { render } from '@testing-library/react';
import Candidate from '../';

const MOCK_CANDIDATE = {
  name: 'Dem',
  party: 'dem',
  popularVoteTotals: 40,
  winnerTakeAllTotal: 48,
};

it('renders correctly', () => {
  const { container } = render(<Candidate {...MOCK_CANDIDATE} />);
  expect(container.firstChild).toMatchSnapshot();
});
