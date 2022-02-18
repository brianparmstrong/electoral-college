import { render } from '@testing-library/react';
import ClearButton from '../';

it('renders correctly', () => {
  const { container } = render(<ClearButton />);
  expect(container.firstChild).toMatchSnapshot();
});
