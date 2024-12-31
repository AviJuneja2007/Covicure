# Covicure 🩺💊

Covicure is a full-stack healthcare web application that combines real-time COVID-19 updates, an e-commerce platform for medicines and lab tests, and a blood donor management system. This application is designed to simplify access to healthcare while providing secure and seamless functionalities to its users.

![Homepage](https://github.com/AviJuneja2007/Covicure/blob/main/1.png?raw=true)

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

## Installation and Setup 🛠️

Follow these steps to run the **Covicure** application locally.

### Prerequisites
Before setting up the project, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (Running locally or via a cloud service like MongoDB Atlas)
- [Git](https://git-scm.com/)

---

## Steps to Install and Run Covicure

### Step 1: Clone the Repository
   First, clone the project repository from GitHub:
   ```bash
   git clone https://github.com/AviJuneja2007/Covicure.git
   cd Covicure
   ```

### Step 2: Set Up the Backend
1. Navigate to the backend folder:
   ```bash
   cd backend

2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a .env file in the backend folder.
   - Add the following variables:
   ```bash
   makefile
   MONGO_URI=<Your MongoDB connection string>
   JWT_SECRET=<Your secret key for JWT>
   ```

4. Start the backend server:
   ```bash
   nodemon app.js
   ```

### Step 3: Set Up the Frontend
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
      
2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Start the frontend development server:
   ```bash
   npm start
   ```
   
   The application will open in your default browser at:
   ```bash
   http://localhost:3000
   ```
## Screenshots

### Homepage
The homepage provides COVID-19 awareness content, precautionary measures, and links to other features.
![Homepage](https://github.com/AviJuneja2007/Covicure/blob/main/1.png?raw=true)

---

### Buy Page
Users can browse and purchase COVID-19-related products such as masks and sanitizers.
![Buy Page](link_to_buy_page_screenshot)

---

### Lab Test Booking
This page allows users to book COVID-19 lab tests conveniently.
![Lab Test Booking](link_to_lab_test_booking_screenshot)

---

### Donor Search
Users can search for plasma or blood donors based on their location and blood type.
![Donor Search](link_to_donor_search_screenshot)

---

### Cart Management
The cart page enables users to view, add, or remove items from their cart and proceed to checkout.
![Cart Management](link_to_cart_management_screenshot)

---

### Signup and Login
Users can create an account or log in to access personalized features like their order history and bookings.
![Signup and Login](link_to_signup_login_screenshot)

---

### Error Page
A user-friendly error page for when a requested route or feature is unavailable.
![Error Page](link_to_error_page_screenshot)

---

### Place Order
Allows users to confirm their purchase and finalize their orders.
![Place Order](link_to_place_order_screenshot)

