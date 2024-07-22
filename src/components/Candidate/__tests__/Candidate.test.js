import { render } from '@testing-library/react';
import Candidate from '../';

const MOCK_CANDIDATE = {
  imageSrc: 'https://d.newsweek.com/en/full/2432800/biden.jpg',
  name: 'Dem',
  party: 'dem',
  popularVoteTotals: 40,
  winnerTakeAllTotal: 48,
};

it('renders correctly', () => {
  const { container } = render(<Candidate {...MOCK_CANDIDATE} />);
  expect(container.firstChild).toMatchSnapshot();
});
