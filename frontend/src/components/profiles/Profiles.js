import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = () => {
  const { profiles, loading } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="text-4xl font-bold text-white  mb-6 pt-20">Developers</h1>
          <p className="text-xl text-white mb-8">
            <i className="fab fa-connectdevelop text-white mr-2"></i>
            Browse and connect with developers
          </p>
          <div className="flex flex-col gap-6">
            {profiles.length > 0 ? ( 
              profiles.map(profile => (
                <ProfileItem key={profile.id} profile={profile} />
              ))
            ) : (
              <h4 className="text-gray-600">No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;
