import { useState } from 'react';
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import {api} from '@/lib/api';

function AddHostel() {
    const name = localStorage.getItem("institution");
    const [hostelData, setHostelData] = useState({
        institutionId: "691c6404edbacddb8a4ab319",
        name: '',
        description: '',
        gender: '',
        priceFrom: '',
        distance: '',
        amenities: "",
        pictures: "",
        location: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const inst = await api.institutionbyname(name);
          const payload = {
                ...hostelData,
                institutionId: inst._id,
                amenities: hostelData.amenities.split(",").map(a => a.trim()),
                priceFrom: Number(hostelData.priceFrom),
            };
        console.log(payload);
        try{
            await api.Addhostel(payload);
            alert('Hostel added successfully!');
            // Reset form after submission
            // setHostelData({
            //     name: '',
            //     description: '',
            //     gender: '',
            //     priceFrom: '',
            //     distance: '',
            //     amenities: [],
            //     pictures: [],
            //     location: {},
            // });
        } catch (error) {
            console.error("Error adding hostel:", error);
            alert('Failed to add hostel. Please try again.');
        }
    };

    return (
        <>
        Add Hostel
        <Card className='px-4'>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input 
                    value={hostelData.name}
                    onChange={(e)=> setHostelData({...hostelData, name: e.target.value})}></Input>
                <Label>Description</Label>
                <Textarea
                value={hostelData.description}
                onChange={(e)=> setHostelData({...hostelData, description: e.target.value})}
                ></Textarea>
                <Label>Gender</Label>
                <RadioGroup defaultValue="mixed" className="gap-2"
                value={hostelData.gender}
                onValueChange={(value)=> setHostelData({...hostelData, gender: value})}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <RadioGroupItem value="mixed" id="r1" className="w-4 h-4 border border-gray-300 rounded-full data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"/>
                        <Label htmlFor="r1">Mixed</Label>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <RadioGroupItem value="male" id="r2" className="w-4 h-4 border border-gray-300 rounded-full data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                        <Label htmlFor="r2">Male</Label>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <RadioGroupItem value="female" id="r3" className="w-4 h-4 border border-gray-300 rounded-full data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                        <Label htmlFor="r3">Female</Label>
                    </div>
                </RadioGroup>
                <Label>Price Range</Label>
                <Input type="number" placeholder="Min Price" required
                value={hostelData.priceFrom}
                onChange={(e)=> setHostelData({...hostelData, priceFrom: e.target.value})}
                />
                <Label>Distance</Label>
                <Input type="number" placeholder="Distance from campus" 
                value={hostelData.distance}
                onChange={(e)=> setHostelData({...hostelData, distance: e.target.value})}
                />
                <Label>Amenities</Label>
                <Input type="text" placeholder="Amenities" 
                value={hostelData.amenities}
                onChange={(e)=> setHostelData({...hostelData, amenities: e.target.value})}
                />
                <Label htmlFor="picture">Pictures</Label>
                <Input id="picture" type="file" 
                onChange={(e)=> setHostelData({...hostelData, pictures: e.target.files})}/>
                <Label>Location</Label>
                <Input type="text" placeholder="Location" 
                value={hostelData.location}
                onChange={(e)=> setHostelData({...hostelData, location: e.target.value})}/>
                <Button className="mt-4" type='submit'>Add Hostel</Button>
            </form>
        </Card>
        </>
    );
};

export default AddHostel;