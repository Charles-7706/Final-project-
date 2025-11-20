import { api } from "@/lib/api";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from './ui/card.jsx';
import HostelCard from "./ui/HostelCard.jsx";

function Hostels() {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchHostels = async () => {
      try {
        const data = await api.hostels();
        setHostels(data);
      } catch(err) {
        setError(err.message || "Failed to load hoslels")
      }
      finally{
        setLoading(false)
      }
    };
    fetchHostels();

  }, [])

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error}</p>

  return(
    <div>
      <p>Hostels</p>
      <div>
        <ul>
          {hostels.map((hostel)=>(
            <HostelCard key={hostel._id} hostel={hostel} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hostels;