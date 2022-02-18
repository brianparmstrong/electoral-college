import { render } from '@testing-library/react';
import { CANDIDATES_DATA } from '../../../constants';
import Candidates from '../';

const MOCK_POP_VOTE_TOTALS = [ 40, 40, 2, 1, 1 ];
const MOCK_WINNER_TAKE_ALL_TOTALS = [ 43, 42, 0, 0, 0 ];

it('renders correctly', () => {
  const { container } = render(
      <Candidates
        candidatesData={CANDIDATES_DATA}
        popularVoteTotals={MOCK_POP_VOTE_TOTALS}
        winnerTakeAllTotals={MOCK_WINNER_TAKE_ALL_TOTALS}
      />
    );
  expect(container.firstChild).toMatchSnapshot();
});
