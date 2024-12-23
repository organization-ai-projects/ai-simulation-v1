import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';

test('renders all navigation links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Agents/i)).toBeInTheDocument();
  expect(screen.getByText(/Universes/i)).toBeInTheDocument();
  expect(screen.getByText(/Multiverses/i)).toBeInTheDocument();
  expect(screen.getByText(/Analytics/i)).toBeInTheDocument();
});
