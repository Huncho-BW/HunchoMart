import React, { useContext, Navigate } from "react";
import { AuthenticatonContext } from "../context/AuthenticatonContext";

export default function ProtectedCheckOut() {
  const { user } = useContext(AuthenticatonContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
