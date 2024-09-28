// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/home/auth/Login";
import SignUp from "./pages/home/auth/SignUp";
import ProtectedRoute from "./protected-routes/ProtectedRoute";
import UserDashboard from "./components/client/UserDashboard";
import ResidencyOwnerDashboard from "./pages/recidencies/ResidencyOwnerDashboard";
import MultiMessManagerDashboard from "./pages/mess/MultiMessManagerDashboard";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./pages/Layout";
import RegisterRoom from "./pages/recidencies/RegisterRoom";
import BookRooms from "./pages/client/BookRooms";
import RentARoom from "./pages/client/RentARoom";
import RoomMates from "./pages/client/RoomMates";
import MessOutlets from "./pages/mess/MessOutlets";

function App() {
  return (
 <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
            <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />

          {/* Protected Routes */}
            <Route element={<Layout />}>
            <Route element={<ProtectedRoute allowedTypes={["User"]} />}>
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/book-rooms" element={<BookRooms />} />
              <Route path="/rent-a-room" element={<RentARoom />} />
              <Route path="/room-mates" element={<RoomMates />} />
                <Route path="/mess-outlets" element={<MessOutlets />} />
            </Route>

            <Route element={<ProtectedRoute allowedTypes={["Residency Owner"]} />}>
              <Route path="/residency-owner-dashboard" element={<ResidencyOwnerDashboard />} />
              <Route path="/register-room" element={<RegisterRoom />} />
              </Route>

              <Route element={<ProtectedRoute allowedTypes={["Multi-Mess Manager"]} />}>
              <Route path="/multi-mess-manager-dashboard" element={<MultiMessManagerDashboard />} />
            </Route>
            </Route>

          {/* Redirect all other paths to login if not matched */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
      </AuthProvider> 
    );
  }
  
  export default App;