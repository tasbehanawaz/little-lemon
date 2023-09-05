import { render, screen } from '@testing-library/react';
import App from './App';

test('render App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lemon Dessert/i);
  expect(linkElement).toBeInTheDocument();
});
