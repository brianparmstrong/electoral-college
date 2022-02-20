import { render } from '@testing-library/react';
import ElectoralCollege from './ElectoralCollege';

window.alert = jest.fn();

it('renders without crashing', () => {
  render(<ElectoralCollege />);
  window.alert.mockClear();
});

it('renders correctly when localStorage is empty', () => {
  const { container } = render(<ElectoralCollege />);
  expect(container.firstChild).toMatchSnapshot();
  window.alert.mockClear();
});
