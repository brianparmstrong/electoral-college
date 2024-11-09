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
  { name: 'Alabama', values: ['64.8', '34.2', '.21', '.2', '.5'] },
  { name: 'Alaska', values: ['55.5', '40.4', '.9', '.7', '1.7'] },
  { name: 'Arizona', values: ['52.6', '46.5', '.51', '.5', ''] },
  { name: 'Arkansas', values: ['64.2', '33.5', '.5', '.4', '1.1'] },
  { name: 'California', values: ['39.8', '57.6', '0.4', '.8', '1.1'] },
  { name: 'Colorado', values: ['42.9', '54.5', '.7', '.5', '1.1'] },
  { name: 'Connecticut', values: ['42', '56.2', '.51', '.8', '.5'] },
  { name: 'Delaware', values: ['41.9', '56.6', '.4', '', '.9'] },
  { name: 'Florida', values: ['56.1', '43', '.3', '.4', ''] },
  { name: 'Georgia', values: ['50.7', '48.5', '.41', '.4', ''] },
  { name: 'Hawaii', values: ['37.5', '60.6', '.5', '.9', ''] },
  { name: 'Idaho', values: ['66.9', '30.4', '.5', '.3', '1.4'] },
  { name: 'Illinois', values: ['45', '53.5', '.001', '.002', '1.5'] },
  { name: 'Indiana', values: ['58.7', '39.6', '.7', '', '1'] },
  { name: 'Iowa', values: ['55.9', '42.7', '.4', '', '.8'] },
  { name: 'Kansas', values: ['57.4', '40.8', '.6', '', '1.2'] },
  { name: 'Kentucky', values: ['64.6', '33.9', '.3', '.4', '.8'] },
  { name: 'Louisiana', values: ['60.2', '38.2', '.31', '.4', '.3'] },
  { name: 'Maine', values: ['45.4', '52.5', '.6', '1.1', ''] },
  { name: 'Maryland', values: ['36.5', '61', '.5', '1.1', '1'] },
  { name: 'Massachusetts', values: ['36.7', '61.2', '.5', '.7', ''] },
  { name: 'Michigan', values: ['49.8', '48.3', '.4', '.8', '.5'] },
  { name: 'Minnesota', values: ['46.9', '51.1', '.5', '.51', '.8'] },
  { name: 'Mississippi', values: ['60.8', '37.9', '.2', '', '.5'] },
  { name: 'Missouri', values: ['58.5', '40.1', '.8', '.6', ''] },
  { name: 'Montana', values: ['58.5', '38.4', '.7', '.5', '2'] },
  { name: 'Nebraska', values: ['60.1', '38.6', '.7', '.3', ''] },
  { name: 'Nevada', values: ['50.7', '47.4', '.4', '', ''] },
  { name: 'New Hampshire', values: ['47.6', '51.2', '.7', '.5', ''] },
  { name: 'New Jersey', values: ['46.5', '51.6', '.3', '.9', '.6'] },
  { name: 'New Mexico', values: ['45.9', '51.8', '.4', '.5', '1'] },
  { name: 'New York', values: ['44.2', '55.8', '.001', '.002', '.003'] },
  { name: 'North Carolina', values: ['51.1', '47.7', '.4', '.41', ''] },
  { name: 'North Dakota', values: ['67.5', '30.8', '1.7', '.001', '.002'] },
  { name: 'Ohio', values: ['55.2', '43.9', '.5', '.001', '.002'] },
  { name: 'Oklahoma', values: ['66.2', '31.9', '.6', '', '1'] },
  { name: 'Oregon', values: ['42.3', '54.9', '.4', '.8', '1.5'] },
  { name: 'Pennsylvania', values: ['50.5', '48.5', '.5', '.51', ''] },
  { name: 'Rhode Island', values: ['41.8', '55.2', '', '.6', '1'] },
  { name: 'South Carolina', values: ['58.1', '40.5', '.5', '.3', ''] },
  { name: 'South Dakota', values: ['64.3', '34.2', '.7', '', '1.7'] },
  { name: 'Tennessee', values: ['64.1', '34.5', '', '.3', '.7'] },
  { name: 'Texas', values: ['56.3', '42.4', '.6', '.7', ''] },
  { name: 'Utah', values: ['59', '38.5', '1', '.5', ''] },
  { name: 'Vermont', values: ['32.6', '64.4', '.5', '', '1.6'] },
  { name: 'Virginia', values: ['46.6', '51.8', '.5', '.8', ''] },
  { name: 'Washington', values: ['39', '58.3', '.4', '.6', '1.3'] },
  { name: 'Washington, D.C.', values: ['6.7', '92.4', '.001', '.002', '.9'] },
  { name: 'West Virginia', values: ['70.1', '28', '.4', '.3', '1.2'] },
  { name: 'Wisconsin', values: ['49.8', '48.8', '.3', '.4', '.5'] },
  { name: 'Wyoming', values: ['72.3', '26.1', '1.6', '.001', '.002'] },
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
