import { render } from '@testing-library/react';
import { CANDIDATES_DATA } from '../../../constants';
import CandidatesWrapper from '../';

const MOCK_EV_PCT = [ 15, 14, 0, 0, 0 ];
const MOCK_POP_VOTE_TOTALS = [ 48, 49, 2, 0.5, 0.5 ];
const MOCK_PV_PCT = [ 12.50, 11.50, 2.75, 1.25, 1.00 ];
const MOCK_WINNER_TAKE_ALL_TOTALS = [ 55, 45, 0, 0, 0 ];

it('renders correctly', () => {
  const { container } = render(
      <CandidatesWrapper
        candidates={CANDIDATES_DATA}
        evPct={MOCK_EV_PCT}
        popVoteTotals={MOCK_POP_VOTE_TOTALS}
        pvPct={MOCK_PV_PCT}
        winnerTakeAllTotals={MOCK_WINNER_TAKE_ALL_TOTALS}
      />
    );
  expect(container.firstChild).toMatchSnapshot();
});
