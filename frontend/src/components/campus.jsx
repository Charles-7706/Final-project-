import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import api from '@/lib/api';
function CampusPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [institutions, setInstitutions]= useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("institution", name);
    navigate("/hostels")
  }
  useEffect(()=>{
    const fetchInstitutions = async ()=>{
      const response = await api.institutions();
      setInstitutions(response);
    }
    fetchInstitutions();
  },[])
  return (
  <div>
    <form action="" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-bold mb-6">Campus Selection</h2>
      <p className="text-lg">Select your campus to explore available hostels and accommodations.</p>
      <Input type='search' list='search-options'
      placeholder='Search for your campus' className="mt-4"
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <datalist id='search-options'>
        {institutions.map((inst)=>(
          <option key={inst._id} value={inst.name}/>
        ))}
      </datalist>
      <Button type="submit" className="mt-4">Search</Button>
    </form>
  </div>
  );
}
export default CampusPage;