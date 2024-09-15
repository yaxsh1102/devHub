import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";
import { getProfileById } from "../../actions/profile";

const Profile = props => {
  const {
    profile: { profile, loading },
    auth
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileById(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="max-w-7xl mx-auto p-6 pt-20">
            <div className="flex justify-between items-center mb-6">
              <Link
                to="/profiles"
                className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
              >
                Back To Profiles
              </Link>
              {auth.isAuthenticated &&
                !auth.loading &&
                auth.user.id === profile.user.id && (
                  <Link
                    to="/edit-profile"
                    className="bg-gray-900 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                  >
                    Edit Profile
                  </Link>
                )}
            </div>

            <div className="profile-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-2">
                <ProfileTop profile={profile} />
              </div>
              <ProfileAbout profile={profile} />
              
              <div className="profile-exp bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
                {profile.experience.length > 0 ? (
                  profile.experience.map(experience => (
                    <ProfileExperience
                      key={experience.id}
                      experience={experience}
                    />
                  ))
                ) : (
                  <p className="text-gray-400">No Experience credentials</p>
                )}
              </div>

              <div className="profile-edu bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
                {profile.education.length > 0 ? (
                  profile.education.map(education => (
                    <ProfileEducation
                      key={education.id}
                      education={education}
                    />
                  ))
                ) : (
                  <p className="text-gray-400">No Education credentials</p>
                )}
              </div>

              {profile.githubusername && (
                <ProfileGithub username={profile.githubusername} />
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
