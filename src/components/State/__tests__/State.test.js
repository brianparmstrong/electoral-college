import { render } from '@testing-library/react';
import State from '../';

const MOCK_STATE_PROPS = {
  evs: 15,
  isFromStorage: false,
  name: 'North Carolina',
  stateClickedFromMap: true,
  stateCode: 'NC',
  toggleWinner: jest.fn(),
  winner: 3
};

it('renders correctly', () => {
  const { container } = render(<State { ...MOCK_STATE_PROPS } />);
  expect(container.firstChild).toMatchSnapshot();
});
