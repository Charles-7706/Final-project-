const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/user');
const Institution = require('../models/instituitions');
const Hostel = require('../models/hostel');
const Booking = require('../models/bookings');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Institution.deleteMany({});
    await Hostel.deleteMany({});
    await Booking.deleteMany({});

    // Create institutions
    const institutions = await Institution.insertMany([
      { name: 'University of Nairobi', location: 'Nairobi', type: 'Public' },
      { name: 'Moi University', location: 'Eldoret', type: 'Public' },
      { name: 'Kenyatta University', location: 'Nairobi', type: 'Public' },
      { name: 'Egerton University', location: 'Nakuru', type: 'Public' },
      { name: 'JKUAT', location: 'Kiambu', type: 'Public' },
      { name: 'Maseno University', location: 'Kisumu', type: 'Public' },
      { name: 'MMUST', location: 'Kakamega', type: 'Public' },
      { name: 'Chuka University', location: 'Chuka', type: 'Public' },
      { name: 'Technical University of Kenya', location: 'Nairobi', type: 'Public' },
      { name: 'Technical University of Mombasa', location: 'Mombasa', type: 'Public' },
      { name: 'Dedan Kimathi University of Technology', location: 'Nyeri', type: 'Public' },
      { name: 'Kisii University', location: 'Kisii', type: 'Public' },
      { name: 'Kibabii University', location: 'Bungoma', type: 'Public' },
      { name: 'Karatina University', location: 'Karatina', type: 'Public' },
      { name: 'Laikipia University', location: 'Nyahururu', type: 'Public' },
      { name: 'South Eastern Kenya University', location: 'Kitui', type: 'Public' },
      { name: 'University of Kabianga', location: 'Kericho', type: 'Public' },
      { name: 'Rongo University', location: 'Migori', type: 'Public' },
      { name: 'Meru University of Science & Technology', location: 'Meru', type: 'Public' },
      { name: 'Multimedia University of Kenya', location: 'Nairobi', type: 'Public' }
    ]);

    // Create users
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const users = await User.insertMany([
      {
        name: 'John Student',
        email: 'student@test.com',
        phone: '+254700000001',
        password: hashedPassword,
        role: 'student'
      },
      {
        name: 'Mary Owner',
        email: 'owner@test.com',
        phone: '+254700000002',
        password: hashedPassword,
        role: 'owner'
      },
      {
        name: 'Admin User',
        email: 'admin@test.com',
        phone: '+254700000003',
        password: hashedPassword,
        role: 'admin'
      }
    ]);

    // Create hostels
    const hostels = await Hostel.insertMany([
      {
        name: 'UoN Comfort Inn',
        description: 'Modern hostel near University of Nairobi with excellent facilities',
        gender: 'mixed',
        priceFrom: 15000,
        distance: 2.5,
        amenities: ['WiFi', 'Security', 'Parking', 'Laundry', 'Kitchen'],
        images: ['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'],
        location: { type: 'Point', coordinates: [-1.2921, 36.8219] },
        landlordId: users[1]._id,
        institutionId: institutions[0]._id,
        rating: 4.5,
        reviews: 23,
        vacancies: 15
      },
      {
        name: 'KU Student Paradise',
        description: 'Affordable accommodation near Kenyatta University',
        gender: 'female',
        priceFrom: 12000,
        distance: 1.8,
        amenities: ['WiFi', 'Security', 'Study Room', 'Kitchen'],
        images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
        location: { type: 'Point', coordinates: [-1.1509, 36.9326] },
        landlordId: users[1]._id,
        institutionId: institutions[2]._id,
        rating: 4.2,
        reviews: 18,
        vacancies: 8
      },
      {
        name: 'JKUAT Campus Lodge',
        description: 'Premium hostel near JKUAT with modern amenities',
        gender: 'male',
        priceFrom: 18000,
        distance: 1.2,
        amenities: ['WiFi', 'Security', 'Gym', 'Parking', 'Laundry', 'Kitchen', 'Study Room'],
        images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'],
        location: { type: 'Point', coordinates: [-1.0910, 37.0143] },
        landlordId: users[1]._id,
        institutionId: institutions[4]._id,
        rating: 4.7,
        reviews: 31,
        vacancies: 5
      },
      {
        name: 'Moi Unity Hostel',
        description: 'Budget-friendly option near Moi University',
        gender: 'mixed',
        priceFrom: 10000,
        distance: 3.0,
        amenities: ['WiFi', 'Security', 'Kitchen'],
        images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'],
        location: { type: 'Point', coordinates: [0.5143, 35.2698] },
        landlordId: users[1]._id,
        institutionId: institutions[1]._id,
        rating: 3.8,
        reviews: 12,
        vacancies: 20
      },
      {
        name: 'Egerton Green Hostel',
        description: 'Eco-friendly hostel near Egerton University',
        gender: 'mixed',
        priceFrom: 13000,
        distance: 2.0,
        amenities: ['WiFi', 'Security', 'Garden', 'Kitchen', 'Study Room'],
        images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'],
        location: { type: 'Point', coordinates: [-0.3924, 36.0435] },
        landlordId: users[1]._id,
        institutionId: institutions[3]._id,
        rating: 4.3,
        reviews: 27,
        vacancies: 12
      },
      {
        name: 'Maseno Heights',
        description: 'Comfortable accommodation near Maseno University',
        gender: 'female',
        priceFrom: 11000,
        distance: 1.5,
        amenities: ['WiFi', 'Security', 'Kitchen', 'Laundry'],
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'],
        location: { type: 'Point', coordinates: [0.0236, 34.6059] },
        landlordId: users[1]._id,
        institutionId: institutions[5]._id,
        rating: 4.1,
        reviews: 15,
        vacancies: 18
      }
    ]);

    // Create sample bookings
    await Booking.insertMany([
      {
        studentId: users[0]._id,
        hostelId: hostels[0]._id,
        amount: 15000,
        status: 'paid',
        paymentRef: 'MPX123456789'
      },
      {
        studentId: users[0]._id,
        hostelId: hostels[1]._id,
        amount: 12000,
        status: 'pending'
      }
    ]);

    console.log('✅ Mock data seeded successfully!');
    console.log('📧 Test accounts:');
    console.log('   Student: student@test.com / password123');
    console.log('   Owner: owner@test.com / password123');
    console.log('   Admin: admin@test.com / password123');
    
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

connectDB().then(() => seedData());