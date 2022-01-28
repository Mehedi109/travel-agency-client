import React from "react";
import { useLocation, Navigate } from "react-router";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Spinner />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
