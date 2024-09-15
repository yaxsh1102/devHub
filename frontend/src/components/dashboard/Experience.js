import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();

  const experiences = experience.map(exp => (
    <tr key={exp.id} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
      <td className="px-4 py-3">{exp.company}</td>
      <td className="px-4 py-3 hidden md:table-cell">{exp.title}</td>
      <td className="px-4 py-3 hidden md:table-cell">
        <Moment format="YYYY/MM/DD">{exp.from_date}</Moment> -{" "}
        {exp.to_date == null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to_date}</Moment>
        )}
      </td>
      <td className="px-4 py-3">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          onClick={() => dispatch(deleteExperience(exp.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Experience Credentials</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3 hidden md:table-cell">Title</th>
              <th className="px-4 py-3 hidden md:table-cell">Years</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {experiences}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;