
import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";

export const AuthHub = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>AuthHub Page</h1>
      <div>
        <h2>Login Component</h2>
        <Login />
      </div>
      <div>
        <h2>Register Component</h2>
        <Register />
      </div>
      <div>
        <h2>Private Route Component</h2>
        <PrivateRoute />
      </div>
    </div>
  );
};
