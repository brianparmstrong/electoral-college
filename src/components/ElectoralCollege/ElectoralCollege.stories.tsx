import { StoryObj, Meta } from '@storybook/react';
import ElectoralCollege from '../../';

const meta: Meta<typeof ElectoralCollege> = {
  component: ElectoralCollege,
  title: 'Electoral College',
};

export default meta;
type Story = StoryObj<typeof ElectoralCollege>;

const candidateImageSources = {
  dem: 'http://www.palmerreport.com/wp-content/uploads/2024/07/kamala-harris.jpg',
  gop: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg',
  grn: 'http://media4.s-nbcnews.com/j/newscms/2016_11/1463891/160318-jill-stein-green-party-yh-1145a_b279e0d0c484f5624e923917d4c42546.nbcnews-ux-2880-1000.jpg',
  ind: 'https://static01.nytimes.com/newsgraphics/2023-09-01-exec-power-survey/_images/headshots/kennedy-jr.png',
  lib: 'https://atlantaciviccircle.org/wp-content/uploads/2022/10/Chase-2-1-e1665410266316.jpg',
};

const candidatesData = [
  {
    name: 'Trump',
    party: 'gop',
  },
  {
    name: 'Harris',
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

export const Example: Story = {
  args: {
    candidateImageSources,
    candidatesData,
  },
};
