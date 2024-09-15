import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: {
    school,
    degree,
    field_of_study,
    current,
    to_date,
    from_date,
    description
  }
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4 text-white">
      <h3 className="text-xl font-semibold  mb-2">{school}</h3>
      <p className=" mb-2">
        <Moment format="YYYY/MM/DD">{from_date}</Moment> -{" "}
        {!to_date ? "Now" : <Moment format="YYYY/MM/DD">{to_date}</Moment>}
      </p>
      <p className=" mb-2">
        <strong className="font-medium">Degree: </strong>
        {degree}
      </p>
      <p className=" mb-2">
        <strong className="font-medium">Field Of Study: </strong>
        {field_of_study}
      </p>
      {description && (
        <p className="">
          <strong className="font-medium">Description: </strong>
          {description}
        </p>
      )}
    </div>
  );
};

export default ProfileEducation;
