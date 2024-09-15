import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import { getPosts } from "../../actions/post";
import PostForm from "./PostForm";

const Posts = () => {
  const { posts, loading } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container mx-auto px-4 py-8 pt-16">
        <h1 className="text-3xl font-bold text-white mb-4">Posts</h1>
        <p className="text-lg text-gray-400 mb-8">
          <i className="fas fa-user"></i> Welcome to the community!
        </p>
        <div className="space-y-6">
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
