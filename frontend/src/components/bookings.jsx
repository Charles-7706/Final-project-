import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { api } from '@/lib/api';

function BookingPage() {
  const [booking, setBooking] = useState({
    amount: '',
    status: 'pending',
    paymentRef: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createBooking(booking);
      alert('Booking created successfully!');
      setBooking({ amount: '', status: 'pending', paymentRef: '' });
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create Booking</h1>
      <Card className="max-w-md">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <Label>Amount</Label>
            <Input 
              type="number" 
              required
              value={booking.amount}
              onChange={(e) => setBooking({...booking, amount: e.target.value})}
            />
            
            <Label>Status</Label>
            <select 
              value={booking.status}
              onChange={(e) => setBooking({...booking, status: e.target.value})}
              className="w-full p-2 border rounded"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="cancelled">Cancelled</option>
              <option value="rejected">Rejected</option>
            </select>
            
            <Label>Payment Reference</Label>
            <Input 
              placeholder="Mpesa receipt or transaction ID"
              value={booking.paymentRef}
              onChange={(e) => setBooking({...booking, paymentRef: e.target.value})}
            />
            
            <Button type="submit" className="w-full mt-4">
              Create Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookingPage;
