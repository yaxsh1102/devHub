import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({ history }) => {
  const profile = useSelector(state => state.profile.profile);

  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentProfile();
    setFormData({ ...profile });
  }, [profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createProfile(formData, history, true));
  };

  return (
    <Fragment>
      <h1 className="text-3xl font-semibold text-white mb-4 pt-20">Create Your Profile</h1>
      <p className="text-gray-400 mb-4">
        <i className="fas fa-user"></i> Let's get some information to make your profile stand out
      </p>
      <small className="text-gray-500 mb-4">* = required field</small>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <select name="status" value={status} onChange={onChange} className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full">
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="text-gray-500">Give us an idea of where you are at in your career</small>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
          <small className="text-gray-500">Could be your own company or one you work for</small>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
          <small className="text-gray-500">Could be your own or a company website</small>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
          <small className="text-gray-500">City & state suggested (eg. Boston, MA)</small>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
          <small className="text-gray-500">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          />
          <small className="text-gray-500">If you want your latest repos and a Github link to be included</small>
        </div>
        <div className="form-group mb-4">
          <textarea
            name="bio"
            cols="30"
            rows="5"
            placeholder="A short bio of yourself"
            value={bio}
            onChange={onChange}
            className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
          ></textarea>
          <small className="text-gray-500">Tell us a little about yourself</small>
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            className="btn bg-gray-700 text-white p-2 rounded-lg"
          >
            Add Social Network Links
          </button>
          <span className="text-gray-500 pl-2">Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className="form-group mb-4">
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
                className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
              />
              <small className="text-gray-500">Your Twitter URL</small>
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
                className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
              />
              <small className="text-gray-500">Your Facebook URL</small>
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                placeholder="LinkedIn URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
                className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
              />
              <small className="text-gray-500">Your LinkedIn URL</small>
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
                className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
              />
              <small className="text-gray-500">Your YouTube URL</small>
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
                className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full"
              />
              <small className="text-gray-500">Your Instagram URL</small>
            </div>
          </Fragment>
        )}
        <div className="flex gap-x-2 mt-4">
          <input
            type="submit"
            value="Submit"
            className="bg-gray-700 text-white p-2 rounded-lg shadow-sm hover:bg-gray-600 transition duration-300 w-full md:w-auto"
          />
          <Link
            className="bg-gray-600 text-white p-2 rounded-lg shadow-sm hover:bg-gray-500 transition duration-300 ml-4 w-full md:w-auto block text-center"
            to="/dashboard"
          >
            Go Back
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default withRouter(EditProfile);
