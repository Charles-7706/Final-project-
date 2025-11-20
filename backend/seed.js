require('dotenv').config();
const mongoose = require('mongoose');
const Hostel = require('./models/hostel'); // adjust path if needed

// Connect to MongoDB
mongoose.connect("mongodb+srv://mern-stack:Commitment16@cluster0.e3wugbl.mongodb.net/hostelhub?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Mock data
const hostels = [
  {
    _id: "650b1f4c2f1b2c001234abcd",
    landlordId: "691c3b3a6bd805a4dd349b93",
    institutionId: "650a1f4c2f1b2c0098765432",
    name: "Sunny Side Hostel",
    description: "A cozy hostel near campus with all modern amenities.",
    gender: "mixed",
    priceFrom: 12000,
    distanceFromCampusMeters: 500,
    isVerified: true,
    amenities: ["WiFi", "Laundry", "Cafeteria", "Parking", "Study Room"],
    images: [
      "https://images.unsplash.com/photo-1763251177167-85a9ca1966a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1763251177167-85a9ca1966a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: { type: "Point", coordinates: [36.8219, -1.2921] },
  },
  {
    _id: "650b1f4c2f1b2c001234abce",
    landlordId: "691c3b3a6bd805a4dd349b93",
    institutionId: "650a1f4c2f1b2c0098765432",
    name: "Green Leaf Hostel",
    description: "Affordable hostel with a quiet environment for studying.",
    gender: "female",
    priceFrom: 8000,
    distanceFromCampusMeters: 800,
    isVerified: false,
    amenities: ["WiFi", "Parking", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1763251177167-85a9ca1966a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1763251177167-85a9ca1966a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: { type: "Point", coordinates: [36.8225, -1.2900] },
  },
  {
    _id: "650b1f4c2f1b2c001234abcf",
    landlordId: "691c3b3a6bd805a4dd349b93",
    institutionId: "650a1f4c2f1b2c0098765432",
    name: "Campus View Hostel",
    description: "Modern rooms with all-inclusive facilities for students.",
    gender: "male",
    priceFrom: 15000,
    distanceFromCampusMeters: 300,
    isVerified: true,
    amenities: ["WiFi", "Laundry", "Cafeteria", "Gym", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1763251177167-85a9ca1966a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1763251177167-85a9ca1966a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    location: { type: "Point", coordinates: [36.8230, -1.2930] },
  },
];

module.exports = hostels;

async function seedDB() {
  try {
    await Hostel.deleteMany({}); // optional: clear existing data
    await Hostel.insertMany(hostels);
    console.log("Mock hostels added successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

seedDB();
