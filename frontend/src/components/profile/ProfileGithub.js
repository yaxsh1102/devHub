import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username }) => {
  const repos = useSelector(state => state.profile.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, [dispatch, username]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">
        <i className="fab fa-github text-gray-400 mr-2"></i> Github Repos
      </h2>
      {repos === null ? (
        <Spinner />
      ) : repos.length > 0 ? (
        repos.map(repo => (
          <div className="repo bg-gray-700 p-4 rounded-lg shadow-sm mb-4" key={repo.id}>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {repo.name}
              </a>
            </h4>
            {repo.description && (
              <p className="text-gray-300 mb-2">{repo.description}</p>
            )}
            <div className="flex space-x-4">
              <span className="bg-blue-800 text-blue-200 py-1 px-2 rounded-full text-sm">
                Stars: {repo.stargazers_count}
              </span>
              <span className="bg-gray-600 text-gray-200 py-1 px-2 rounded-full text-sm">
                Watchers: {repo.watchers_count}
              </span>
              <span className="bg-green-800 text-green-200 py-1 px-2 rounded-full text-sm">
                Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-300">No repositories found.</p>
      )}
    </div>
  );
};

export default ProfileGithub;
