# HostelHub - University Hostel Booking System

A full-stack web application for managing university hostel bookings in Kenya. Students can browse and book hostels while hostel owners can manage their properties.

## 🌐 Live Demo

**Frontend**: [(https://final-project-one-sand.vercel.app/)]

> **Note**: Replace the placeholder links above with actual deployment URLs after deploying to production.

## 🚀 Features

### For Students
- Browse hostels by university/campus
- Filter hostels by gender, price, distance, and amenities
- View detailed hostel information with images and amenities
- Book hostel rooms with payment tracking
- View booking history and status

### For Hostel Owners
- Add and manage hostel listings
- Set pricing, amenities, and availability
- View booking requests
- Role-based access control

### For Admins
- Full system access
- Manage users and hostels
- System administration

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

### Frontend
- **React** with Vite
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Radix UI** components
- **Lucide React** icons

## 🏫 Supported Universities

The system includes 20+ major Kenyan universities:
- University of Nairobi
- Kenyatta University
- JKUAT
- Moi University
- Egerton University
- And many more...

## 📱 Usage

1. **Sign Up**: Choose role (Student/Owner) and create account
2. **Select Campus**: Choose your university from the list
3. **Browse Hostels**: View available hostels for your campus
4. **Book Hostel**: Select hostel and create booking
5. **Track Booking**: Monitor payment status and booking details

## 🔐 Authentication

- JWT-based authentication
- Role-based access control (Student, Owner, Admin)
- Secure password hashing with bcrypt
- Token expiration handling

## 📊 Database Schema

### Users
- Name, email, phone, password
- Role (student, owner, admin)

### Institutions
- Name, location, type (public/private)

### Hostels
- Name, description, pricing
- Gender preference, amenities
- Location, distance from campus
- Images, ratings, availability

### Bookings
- Student ID, hostel ID
- Amount, status (pending/paid/cancelled/rejected)
- Payment reference, timestamps

## 🎨 UI/UX Features

- Responsive design for all devices
- Modern gradient backgrounds
- Interactive hover effects
- Loading states and error handling
- Role-based navigation
- Grid layouts for hostel listings
- Status badges for bookings

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Hostels
- `GET /api/hostels` - Get all hostels
- `GET /api/hostels/:id` - Get hostel by ID
- `POST /api/hostels` - Create hostel (Owner/Admin)
- `PUT /api/hostels/:id` - Update hostel
- `DELETE /api/hostels/:id` - Delete hostel

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking
- `PATCH /api/bookings/:id/status` - Update booking status

### Institutions
- `GET /api/institutions` - Get all institutions
- `POST /api/institutions` - Create institution

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or cloud database
2. Configure environment variables
3. Deploy to Heroku, Railway, or similar platform

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to Vercel, Netlify, or similar platform
3. Update API URL in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Developed as a full-stack web development project for university hostel management in Kenya.

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.