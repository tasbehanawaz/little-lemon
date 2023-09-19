import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

describe('ConfirmedBooking', () => {
  test('renders confirmation message', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/booking/confirm']}>
        <Route path="/booking/confirm" component={ConfirmedBooking} />
      </MemoryRouter>
    );
    const heading = getByText(/Booking Confirmed!/i);
    const message = getByText(/Thank you for your booking/i);
    expect(heading).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});