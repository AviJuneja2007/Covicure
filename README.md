# Covicure 🩺💊

Covicure is a full-stack healthcare web application that combines real-time COVID-19 updates, an e-commerce platform for medicines and lab tests, and a blood donor management system. This application is designed to simplify access to healthcare while providing secure and seamless functionalities to its users.

## Features 🚀
### 🦠 Real-Time COVID-19 Stats
- Displays live COVID-19 data, including confirmed cases, recoveries, and deaths.
- Data fetched from a public **COVID-19 API** for global updates.
### 🛍️ E-Commerce for Healthcare
- Users can browse a **catalog of medicines** and **pathological lab tests**.
- Add products to a **shopping cart** and **place orders**.
### 🩸 Blood Donor Management
- **Find local blood donors** using a local API.
- **Join as a blood donor**, with data securely stored in a **MongoDB cluster** for public access after verification.
### 🔐 Secure User Authentication
- **JWT authentication** for login and signup.
- **Bcrypt** for password encryption.
### 📋 Cart Functionality
- Add lab tests and medicines to the cart.
- Complete the checkout process to place orders.

## Technical Summary
### 1. Frontend 
The frontend is built using **React.js** and features a responsive and interactive user interface. 

#### Key Highlights:
- **React Router**: Used for navigation between pages.
- **State Management**: Utilizes `useState`, `useReducer`, and the Context API for managing user authentication and cart state.
- **Styling**: Designed with Bootstrap and custom CSS for a clean and responsive UI.

#### Key Pages:
- **Home**: Displays COVID-19 awareness content.
- **Buy Page**: Lists products available for purchase.
- **Book Test**: Allows users to book lab tests.
- **Find Donor**: Helps users locate plasma or blood donors.
- **Cart**: Manages products added to the cart.
- **Signup/Login**: Facilitates user registration and authentication.

### 2. Backend
The backend is built using **Node.js** with **Express.js** to create a RESTful API for business logic and data handling.

#### Key Features:
- **API Endpoints**:
  - `/auth`: Handles user authentication (signup, login, logout).
  - `/products`: Fetches product listings and manages cart operations.
  - `/tests`: Handles lab test bookings.
  - `/donors`: Retrieves donor data based on user queries.
  - `/cart`: Manages user shopping cart.
- **Middleware**:
  - Body parsing for request data.
  - JWT for secure authentication.
- **Error Handling**: Comprehensive handling for unexpected errors.

### 3. Database
The database layer uses **MongoDB**, managed via **Mongoose**.

#### Collections:
- **Users**: Stores user credentials and session data.
- **Products**: Stores product details.
- **LabTests**: Records lab test bookings.
- **Donors**: Maintains donor information.
- **Orders**: Logs user order history.

