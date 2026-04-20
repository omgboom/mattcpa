import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current stage-based hero headline', () => {
  render(<App />);
  expect(
    screen.getByText(/i build the systems that help a business see clearly and move earlier\./i)
  ).toBeInTheDocument();
});
