import axios from "axios";
import toast from 'react-hot-toast';
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types";

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/posts");
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Get post
export const getPost = postId => async dispatch => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/posts/${postId}`);
    dispatch({ type: GET_POST, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Toggle Like
export const toggleLike = postId => async dispatch => {
  try {
    const res = await axios.post(`http://127.0.0.1:8000/api/posts/${postId}/like`);
    dispatch({ type: UPDATE_LIKES, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Delete Post
export const deletePost = postId => async dispatch => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/posts/${postId}`);
    dispatch({ type: DELETE_POST, payload: postId });
    toast.success("Post Removed");
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Add Post
export const addPost = formData => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/posts", formData, config);
    dispatch({ type: ADD_POST, payload: res.data });
    toast.success("Post Added");
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Add Comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const res = await axios.post(
      `http://127.0.0.1:8000/api/posts/${postId}/comments`,
      formData,
      config
    );
    dispatch({ type: ADD_COMMENT, payload: res.data });
    toast.success("Comment Added");
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/posts/comments/${commentId}`);
    dispatch({ type: REMOVE_COMMENT, payload: commentId });
    toast.success("Comment Removed");
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
    toast.error(`Error: ${err.response.statusText}`);
  }
};
