import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the current stage-based hero headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /clear\s+numbers\.\s+earlier\s+decisions/i })
  ).toBeInTheDocument();
});
