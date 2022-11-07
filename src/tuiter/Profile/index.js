import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <div className="wd-profile">
        <h3 className="m-0">{profile.firstName}</h3>
        <span className="text-secondary d-inline-block mb-1">
          {profile.tweetCount} Tweets
        </span>
        <img className="w-100" src={profile.bannerPicture} />
        <div className="m-4 position-relative">
          <div className="wd-profile-pic position-absolute">
            <img
              className="w-100 h-100 rounded-circle wd-avatar-image"
              src={profile.profilePicture}
            />
          </div>
          <Link to="../edit-profile">
            <button class="wd-edit btn bg-white fw-bold btn-sm mt-1 rounded-pill">
              Edit profile
            </button>
          </Link>
        </div>
        <div className="wd-profile-content">
          <h3 className="m-0">{profile.firstName}</h3>
          <span className="text-secondary">{profile.handle}</span>
          <p>{profile.bio}</p>
          <div className="wd-profile-details d-flex">
            <div className="wd-location">
              <img src="https://www.pngitem.com/pimgs/m/94-941550_location-icon-png-grey-transparent-png-location-icon.png" />
              {profile.location}
            </div>
            <div className="wd-dob">
              <img src="data:image/png;base64,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" />
              Born {profile.dateOfBirth}{' '}
            </div>
            <div className="wd-joined">
              {' '}
              <img src="https://www.pngitem.com/pimgs/m/111-1111077_icons-transparent-calendar-calendar-icon-grey-png-png.png" />{' '}
              Joined {profile.dateJoined}
            </div>
          </div>
          <div className="wd-follow-details d-flex">
            <div class="wd-following">
              <span className="fw-bold d-inline-block me-2">
                {profile.followingCount}
              </span>{' '}
              <span className="text-secondary">Following</span>
            </div>
            <div class="wd-followers">
              <span className="fw-bold d-inline-block me-2">
                {profile.followersCount}
              </span>
              <span className="text-secondary">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
