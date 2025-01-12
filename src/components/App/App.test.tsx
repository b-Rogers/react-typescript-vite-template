import { render, screen } from '@testing-library/react';
import App from '.';

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn().mockReturnValue({
    data: {},
    isPending: true,
    error: {},
  }),
}));

test('renders Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hello World/i);

  expect(headerElement).toBeInTheDocument();
});
