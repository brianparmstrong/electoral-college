import { render } from '@testing-library/react';
import ElectoralVotes from '../';

const MOCK_VOTE_INFO = {
  party: 'ind',
  popularVoteTotals: 10,
  winnerTakeAllTotal: 0,
};

it('renders correctly', () => {
  const { container } = render(<ElectoralVotes {...MOCK_VOTE_INFO} />);
  expect(container.firstChild).toMatchSnapshot();
});
