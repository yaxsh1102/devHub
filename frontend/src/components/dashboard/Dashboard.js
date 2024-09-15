import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  const { profile, loading } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return loading && profile == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-16">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg mb-6">
            <i className="fas fa-user"></i> Welcome {user && user.name}
          </p>
          {profile !== null ? (
            <Fragment>
              <DashboardActions />
              <Experience experience={profile.experience} />
              <Education education={profile.education} />
              <div className="my-4">
               
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <p className="text-gray-400 mb-4">
                You have not yet setup a profile, please add some info
              </p>
              <Link to="/create-profile" className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Create Profile
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
