import { Route } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your booking. We have received your request and will process it shortly.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Your other routes go here */}
      <Route path="/booking/confirm" component={ConfirmedBooking} />
    </div>
  );
}
