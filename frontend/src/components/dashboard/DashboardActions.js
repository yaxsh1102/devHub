import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../../actions/profile";

const DashboardActions = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard Actions</h2>
      <div className="flex flex-col space-y-3">
        <Link
          to="/edit-profile"
          className="flex items-center justify-start bg-gray-700 text-white py-3 px-4 rounded-lg shadow-sm hover:bg-gray-600 transition duration-300"
        >
          <i className="fas fa-user-circle text-gold-500 text-lg mr-3"></i>
          <span className="font-medium">Edit Profile</span>
        </Link>
        <Link
          to="/add-experience"
          className="flex items-center justify-start bg-gray-700 text-white py-3 px-4 rounded-lg shadow-sm hover:bg-gray-600 transition duration-300"
        >
          <i className="fab fa-black-tie text-gold-500 text-lg mr-3"></i>
          <span className="font-medium">Add Experience</span>
        </Link>
        <Link
          to="/add-education"
          className="flex items-center justify-start bg-gray-700 text-white py-3 px-4 rounded-lg shadow-sm hover:bg-gray-600 transition duration-300"
        >
          <i className="fas fa-graduation-cap text-gold-500 text-lg mr-3"></i>
          <span className="font-medium">Add Education</span>
        </Link>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-700">
        <button
          onClick={() => dispatch(deleteAccount())}
          className="text-red-400 hover:text-red-300 text-sm font-medium transition duration-300"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default DashboardActions;