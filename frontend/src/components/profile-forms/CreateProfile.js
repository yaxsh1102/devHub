import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ history }) => {
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
    dispatch(createProfile(formData, history));
  };

  return (
    <Fragment>
      <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 pt-16">
        <div className="container mx-auto max-w-lg">
          <h1 className="text-4xl font-bold mb-6">Create Your Profile</h1>
          <p className="text-lg mb-4">
            <i className="fas fa-user"></i> Let's get some information to make your profile stand out
          </p>
          <small className="text-gray-400 mb-4">* = required field</small>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="form-group">
              <select
                name="status"
                value={status}
                onChange={onChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              >
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
              <small className="form-text text-gray-400">
                Give us an idea of where you are at in your career
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Company"
                name="company"
                value={company}
                onChange={onChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              />
              <small className="form-text text-gray-400">
                Could be your own company or one you work for
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Website"
                name="website"
                value={website}
                onChange={onChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              />
              <small className="form-text text-gray-400">
                Could be your own or a company website
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={location}
                onChange={onChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              />
              <small className="form-text text-gray-400">
                City & state suggested (eg. Boston, MA)
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Skills"
                name="skills"
                value={skills}
                onChange={onChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              />
              <small className="form-text text-gray-400">
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Github Username"
                name="githubusername"
                value={githubusername}
                onChange={onChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
              />
              <small className="form-text text-gray-400">
                If you want your latest repos and a Github link, include your username
              </small>
            </div>
            <div className="form-group">
              <textarea
                placeholder="* A short bio of yourself"
                name="bio"
                value={bio}
                onChange={onChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 h-32"
              ></textarea>
              <small className="form-text text-gray-400">
                Tell us a little about yourself
              </small>
            </div>

            <div className="my-4">
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type="button"
                className="w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
              >
                Add Social Network Links
              </button>
              <span className="text-gray-400">Optional</span>
            </div>

            {displaySocialInputs && (
              <Fragment>
                <div className="form-group social-input flex items-center mb-4">
                  <i className="fab fa-twitter fa-2x mr-2"></i>
                  <input
                    type="text"
                    placeholder="Twitter URL"
                    name="twitter"
                    value={twitter}
                    onChange={onChange}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
                  />
                </div>

                <div className="form-group social-input flex items-center mb-4">
                  <i className="fab fa-facebook fa-2x mr-2"></i>
                  <input
                    type="text"
                    placeholder="Facebook URL"
                    name="facebook"
                    value={facebook}
                    onChange={onChange}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
                  />
                </div>

                <div className="form-group social-input flex items-center mb-4">
                  <i className="fab fa-youtube fa-2x mr-2"></i>
                  <input
                    type="text"
                    placeholder="YouTube URL"
                    name="youtube"
                    value={youtube}
                    onChange={onChange}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
                  />
                </div>

                <div className="form-group social-input flex items-center mb-4">
                  <i className="fab fa-linkedin fa-2x mr-2"></i>
                  <input
                    type="text"
                    placeholder="Linkedin URL"
                    name="linkedin"
                    value={linkedin}
                    onChange={onChange}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
                  />
                </div>

                <div className="form-group social-input flex items-center mb-4">
                  <i className="fab fa-instagram fa-2x mr-2"></i>
                  <input
                    type="text"
                    placeholder="Instagram URL"
                    name="instagram"
                    value={instagram}
                    onChange={onChange}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4"
                  />
                </div>
              </Fragment>
            )}
            <input
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              value="Submit"
            />
            <a
              className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300 block text-center"
              href="/dashboard"
            >
              Go Back
            </a>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(CreateProfile);
