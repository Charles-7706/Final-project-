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
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Link to="/hostels">
              <Button variant="outline" className="hover:bg-blue-50 border-blue-200 text-xs sm:text-sm px-3 py-2">
                Browse Hostels
              </Button>
            </Link>
            
            {selectedInstitution && (
              <Link to="/add">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md text-xs sm:text-sm px-3 py-2">
                  + Add Hostel
                </Button>
              </Link>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <div className="bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 shadow-sm">
              <span className="text-gray-600">Role:</span>
              <span className="ml-1 font-medium text-blue-600 capitalize">{user.role}</span>
            </div>
            
            {selectedInstitution && (
              <div className="bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 shadow-sm">
                <span className="text-gray-600">Campus:</span>
                <span className="ml-1 font-medium text-green-600 truncate max-w-20 sm:max-w-none">{selectedInstitution}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleBasedNav;