import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current stage-based hero headline', () => {
  render(<App />);
  expect(screen.getByText(/i turn signal into operating leverage\./i)).toBeInTheDocument();
});
