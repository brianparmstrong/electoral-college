import { render } from '@testing-library/react';
import PopularVotes from '../';

const MOCK_POP_VOTES_PROPS = {
  currentPVTotals: [ 100, 90, 5, 2, 1 ],
  evs: 1,
  handlePropVotes: jest.fn(),
  name: 'ME-CD1',
  popVotesData: { values: [ '', '', '', '', '' ] },
  showPopVotes: true,
  stateEvs: 4
};

it('renders correctly', () => {
  const { container } = render(<PopularVotes { ...MOCK_POP_VOTES_PROPS } />);
  expect(container.firstChild).toMatchSnapshot();
});
