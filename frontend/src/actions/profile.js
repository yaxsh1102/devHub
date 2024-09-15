import axios from "axios";
import { toast } from "react-hot-toast";

import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  GITHUB_ERROR,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from "./types";

// Get Current User Profile
export const getCurrentProfile = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/profile/me");
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Get All Profiles
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/profiles");
    dispatch({ type: GET_PROFILES, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Get Profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/profile/${userId}`);
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Get Github Repos
export const getGithubRepos = username => async dispatch => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/github/${username}`);
    dispatch({ type: GET_REPOS, payload: res.data });
  } catch (err) {
    dispatch({
      type: GITHUB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify(formData);

    const res = await axios.post("http://127.0.0.1:8000/api/profile", body, config);

    dispatch({ type: GET_PROFILE, payload: res.data });

    toast.success(edit ? "Profile Updated" : "Profile Created");

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data;

    if (errors["status"]) {
      errors["status"].forEach(msg =>
        toast.error(`Status: ${msg}`)
      );
    }

    if (errors["skills"]) {
      errors["skills"].forEach(msg =>
        toast.error(`Skills: ${msg}`)
      );
    }

    if (errors["bio"]) {
      errors["bio"].forEach(msg =>
        toast.error(`Bio: ${msg}`)
      );
    }

    if (errors["website"]) {
      errors["website"].forEach(msg =>
        toast.error(`Website: ${msg}`)
      );
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Experience
export const addExperience = (formData, history) => async dispatch => {
  try {
    if (formData["to_date"] === "") {
      delete formData.to_date;
    }
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify(formData);
    const res = await axios.post("http://127.0.0.1:8000/api/profile/experience", body, config);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    toast.success("Experience added");

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data;

    if (errors["title"]) {
      errors["title"].forEach(msg =>
        toast.error(`Title: ${msg}`)
      );
    }

    if (errors["company"]) {
      errors["company"].forEach(msg =>
        toast.error(`Company: ${msg}`)
      );
    }

    if (errors["location"]) {
      errors["location"].forEach(msg =>
        toast.error(`Location: ${msg}`)
      );
    }

    if (errors["from_date"]) {
      toast.error("From Date is required");
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Education
export const addEducation = (formData, history) => async dispatch => {
  try {
    if (formData["to_date"] === "") {
      delete formData.to_date;
    }
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify(formData);
    const res = await axios.post("http://127.0.0.1:8000/api/profile/education", body, config);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    toast.success("Education added");

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data;

    if (errors["school"]) {
      errors["school"].forEach(msg =>
        toast.error(`School: ${msg}`)
      );
    }

    if (errors["degree"]) {
      errors["degree"].forEach(msg =>
        toast.error(`Degree: ${msg}`)
      );
    }

    if (errors["field_of_study"]) {
      errors["field_of_study"].forEach(msg =>
        toast.error(`Field of Study: ${msg}`)
      );
    }

    if (errors["from_date"]) {
      toast.error("From Date is required");
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Experience
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`http://127.0.0.1:8000/api/profile/experience/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });

    toast.success("Experience Removed");
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Delete Education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`http://127.0.0.1:8000/api/profile/education/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });

    toast.success("Education Removed");
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Delete Account and profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await axios.delete("/api/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      toast.success("Your account has been deleted permanently");
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
      toast.error(`Error: ${err.response.statusText}`);
    }
  }
};
