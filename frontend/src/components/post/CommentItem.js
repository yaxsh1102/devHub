import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <Link to={`/profile/${comment.user}`}>
          <img
            className="w-10 h-10 rounded-full object-cover mr-4"
            src={comment.avatar}
            alt={comment.name}
          />
        </Link>
        <div>
          <Link to={`/profile/${comment.user}`} className="text-lg font-semibold text-white hover:text-gray-400">
            {comment.name}
          </Link>
          <p className="text-gray-500 text-sm">
            <Moment format="DD/MM/YYYY">{comment.date}</Moment>
          </p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{comment.text}</p>
      {!auth.loading && comment.user === auth.user.id && (
        <button
          onClick={() => dispatch(deleteComment(postId, comment.id))}
          className="btn bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};

export default CommentItem;
