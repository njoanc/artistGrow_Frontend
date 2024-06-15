import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import SignupForm from "./components/pages/SignupForm";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
