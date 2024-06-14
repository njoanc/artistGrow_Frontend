import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Google from "./components/pages/socialSignup/Google";
import Spotify from "./components/pages/socialSignup/Spotify";
import SignupWithFacebook from "./components/pages/socialSignup/SignupWithFacebook";
import SignupForm from "./components/pages/SignupForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/google" element={<Google />} />
      <Route path="/spotify" element={<Spotify />} />
      <Route path="/facebook" element={<SignupWithFacebook />} />
      <Route path="/signup" element={<SignupForm />} />
    </Routes>
  );
};

export default App;
