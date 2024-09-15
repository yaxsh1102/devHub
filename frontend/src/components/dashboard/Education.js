import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education }) => {
  const dispatch = useDispatch();

  const educations = education && education.map(edu => (
    <tr key={edu.id} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
      <td className="px-4 py-3">{edu.school}</td>
      <td className="px-4 py-3 hidden md:table-cell">{edu.degree}</td>
      <td className="px-4 py-3 hidden md:table-cell">
        <Moment format="YYYY/MM/DD">{edu.from_date}</Moment> -{" "}
        {edu.to_date == null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{edu.to_date}</Moment>
        )}
      </td>
      <td className="px-4 py-3">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          onClick={() => dispatch(deleteEducation(edu.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-bold text-white mb-4">Education Credentials</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th className="px-4 py-3">School</th>
              <th className="px-4 py-3 hidden md:table-cell">Degree</th>
              <th className="px-4 py-3 hidden md:table-cell">Years</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {educations}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;