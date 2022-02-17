import { render, screen } from '@testing-library/react';
import Home from '.';


test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Gerenciamento de Patrimônio/i);
  expect(linkElement).toBeInTheDocument();
});
