import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../actions/post";

const PostForm = ({ postId }) => {
  const [formData, setFormData] = useState({ text: "" });

  const dispatch = useDispatch();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <div className="bg-gray-900 p-4 rounded-t-lg">
        <h3 className="text-xl font-semibold text-white">Leave A Comment</h3>
      </div>
      <form
        className="my-4"
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
          className="w-full bg-gray-700 text-gray-300 p-3 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
        ></textarea>
        <input
          type="submit"
          className="btn bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md mt-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default PostForm;
