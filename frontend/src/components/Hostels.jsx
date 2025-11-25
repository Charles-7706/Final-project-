import { api } from "@/lib/api";
import { useState, useEffect } from "react";
import HostelCard from "./ui/HostelCard.jsx";


function Hostels() {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchHostels = async () => {
      try {
        const data = await api.hostels();

        const filteredHostels = data.filter((hostel)=> hostel.institutionId.name === localStorage.getItem("institution"));
        setHostels(filteredHostels);

      } catch(err) {
        setError(err.message || "Failed to load hoslels")
      }
      finally{
        setLoading(false)
      }
    };
    fetchHostels();

  }, [])

  const handleHostelDelete = (deletedId) => {
    setHostels(hostels.filter(h => h._id !== deletedId));
  };

  if (loading) return <div className="flex justify-center py-12"><div className="text-lg">Loading hostels...</div></div>;
  if (error) return <div className="text-center py-12 text-red-600">Error: {error}</div>;

  return(
    <div>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Available Hostels</h1>
        <p className="text-sm sm:text-base text-gray-600">Find the perfect accommodation for your stay</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {hostels.map((hostel)=>(
          <HostelCard key={hostel._id} hostel={hostel} onDelete={handleHostelDelete} />
        ))}
      </div>
      
      {hostels.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hostels found for this campus</p>
        </div>
      )}
    </div>
  )
}

export default Hostels;