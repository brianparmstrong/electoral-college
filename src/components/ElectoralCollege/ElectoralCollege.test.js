import { render } from '@testing-library/react';
import ElectoralCollege from './ElectoralCollege';

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

it('renders without crashing', () => {
  render(
    <ElectoralCollege
      candidateImageSources={CANDIDATE_IMAGE_SOURCES}
      candidatesData={CANDIDATES_DATA}
    />
  );
});

it('renders correctly when localStorage is empty', () => {
  const { container } = render(
    <ElectoralCollege
      candidateImageSources={CANDIDATE_IMAGE_SOURCES}
      candidatesData={CANDIDATES_DATA}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders without crashing, disabling sticky EV Counter', () => {
  render(
    <ElectoralCollege
      candidateImageSources={CANDIDATE_IMAGE_SOURCES}
      enableStickyEVCounter={false}
      candidatesData={CANDIDATES_DATA}
    />
  );
});

it('renders correctly when localStorage is empty, disabling sticky EV Counter', () => {
  const { container } = render(
    <ElectoralCollege
      candidateImageSources={CANDIDATE_IMAGE_SOURCES}
      candidatesData={CANDIDATES_DATA}
      enableStickyEVCounter={false}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
