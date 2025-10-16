import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Welcome from "./Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
