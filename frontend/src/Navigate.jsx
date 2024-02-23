import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Login from "./pages/Login"; // Import your Login component
import SignupPage from "./pages/SignupPage"; // Import your Signup component

function Navigater() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signuppage" element={<SignupPage />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect "/" to "/login" */}
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