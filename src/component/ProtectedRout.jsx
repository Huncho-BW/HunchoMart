import React, { useContext } from "react";
import { AuthenticatonContext } from "../context/AuthenticatonContext";
import { Navigate } from "react-router-dom";
export default function ProtectedRount() {
  const { user } = useContext(AuthenticatonContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
