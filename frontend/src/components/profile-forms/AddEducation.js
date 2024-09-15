import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addEducation } from "../../actions/profile";

const AddEducation = ({ history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    field_of_study: "",
    from_date: "",
    to_date: "",
    current: false,
    description: ""
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const dispatch = useDispatch();

  const {
    school,
    degree,
    field_of_study,
    from_date,
    to_date,
    current,
    description
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addEducation(formData, history));
  };

  return (
    <Fragment>
      <h1 className="text-3xl font-semibold text-white mb-4 pt-20">Add Your Education</h1>
      <p className="text-gray-400 mb-4">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc. that you have attended
      </p>
      <small className="text-gray-500 mb-4">* = required field</small>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="Field Of Study"
            name="field_of_study"
            value={field_of_study}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
        </div>
        <div className="form-group mb-4">
          <h4 className="text-gray-300">From Date</h4>
          <input
            type="date"
            name="from_date"
            value={from_date}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
        </div>
        <div className="form-group mb-4">
          <p className="text-gray-300">
            <input
              type="checkbox"
              name="current"
              checked={current}
              onChange={e => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              className="mr-2"
            />
            Current School or Bootcamp
          </p>
        </div>
        <div className="form-group mb-4">
          <h4 className="text-gray-300">To Date</h4>
          <input
            type="date"
            name="to_date"
            value={to_date}
            onChange={onChange}
            disabled={toDateDisabled ? "disabled" : ""}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
        </div>
        <div className="form-group mb-4">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <input
            type="submit"
            value="Submit"
            className="bg-gray-700 text-white p-2 rounded-lg shadow-sm hover:bg-gray-600 transition duration-300"
          />
          <Link
            className="bg-gray-600 text-white p-2 rounded-lg shadow-sm hover:bg-gray-500 transition duration-300"
            to="/dashboard"
          >
            Go Back
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(AddEducation);
