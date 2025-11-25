import { useParams, useNavigate, data } from 'react-router-dom';
import { mockHostels } from '@/data/mockHostels';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Star, Users, Phone, Mail, ArrowLeft, Calendar } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { use } from 'react';
import { useEffect, useState } from 'react';
import api from '@/lib/api';

const HostelDetail = ({}) => {
const navigate = useNavigate();
  const {id} = useParams();
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const data = await api.hostelbyId(id);
        
        setHostel(data);
      } catch (err) {
        setError('Failed to load hostels. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchHostels();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <h1 className="text-2xl font-bold">Loading Hostel Details...</h1>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }
  if (!hostel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Hostel not found</h1>
          <Button onClick={() => navigate('/hostels')}>Back to Hostels</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Carousel */}
            <div className="rounded-lg overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {hostel?.images?.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt={`${hostel.name} - ${index + 1}`}
                        className="w-full h-96 object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Hostel Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{hostel.name}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{hostel.location.type}</span>
                      <p>{hostel.location.coordinates}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium">{hostel.rating}</span>
                      <span>({hostel.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  {hostel.vacancies} beds left
                </Badge>
              </div>

              <p className="text-muted-foreground text-lg">{hostel.description}</p>
            </div>

            {/* Details Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Room Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {hostel?.roomTypes?.map(type => (
                      <Badge key={type} variant="secondary" className="text-sm py-1.5 px-3">
                        <Users className="h-3 w-3 mr-1" />
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-1">{hostel.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{hostel.campus}</p>
                  <Badge variant="outline" className="border-primary text-primary">
                    {hostel.distance} km away
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Amenities */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {hostel.amenities.map(amenity => (
                    <div key={amenity} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Caretaker Info */}
            {hostel.landlordId && (
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Contact Caretaker</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-medium">{hostel.landlordId.name}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{hostel.landlordId.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{hostel.landlordId.email}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border sticky top-4">
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    KSh {hostel.priceFrom.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Gender:</span>
                    <Badge variant="outline" className="border-primary text-primary">
                      {hostel.gender}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Distance:</span>
                    <span className="font-medium">{hostel.distance} km</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available Beds:</span>
                    <span className="font-medium">{hostel.vacancies}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full bg-black hover:bg-black-600/90 h-12" 
                    size="lg"
                    onClick={() => navigate('/book', { state: { hostelId: hostel._id, amount: hostel.priceFrom } })}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full h-12" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Caretaker
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    You won't be charged yet. Reservation is free.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;
