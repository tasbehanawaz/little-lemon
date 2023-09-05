import React, { useState } from 'react';
import React, { useState, useEffect, useReducer } from 'react';
import fetchData from './api/fetchData'; // import the fetchData function
import { useHistory } from 'react-router-dom';
import submitAPI from './api/submitAPI'; // import the submitAPI function



function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  const submitForm = async (formData) => {
    const submitResult = await submitAPI(formData);

    if (submitResult) {
      history.push('/booking/confirm');
    }
  };

  return (
    <div>
      <h1>Restaurant Reservation System</h1>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} 
      />
    </div>
  );
};



function initializeTimes() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const initialData = fetchData(currentDate); // call the fetchData function with the current date
  return initialData;
}

function updateTimes(date) {
  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay();

  // call the fetchData function with the selected date
  const newData = fetchData(date);

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return [
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
    ];
  }

  return newData;
}


function BookingForm(props) {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevState) => ({ ...prevState, [name]: value }));
    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleReservation = () => {
    const bookedTime = reservationData.time;
    const newAvailableTimes = props.availableTimes.filter((time) => time !== bookedTime);
    props.setAvailableTimes(newAvailableTimes);
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleReservation();
    console.log(reservationData);
    const formData = {
      date: reservationData.date,
      time: reservationData.time,
      guests: reservationData.guests,
      occasion: reservationData.occasion
    };
    props.submitForm(formData);
  };


  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
  <label htmlFor="date">Choose date</label>
  <input
    type="date"
    id="date"
    name="date"
    value={reservationData.date}
    onChange={handleChange}
    required
    min={new Date().toISOString().slice(0,10)}
  />
  <label htmlFor="time">Choose time</label>
  <select id="time" name="time" value={reservationData.time} onChange={handleChange} required>
    <option value="">Select a time slot</option>
    {props.availableTimes.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ))}
  </select>
  <label htmlFor="guests">Number of guests</label>
  <input
    type="number"
    id="guests"
    name="guests"
    value={reservationData.guests}
    onChange={handleChange}
    min="1"
    max="10"
    required
  />
  <label htmlFor="occasion">Occasion</label>
  <select
    id="occasion"
    name="occasion"
    value={reservationData.occasion}
    onChange={handleChange}
    required
  >
    <option value="">Select an occasion</option>
    <option value="Birthday">Birthday</option>
    <option value="Anniversary">Anniversary</option>
  </select>
  <input type="submit" value="Make Your reservation" />

  /*<input type="submit" value="Make Your reservation" disabled={!isFormValid} />*/

</form>
  );
};

export default BookingForm;