import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

// Initial state and reducer function for time slots
const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // In a real app, this would fetch new times based on action.payload (the date)
      return initializeTimes(); 
    default:
      return state;
  }
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitAPI = (formData) => {
    // Simulate API submission
    console.log("Form Submitted: ", formData);
    return true; 
  };

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <h1>Reserve a Table</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm} 
      />
    </main>
  );
}