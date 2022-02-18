import { render } from '@testing-library/react';
import ElectoralCollege from './ElectoralCollege';

it('renders without crashing', () => {
  render(<ElectoralCollege />);
});

it('renders correctly when localStorage is empty', () => {
  const { container } = render(<ElectoralCollege />);
  expect(container.firstChild).toMatchSnapshot();
});
