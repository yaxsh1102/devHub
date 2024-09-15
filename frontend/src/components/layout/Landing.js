import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Developer Connector</h1>
        <p className="text-gray-300 text-lg mb-8">
          Create a developer profile/portfolio, share posts, and get help from
          other developers
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Sign Up
          </Link>
          <Link to="/login" className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
