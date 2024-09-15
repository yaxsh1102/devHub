import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../actions/post";

const PostForm = ({ postId }) => {
  const [formData, setFormData] = useState({ text: "" });
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-semibold text-white mb-4">Leave A Comment</h3>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(addComment(postId, formData));
          setFormData({ text: "" });
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Comment on this post"
          value={formData.text}
          onChange={e => setFormData({ text: e.target.value })}
          required
          className="bg-gray-700 text-white border border-gray-600 p-3 rounded-lg w-full mb-4 resize-none"
        ></textarea>
        <input
          type="submit"
          className="btn bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default PostForm;
