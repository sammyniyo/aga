import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import MusicSheetEditor from "./components/MusicSheetEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/editor" element={<MusicSheetEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
