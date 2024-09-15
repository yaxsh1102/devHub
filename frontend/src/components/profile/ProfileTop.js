import React from "react";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    twitter,
    facebook,
    youtube,
    instagram,
    linkedin,
    user: { name, avatar }
  }
}) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <img className="w-32 h-32 rounded-full border-4 border-white mb-4" src={avatar} alt="Profile Avatar" />
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-xl mb-2">
          {status}
          {company && <span className="ml-1 text-gray-300"> at {company}</span>}
        </p>
        {location && <p className="text-lg text-gray-400 mb-4">{location}</p>}
        <div className="flex space-x-4">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300">
              <i className="fas fa-globe fa-2x"></i>
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition duration-300">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600 transition duration-300">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition duration-300">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition duration-300">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
