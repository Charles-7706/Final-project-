import { MapPin, Star, Users, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { getUserFromToken } from '@/lib/auth';
import { api } from '@/lib/api';


const HostelCard = ({ hostel, onDelete }) => {
  const navigate = useNavigate();
  const user = getUserFromToken();
  const canDelete = user && (user.role === 'owner' || user.role === 'admin');

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this hostel?')) {
      try {
        await api.deleteHostel(hostel._id);
        alert('Hostel deleted successfully!');
        if (onDelete) onDelete(hostel._id);
      } catch (error) {
        console.error('Error deleting hostel:', error);
        alert('Failed to delete hostel');
      }
    }
  };

  return (
    <Card 
      className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl border-border hover:border-primary/20 hover:-translate-y-1 mb-8"
      onClick={() => navigate(`/hostel/${hostel._id}`)}

    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={hostel.images[0]} 
          alt={hostel.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {canDelete && (
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">{(hostel.name).toUpperCase()}</h3>
          <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-bold text-sm">{hostel.rating}</span>
            <span className="text-xs text-muted-foreground">({hostel.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{hostel.distance} km from campus</span>
        </div>

        {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Users className="h-4 w-4 text-primary" />
          <span>{hostel.roomTypes.join(', ')}</span>
        </div> */}
      
        <div className="flex flex-wrap gap-2 mb-4">
          {hostel?.amenities?.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs font-medium">
              {amenity}
            </Badge>
          ))}

          {hostel?.amenities?.length > 3 && (
            <Badge variant="secondary" className="text-xs font-medium">
              +{hostel?.amenities?.length - 3} more
            </Badge>
          )}
        </div>


        <div className="flex justify-between items-center pt-4 border-t border-border">
          <div>
            <span className="text-3xl font-bold text-primary">KSh {hostel?.priceFrom?.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground ml-1">/semester</span>
          </div>
          <Badge variant="outline" className="border-primary text-primary font-semibold px-3 py-1">
            {hostel.gender}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default HostelCard;
