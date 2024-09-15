import axios from "axios";
import toast from 'react-hot-toast';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/auth");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("http://127.0.0.1:8000/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.token
    });

    dispatch(loadUser());
    toast.success("Registration successful!");
  } catch (err) {
    const errors = err.response.data;

    if (errors["name"]) {
      errors["name"].forEach(msg =>
        toast.error(`Name: ${msg}`)
      );
    }

    if (errors["email"]) {
      errors["email"].forEach(msg =>
        toast.error(`Email: ${msg}`)
      );
    }

    if (errors["password"]) {
      errors["password"].forEach(msg =>
        toast.error(`Password: ${msg}`)
      );
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("http://127.0.0.1:8000/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.token
    });

    dispatch(loadUser());
    toast.success("Login successful!");
  } catch (err) {
    const error = err.response.data.error;

    toast.error(error);

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
  toast.success("Logged out successfully.");
};
