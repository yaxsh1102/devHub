import React from "react";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: {
    company,
    title,
    location,
    current,
    to_date,
    from_date,
    description
  }
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 text-white">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{company}</h3>
      <p className=" mb-2">
        <Moment format="YYYY/MM/DD">{from_date}</Moment> -{" "}
        {!to_date ? "Present" : <Moment format="YYYY/MM/DD">{to_date}</Moment>}
      </p>
      <p className=" mb-2">
        <strong className="font-medium">Position: </strong>
        {title}
      </p>
      {location && (
        <p className=" mb-2">
          <strong className="font-medium">Location: </strong>
          {location}
        </p>
      )}
      {description && (
        <p className="">
          <strong className="font-medium">Description: </strong>
          {description}
        </p>
      )}
    </div>
  );
};

export default ProfileExperience;
