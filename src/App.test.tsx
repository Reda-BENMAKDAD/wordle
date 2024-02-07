import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wordle/i);
  expect(linkElement).toBeInTheDocument();
});
