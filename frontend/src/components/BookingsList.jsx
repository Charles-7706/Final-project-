import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { api } from '@/lib/api';

function BookingsList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await api.bookings();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) return <div className="flex justify-center py-12"><div className="text-lg">Loading bookings...</div></div>;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
        <p className="text-gray-600">Track your hostel reservations and payments</p>
      </div>
      
      <div className="space-y-4">
        {bookings.map(booking => (
          <Card key={booking._id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-xl font-semibold text-gray-900">KSh {booking.amount?.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">Booked on {new Date(booking.createdAt).toLocaleDateString()}</p>
                  {booking.paymentRef && (
                    <p className="text-sm text-blue-600 font-medium">Ref: {booking.paymentRef}</p>
                  )}
                </div>
                <Badge 
                  variant={booking.status === 'paid' ? 'default' : 'secondary'}
                  className={`px-3 py-1 text-sm font-medium ${
                    booking.status === 'paid' ? 'bg-green-100 text-green-800' : 
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {booking.status.toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {bookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No bookings found</p>
            <p className="text-gray-400 text-sm mt-2">Your hostel reservations will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingsList;