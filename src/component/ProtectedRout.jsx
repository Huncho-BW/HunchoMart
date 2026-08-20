import React, { useContext } from "react";
import { AuthenticatonContext } from "../context/AuthenticatonContext";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRount({ children }) {
  const { user } = useContext(AuthenticatonContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
    console.log("Protected user:", user);
  }
  return children;
  console.log("Login successful:", formData);
}
