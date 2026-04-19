import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the strategic finance headline', () => {
  render(<App />);
  expect(screen.getByText(/finance that moves at the speed of the business/i)).toBeInTheDocument();
});
