import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add expense heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /add expense/i });
  expect(heading).toBeInTheDocument();
});

