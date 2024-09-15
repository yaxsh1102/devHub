import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
      {bio && (
        <Fragment>
          <h2 className="text-2xl font-semibold text-white mb-4">
            {name.trim().split(" ")[0]}'s Bio
          </h2>
          <p className="text-gray-300 mb-4">{bio}</p>
        </Fragment>
      )}
      <div className="border-t border-gray-600 my-4"></div>
      <h2 className="text-2xl font-semibold text-white mb-4">Skill Set</h2>
      <div className="flex flex-wrap gap-4">
        {skills
          .trim()
          .split(",")
          .map((skill, i) => (
            <div
              className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              key={i}
            >
              <i className="fa fa-check text-green-400"></i>
              <span>{skill.trim()}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileAbout;
