import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import ElectoralCollege from './ElectoralCollege';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ElectoralCollege />, div);
  unmountComponentAtNode(div);
});
