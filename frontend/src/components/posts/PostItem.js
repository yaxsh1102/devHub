import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike, deletePost } from "../../actions/post";

const PostItem = ({ post, showActions }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <Link to={`/profile/${post.user}`}>
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={post.avatar}
            alt={post.name}
          />
        </Link>
        <div>
          <Link to={`/profile/${post.user}`} className="text-xl font-semibold text-white hover:text-gray-400">
            {post.name}
          </Link>
          <p className="text-gray-500 text-sm">
            <Moment format="DD/MM/YYYY">{post.date}</Moment>
          </p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{post.text}</p>
      {showActions && (
        <Fragment>
          <div className="flex items-center space-x-4 mb-4">
            <button
              type="button"
              className="btn bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => dispatch(toggleLike(post.id))}
            >
              <i className="fas fa-thumbs-up"></i>
              {post.likes.length > 0 && <span className="ml-2">{post.likes.length}</span>}
            </button>

            <Link
              to={`/posts/${post.id}`}
              className="btn bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Discussion {post.post_comments.length > 0 && (
                <span className="ml-2 bg-gray-600 px-2 py-1 rounded-full text-sm">{post.post_comments.length}</span>
              )}
            </Link>
            {!auth.loading && auth.user.id === post.user && (
              <button
                type="button"
                className="btn bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={() => dispatch(deletePost(post.id))}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

export default PostItem;
