import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the Choose date label', () => {
  const availableTimes = ['17:00', '18:00'];
  const dispatch = jest.fn();
  
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={jest.fn()} />);
  
  const labelElement = screen.getByText(/Choose date/i);
  expect(labelElement).toBeInTheDocument();
});