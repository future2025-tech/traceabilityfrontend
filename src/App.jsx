import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Layout (MUI Navbar + Sidebar)
import Layout from "./layout/Layout";

import Products from "./pages/Products";
import AddProductForm from "./pages/AddProductForm";


function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard routes */}
        <Route
          element={isLoggedIn ? <Layout /> : <Navigate to="/" />}
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/add-product" element={<AddProductForm/>} />
        </Route>

        {/* Default → redirect */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
