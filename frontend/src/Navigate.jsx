import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Login from "./Login"; // Import your Login component
import SignupPage from "./SignupPage"; // Import your Signup component
import Quiz from './pages/dashboard/Quiz';

function Navigater() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signuppage" element={<SignupPage />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect "/" to "/login" */}
      <Route path="/quiz" element={<Quiz/>} /> 
    </Routes>
  )
}

// function Navigater() {
//   return (
//     <Routes>
//       <Route path="/dashboard/*" element={<Dashboard />} />
//       <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
//     </Routes>
//   )
// }

export default Navigater;