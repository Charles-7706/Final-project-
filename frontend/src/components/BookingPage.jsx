import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { api } from '@/lib/api';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hostelId, amount: defaultAmount } = location.state || {};
  
  const [booking, setBooking] = useState({
    hostelId: hostelId || '',
    amount: defaultAmount || '',
    status: 'pending',
    paymentRef: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createbooking(booking);
      alert('Booking created successfully!');
      navigate('/my-bookings');
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
            <input type="hidden" value={booking.hostelId} />
            
            <Label>Amount (KSh)</Label>
            <Input 
              type="number" 
              required
              value={booking.amount}
              onChange={(e) => setBooking({...booking, amount: e.target.value})}
            />
            
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