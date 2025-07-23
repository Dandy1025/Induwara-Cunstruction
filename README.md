# Induwara Construction Management System

A comprehensive online construction management platform built with React.js frontend and Node.js backend.

## Features

### For Customers
- User registration and authentication
- Post construction projects
- Browse and order construction materials
- Profile management
- Project tracking

### For Employees
- Employee registration with profession and experience
- Take on construction jobs
- Order materials and equipment
- Schedule management

### For Suppliers
- Supplier registration with business details
- Manage inventory items
- Process orders
- Delivery management

### Admin Features
- Dashboard with analytics
- Inventory management
- Order management
- Customer management
- Revenue tracking
- Growth analytics
- Reports and notifications

## Technology Stack

### Frontend
- React.js 18
- React Router DOM
- React Bootstrap
- Material-UI (MUI)
- Axios for API calls
- ApexCharts for analytics

### Backend
- Node.js
- Express.js
- MySQL with mysql2
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd induwara-construction-management
```

### 2. Install Dependencies
```bash
# Install root dependencies and all sub-dependencies
npm run install-deps
```

### 3. Database Setup
1. Create a MySQL database named `induwara_contruction_db`
2. Update the database configuration in `backend/.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=induwara_contruction_db
PORT=3000
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Application

#### Development Mode (Both frontend and backend)
```bash
npm run dev
```

#### Or start individually:

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

### 5. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- API Health Check: http://localhost:3000/api/health

## Database Schema

The application automatically creates the following tables:
- `customers` - Customer information
- `employees` - Employee details with profession and experience
- `suppliers` - Supplier information with business details
- `items` - Inventory items
- `projects` - Construction projects

## API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login

### Customer
- `GET /api/profile` - Get customer profile
- `PUT /api/profile` - Update customer profile

### Inventory
- `GET /api/inventory` - Get all inventory items
- `POST /api/inventory` - Add new item (Admin)
- `PUT /api/inventory/:id` - Update item (Admin)
- `DELETE /api/inventory/:id` - Delete item (Admin)

### Projects
- `POST /api/projects` - Create new project
- `GET /api/projects` - Get all projects
- `GET /api/projects/my` - Get customer's projects
- `PUT /api/projects/:id/status` - Update project status

## User Roles

### Customer
- Can register and login
- Post construction projects
- Browse and order materials
- Manage profile

### Employee
- Register with profession and experience
- Take on jobs
- Order materials and equipment

### Supplier
- Register with business details
- Manage inventory
- Process orders

### Admin
- Full system access
- Analytics dashboard
- User management
- Inventory management

## Project Structure

```
induwara-construction-management/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── app.js
│   ├── public/images/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── App.jsx
│   └── public/
└── package.json
```

## Features Implementation Status

✅ **Completed:**
- User authentication system
- Customer, Employee, Supplier registration
- Inventory management
- Project posting
- Shopping cart functionality
- Profile management
- Admin dashboard
- Database integration

🚧 **In Progress:**
- Payment processing
- Order management
- Employee scheduling
- Advanced reporting

📋 **Planned:**
- Real-time notifications
- File upload for project images
- Advanced search and filtering
- Mobile responsiveness improvements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.