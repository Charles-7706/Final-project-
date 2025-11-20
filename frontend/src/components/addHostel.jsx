import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

function AddHostel() {
    return (
        <>
        Add Hostel
        <Card className='px-4'>
            <Label>Name</Label>
            <Input></Input>
            <Label>Description</Label>
            <Textarea></Textarea>
            <Label>Gender</Label>
            <Label>Price Range</Label>
            <Label>Distance</Label>
            <Label>Amenities</Label>
            <Label htmlFor="picture">Pictures</Label>
            <Input id="picture" type="file" />
            <Label>Location</Label>
        </Card>
        </>
    );
}

export default AddHostel;