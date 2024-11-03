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

const voteTotals = [
  { name: 'Alabama', values: ['59', '40', '.5', '.3', '.2'] },
  { name: 'Alaska', values: ['', '', '', '', ''] },
  { name: 'Arizona', values: ['', '', '', '', ''] },
  { name: 'Arkansas', values: ['', '', '', '', ''] },
  { name: 'California', values: ['40', '55', '0.5', '1', '3.5'] },
  { name: 'Colorado', values: ['', '', '', '', ''] },
  { name: 'Connecticut', values: ['', '', '', '', ''] },
  { name: 'Delaware', values: ['', '', '', '', ''] },
  { name: 'Florida', values: ['', '', '', '', ''] },
  { name: 'Georgia', values: ['', '', '', '', ''] },
  { name: 'Hawaii', values: ['', '', '', '', ''] },
  { name: 'Idaho', values: ['', '', '', '', ''] },
  { name: 'Illinois', values: ['44.4', '44.6', '2.5', '6.5', '2'] },
  { name: 'Indiana', values: ['', '', '', '', ''] },
  { name: 'Iowa', values: ['', '', '', '', ''] },
  { name: 'Kansas', values: ['', '', '', '', ''] },
  { name: 'Kentucky', values: ['', '', '', '', ''] },
  { name: 'Louisiana', values: ['', '', '', '', ''] },
  { name: 'Maine', values: ['', '', '', '', ''] },
  { name: 'Maryland', values: ['', '', '', '', ''] },
  { name: 'Massachusetts', values: ['', '', '', '', ''] },
  { name: 'Michigan', values: ['', '', '', '', ''] },
  { name: 'Minnesota', values: ['', '', '', '', ''] },
  { name: 'Mississippi', values: ['', '', '', '', ''] },
  { name: 'Missouri', values: ['', '', '', '', ''] },
  { name: 'Montana', values: ['', '', '', '', ''] },
  { name: 'Nebraska', values: ['55', '43', '0.5', '1.1', '0.4'] },
  { name: 'Nevada', values: ['', '', '', '', ''] },
  { name: 'New Hampshire', values: ['', '', '', '', ''] },
  { name: 'New Jersey', values: ['', '', '', '', ''] },
  { name: 'New Mexico', values: ['', '', '', '', ''] },
  { name: 'New York', values: ['', '', '', '', ''] },
  { name: 'North Carolina', values: ['', '', '', '', ''] },
  { name: 'North Dakota', values: ['', '', '', '', ''] },
  { name: 'Ohio', values: ['', '', '', '', ''] },
  { name: 'Oklahoma', values: ['', '', '', '', ''] },
  { name: 'Oregon', values: ['', '', '', '', ''] },
  { name: 'Pennsylvania', values: ['', '', '', '', ''] },
  { name: 'Rhode Island', values: ['', '', '', '', ''] },
  { name: 'South Carolina', values: ['', '', '', '', ''] },
  { name: 'South Dakota', values: ['', '', '', '', ''] },
  { name: 'Tennessee', values: ['', '', '', '', ''] },
  { name: 'Texas', values: ['', '', '', '', ''] },
  { name: 'Utah', values: ['', '', '', '', ''] },
  { name: 'Vermont', values: ['', '', '', '', ''] },
  { name: 'Virginia', values: ['', '', '', '', ''] },
  { name: 'Washington', values: ['', '', '', '', ''] },
  { name: 'Washington, D.C.', values: ['', '', '', '', ''] },
  { name: 'West Virginia', values: ['', '', '', '', ''] },
  { name: 'Wisconsin', values: ['', '', '', '', ''] },
  { name: 'Wyoming', values: ['', '', '', '', ''] },
];

export const Example: Story = {
  args: {
    candidateImageSources,
    candidatesData,
    dataMode: 'auto',
    mapSize: 'medium',
    stateControlSize: 'small',
    voteTotals,
  },
};
