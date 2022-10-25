import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default Privateroute;