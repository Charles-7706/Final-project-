// import hostel1 from '@/assets/hostel-1.jpg';
// import hostel2 from '@/assets/hostel-2.jpg';
// import hostel3 from '@/assets/hostel-3.jpg';

let hostel1 = 'https://images.unsplash.com/photo-1763251177167-85a9ca1966a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
let hostel2 = 'https://images.unsplash.com/photo-1501183638714-8c3b0e3f2b5d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
let hostel3 = 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
export const mockHostels = [
  {
    id: '1',
    name: 'Campus View Hostel',
    image: hostel1,
    price: 3500,
    distance: 0.5,
    rating: 4.8,
    reviews: 124,
    vacancies: 8,
    address: '123 University Road',
    institution: 'University of Nairobi',
    campus: 'Main Campus',
    roomTypes: ['Single', 'Double', 'Shared'],
    amenities: ['Wi-Fi', 'Laundry', 'Security', 'Water', 'Electricity', 'Study Room'],
    gender: 'Mixed',
    description: 'Modern hostel with excellent amenities and close proximity to campus.',
    images: [hostel1, hostel2, hostel3],
    caretaker: {
      name: 'John Kamau',
      phone: '+254 712 345 678',
      email: 'kamau@campusview.co.ke'
    }
  },
  {
    id: '2',
    name: 'Scholars Haven',
    image: hostel2,
    price: 4200,
    distance: 1.2,
    rating: 4.6,
    reviews: 89,
    vacancies: 5,
    address: '45 Academic Lane',
    institution: 'University of Nairobi',
    campus: 'Main Campus',
    roomTypes: ['Single', 'Double'],
    amenities: ['Wi-Fi', 'Security', 'Water', 'Electricity', 'Parking'],
    gender: 'Female',
    description: 'Safe and comfortable accommodation for female students.',
    images: [hostel2, hostel1, hostel3],
    caretaker: {
      name: 'Grace Muthoni',
      phone: '+254 723 456 789',
      email: 'grace@scholarshaven.co.ke'
    }
  },
  {
    id: '3',
    name: 'Comfort Lodge',
    image: hostel3,
    price: 2800,
    distance: 2.0,
    rating: 4.4,
    reviews: 156,
    vacancies: 12,
    address: '78 Student Street',
    institution: 'Kenyatta University',
    campus: 'Main Campus',
    roomTypes: ['Shared', 'Double'],
    amenities: ['Wi-Fi', 'Laundry', 'Water', 'Electricity'],
    gender: 'Male',
    description: 'Affordable accommodation with all basic amenities.',
    images: [hostel3, hostel2, hostel1],
    caretaker: {
      name: 'Peter Ochieng',
      phone: '+254 734 567 890',
      email: 'peter@comfortlodge.co.ke'
    }
  },
  {
    id: '4',
    name: 'Elite Student Residence',
    image: hostel1,
    price: 5500,
    distance: 0.8,
    rating: 4.9,
    reviews: 67,
    vacancies: 3,
    address: '12 Premium Avenue',
    institution: 'JKUAT',
    campus: 'Juja Campus',
    roomTypes: ['Single'],
    amenities: ['Wi-Fi', 'Laundry', 'Security', 'Water', 'Electricity', 'Gym', 'Study Room', 'Kitchen'],
    gender: 'Mixed',
    description: 'Premium hostel with modern facilities and top-notch security.',
    images: [hostel1, hostel3, hostel2],
    caretaker: {
      name: 'Mary Wanjiku',
      phone: '+254 745 678 901',
      email: 'mary@eliteresidence.co.ke'
    }
  },
  {
    id: '5',
    name: 'Budget Stays',
    image: hostel2,
    price: 2200,
    distance: 3.5,
    rating: 4.0,
    reviews: 203,
    vacancies: 20,
    address: '90 Economy Road',
    institution: 'JKUAT',
    campus: 'Juja Campus',
    roomTypes: ['Shared'],
    amenities: ['Water', 'Electricity', 'Security'],
    gender: 'Mixed',
    description: 'Most affordable option with basic amenities for budget-conscious students.',
    images: [hostel2, hostel1],
    caretaker: {
      name: 'David Kimani',
      phone: '+254 756 789 012',
      email: 'david@budgetstays.co.ke'
    }
  },
  {
    id: '6',
    name: 'Green Valley Hostel',
    image: hostel3,
    price: 3800,
    distance: 1.5,
    rating: 4.7,
    reviews: 98,
    vacancies: 6,
    address: '34 Valley View',
    institution: 'Strathmore University',
    campus: 'Main Campus',
    roomTypes: ['Single', 'Double'],
    amenities: ['Wi-Fi', 'Laundry', 'Security', 'Water', 'Electricity', 'Garden'],
    gender: 'Female',
    description: 'Peaceful environment with beautiful gardens and secure premises.',
    images: [hostel3, hostel1, hostel2],
    caretaker: {
      name: 'Sarah Njeri',
      phone: '+254 767 890 123',
      email: 'sarah@greenvalley.co.ke'
    }
  }
];
