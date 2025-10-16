import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <h2>🎉 Welcome to the Platform!</h2>
      <p>Your registration was successful.</p>
      <Link to="/register" className="btn btn-primary rounded-0 mt-3">
        Back to Register
      </Link>
    </div>
  );
}

export default Welcome;
