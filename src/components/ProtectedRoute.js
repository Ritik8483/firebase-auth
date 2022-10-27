import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContact";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("children", children);
  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
