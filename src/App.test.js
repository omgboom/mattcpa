import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the stage-based hero headline', () => {
  render(<App />);
  expect(
    screen.getByText(/some roles are a fit on paper\. the right one creates momentum\./i)
  ).toBeInTheDocument();
});
