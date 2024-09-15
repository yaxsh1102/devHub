import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../actions/auth";

const Navbar = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const { isAuthenticated, loading } = auth;

  const onLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  const guestLinks = (
    <ul className="flex space-x-4">
      <li>
        <NavLink
          to="/profiles"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );

  const authLinks = (
    <ul className="flex space-x-4">
      <li>
        <NavLink
          to="/profiles"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/posts"
          className="text-gray-300 hover:text-white transition duration-200"
        >
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="text-gray-300 hover:text-white transition duration-200 flex items-center"
        >
          <i className="fas fa-user"></i>{" "}
          <span className="ml-1 hidden sm:inline">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <a
          href="/logout"
          onClick={onLogout}
          className="text-gray-300 hover:text-white transition duration-200 flex items-center"
        >
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="ml-1 hidden sm:inline">Logout</span>
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gray-900 p-4 w-full shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <Link to="/">
            <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>
        {!loading && (
          <div>{isAuthenticated ? authLinks : guestLinks}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
