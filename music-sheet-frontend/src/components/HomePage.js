import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Welcome to Music Sheet Maker</h1>
    <p>Create and edit music sheets with ease.</p>
    <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
  </div>
);

export default HomePage;
