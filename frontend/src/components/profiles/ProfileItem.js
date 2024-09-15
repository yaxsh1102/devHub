import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  const skill_list = skills.split(",");

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-400 text-lg">
            {status} {company && <span> at {company}</span>}
          </p>
          <p className="text-gray-400 my-2">{location && <span>{location}</span>}</p>
          <Link
            to={`/profile/${id}`}
            className="inline-block bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            View Profile
          </Link>
        </div>
      </div>
      <ul className="list-disc pl-5 mt-4">
        {skill_list.slice(0, 4).map((skill, i) => (
          <li className="text-gray-300 mb-2 flex items-center" key={i}>
            <i className="fas fa-check text-green-400 mr-2"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
