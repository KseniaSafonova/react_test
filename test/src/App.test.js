import { render, screen } from '@testing-library/react';
import App, { sum } from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/for/i);
  expect(linkElement).toBeInTheDocument();
  // const { asFragment } = render(<App />);
  // expect(asFragment(<App />)).toMatchSnapshot();
});


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
