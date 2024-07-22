import { render } from '@testing-library/react';
import CandidatesWrapper from '../';

const MOCK_EV_PCT = [15, 14, 0, 0, 0];
const MOCK_POP_VOTE_TOTALS = [48, 49, 2, 0.5, 0.5];
const MOCK_PV_PCT = [12.5, 11.5, 2.75, 1.25, 1.0];
const MOCK_WINNER_TAKE_ALL_TOTALS = [55, 45, 0, 0, 0];
const CANDIDATE_IMAGE_SOURCES = {
  dem: 'https://d.newsweek.com/en/full/2432800/biden.jpg',
  gop: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg',
  grn: 'http://media4.s-nbcnews.com/j/newscms/2016_11/1463891/160318-jill-stein-green-party-yh-1145a_b279e0d0c484f5624e923917d4c42546.nbcnews-ux-2880-1000.jpg',
  ind: 'https://static01.nytimes.com/newsgraphics/2023-09-01-exec-power-survey/_images/headshots/kennedy-jr.png',
  lib: 'https://atlantaciviccircle.org/wp-content/uploads/2022/10/Chase-2-1-e1665410266316.jpg',
};
const CANDIDATES_DATA = [
  {
    name: 'Trump',
    party: 'gop',
  },
  {
    name: 'Biden',
    party: 'dem',
  },
  {
    name: 'Oliver',
    party: 'lib',
  },
  {
    name: 'Stein',
    party: 'grn',
  },
  {
    name: 'Kennedy',
    party: 'ind',
  },
];

it('renders correctly', () => {
  const { container } = render(
    <CandidatesWrapper
      candidates={CANDIDATES_DATA}
      candidateImageSources={CANDIDATE_IMAGE_SOURCES}
      evPct={MOCK_EV_PCT}
      popVoteTotals={MOCK_POP_VOTE_TOTALS}
      pvPct={MOCK_PV_PCT}
      winnerTakeAllTotals={MOCK_WINNER_TAKE_ALL_TOTALS}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
