import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current stage-based hero headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /where strategy meets intelligence/i })
  ).toBeInTheDocument();
});
