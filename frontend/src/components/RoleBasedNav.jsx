import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { getUserFromToken } from '@/lib/auth';

function RoleBasedNav() {
  const [user, setUser] = useState(null);
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  useEffect(() => {
    const userData = getUserFromToken();
    const institution = localStorage.getItem('institution');
    
    setUser(userData);
    setSelectedInstitution(institution);
  }, []);

  if (!user || (user.role !== 'owner' && user.role !== 'admin')) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/hostels">
              <Button variant="outline" className="hover:bg-blue-50 border-blue-200">
                Browse Hostels
              </Button>
            </Link>
            
            {selectedInstitution && (
              <Link to="/add">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                  + Add Hostel
                </Button>
              </Link>
            )}
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <div className="bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <span className="text-gray-600">Role:</span>
              <span className="ml-1 font-medium text-blue-600 capitalize">{user.role}</span>
            </div>
            
            {selectedInstitution && (
              <div className="bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                <span className="text-gray-600">Campus:</span>
                <span className="ml-1 font-medium text-green-600">{selectedInstitution}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleBasedNav;