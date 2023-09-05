import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Submitting the form calls submitForm with correct data', () => {
  const mockSubmitForm = jest.fn();
  const mockSetAvailableTimes = jest.fn();
  const availableTimes = ['12:00', '13:00', '14:00'];
  const { getByLabelText, getByText } = render(
    <BookingForm
      availableTimes={availableTimes}
      setAvailableTimes={mockSetAvailableTimes}
      submitForm={mockSubmitForm}
    />
  );

  const dateInput = getByLabelText('Choose date');
  const timeSelect = getByLabelText('Choose time');
  const guestsInput = getByLabelText('Number of guests');
  const occasionSelect = getByLabelText('Occasion');
  const submitButton = getByText('Make Your reservation');

  fireEvent.change(dateInput, { target: { value: '2023-04-09' } });
  fireEvent.change(timeSelect, { target: { value: '12:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2023-04-09',
    time: '12:00',
    guests: 4,
    occasion: 'Birthday'
  });
});
