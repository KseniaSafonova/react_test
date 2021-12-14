import { render, screen, fireEvent } from '@testing-library/react';
import App, { sum } from './App';


// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/for/i);
//   // expect(linkElement).toBeInTheDocument();
//   const { asFragment } = render(<App />);
//   expect(asFragment(<App />)).toMatchSnapshot();
// });


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);
//     // screen.debug();
//     expect(screen.getByText(/Search:/i)).toBeInTheDocument();
//   })
// })

// describe('App', () => {
//   it('renders App component', async () => {
//     screen.debug();
//     render(<App />);
//     expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
//     screen.debug();
//   })
// })

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);
    await screen.findByText(/Logged in as/i)
    expect(screen.queryByText(/Searches for React/)).toBeNull();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' }
    })
    expect(screen.queryByText(/Searches for React/)).toBeInTheDocument();
  })
})