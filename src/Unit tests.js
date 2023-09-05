// Import the necessary dependencies
const { fetchData } = require('./utils');
const { initializeTimes } = require('./App');

describe('initializeTimes function', () => {
  test('should return initial data', () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    const expectedData = fetchData(currentDate);
    const result = initializeTimes();

    expect(result).toEqual(expectedData);
  });
});




// Import the necessary dependencies
const { fetchData } = require('./utils');
const { updateTimes, BookingForm } = require('./App');
const { render, fireEvent } = require('@testing-library/react');

describe('updateTimes function', () => {
  test('should return available times for weekdays', () => {
    const date = '2023-04-07'; // a Friday
    const expectedData = fetchData(date);
    const result = updateTimes(date);

    expect(result).toEqual(expectedData);
  });

  test('should return default available times for weekends', () => {
    const date = '2023-04-08'; // a Saturday
    const expectedData = [
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
    ];
    const result = updateTimes(date);

    expect(result).toEqual(expectedData);
  });
});

describe('BookingForm component', () => {
  test('should update reservation data when date is changed', () => {
    const setAvailableTimesMock = jest.fn();
    const dispatchMock = jest.fn();
    const props = {
      availableTimes: ['17:00', '18:00', '19:00'],
      setAvailableTimes: setAvailableTimesMock,
      dispatch: dispatchMock,
      submitForm: jest.fn(),
    };

    const { getByLabelText } = render(<BookingForm {...props} />);
    const dateInput = getByLabelText('Date');
    fireEvent.change(dateInput, { target: { name: 'date', value: '2023-04-09' } });

    expect(dispatchMock).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2023-04-09' });
  });

  test('should submit form with reservation data', () => {
    const setAvailableTimesMock = jest.fn();
    const dispatchMock = jest.fn();
    const submitFormMock = jest.fn();
    const props = {
      availableTimes: ['17:00', '18:00', '19:00'],
      setAvailableTimes: setAvailableTimesMock,
      dispatch: dispatchMock,
      submitForm: submitFormMock,
    };

    const { getByLabelText, getByText } = render(<BookingForm {...props} />);
    const dateInput = getByLabelText('Date');
    const timeInput = getByLabelText('Time');
    const guestsInput = getByLabelText('Guests');
    const occasionInput = getByLabelText('Occasion');
    const submitButton = getByText('Book Now');

    fireEvent.change(dateInput, { target: { name: 'date', value: '2023-04-07' } });
    fireEvent.change(timeInput, { target: { name: 'time', value: '18:00' } });
    fireEvent.change(guestsInput, { target: { name: 'guests', value: '4' } });
    fireEvent.change(occasionInput, { target: { name: 'occasion', value: 'Anniversary' } });
    fireEvent.click(submitButton);

    expect(submitFormMock).toHaveBeenCalledWith({
      date: '2023-04-07',
      time: '18:00',
      guests: '4',
      occasion: 'Anniversary',
    });
  });
});

