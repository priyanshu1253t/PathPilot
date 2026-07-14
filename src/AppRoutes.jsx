
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthHub } from "./screens/AuthHub";
import Login from './components/Login';
import Register from "./components/Register";
import { BeanSceneCoffee } from "./screens/BeanSceneCoffee/BeanSceneCoffee";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeanSceneCoffee />} />
        <Route path="/auth" element={<AuthHub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
