import { render } from '@testing-library/react';
import SaveButton from '../';

const MOCK_TOTALS = {
  currentEVTotals: [280, 210, 0, 0, 0],
  currentPVTotals: [255, 230, 3, 1, 1],
};

it('renders correctly', () => {
  const { container } = render(<SaveButton {...MOCK_TOTALS} />);
  expect(container.firstChild).toMatchSnapshot();
});
