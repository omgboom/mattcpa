import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current stage-based hero headline', () => {
  render(<App />);
  expect(
    screen.getByText(/i help businesses see clearly, move earlier, and build leverage that sticks\./i)
  ).toBeInTheDocument();
});
