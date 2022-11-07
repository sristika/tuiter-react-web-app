import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../Profile/profile-reducer';
import './index.css';

const EditProfile = () => {
  const defaultProfile = useSelector((state) => state.profile);
  const [profile, setProfile] = useState(defaultProfile);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [dateOfBirth, setDob] = useState(profile.dateOfBirth);

  function onFirstNameChange(e) {
    const firstName = e.target.value;
    setFirstName(firstName);
    const newProfile = {
      ...profile,
      firstName: firstName,
    };
    setProfile(newProfile);
  }

  function onLastNameChange(e) {
    const lastName = e.target.value;
    setLastName(lastName);
    const newProfile = {
      ...profile,
      lastName: lastName,
    };
    setProfile(newProfile);
  }

  function onBioChange(e) {
    const bio = e.target.value;
    setBio(bio);
    const newProfile = {
      ...profile,
      bio: bio,
    };
    setProfile(newProfile);
  }

  function onLocationChange(e) {
    const location = e.target.value;
    setLocation(location);
    const newProfile = {
      ...profile,
      location: location,
    };
    setProfile(newProfile);
  }

  function onWebsiteChange(e) {
    const website = e.target.value;
    setWebsite(website);
    const newProfile = {
      ...profile,
      website: website,
    };
    setProfile(newProfile);
  }

  function handleDob(e) {
    const dob = e.target.value;
    setDob(dob);
    const newProfile = {
      ...profile,
      dateOfBirth: dob,
    };
    setProfile(newProfile);
  }

  const dispatch = useDispatch();
  const updateHandler = (event) => {
    dispatch(
      updateProfile({
        ...profile,
        firstName: firstName,
        lastName: lastName,
        bio: bio,
        location: location,
        website: website,
      })
    );
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../profile`;
    navigate(path);
  };
  return (
    <>
      <div className="wd-edit-profile">
        <div className="wd-top py-3 position-relative d-flex">
          <button className="btn col-1 p-0" onClick={() => routeChange()}>
            <i className="bi bi-x-lg"></i>
          </button>
          <h4 className="m-0">{profile.firstName}</h4>
          <button
            onClick={(event) => {
              updateHandler(event);
              routeChange();
            }}
            class="position-absolute wd-edit btn bg-white fw-bold btn-sm mt-1 rounded-pill"
          >
            Save
          </button>
        </div>
        <img className="w-100" src={profile.bannerPicture} />
        <div className="m-4 position-relative">
          <div className="wd-profile-pic position-absolute">
            <img
              className="w-100 h-100 rounded-circle wd-avatar-image"
              src={profile.profilePicture}
            />
          </div>
        </div>
        <div className="wd-edit-forms">
          <form>
            <div class="form-floating mb-3 mt-3">
              <input
                class="form-control"
                id="firstName"
                name="text"
                type="text"
                placeholder="firstName"
                value={firstName}
                onChange={(event) => {
                  onFirstNameChange(event);
                }}
              />
              <label for="name">First Name</label>
            </div>
            <div class="form-floating mb-3 mt-3">
              <input
                class="form-control"
                id="lastName"
                name="text"
                type="text"
                placeholder="lastName"
                value={lastName}
                onChange={(event) => {
                  onLastNameChange(event);
                }}
              />
              <label for="name">Name</label>
            </div>
            <div class="form-floating mb-3 mt-3">
              <textarea
                class="form-control wd-editProfile-textarea"
                id="bio"
                name="text"
                placeholder="Bio goes here"
                value={bio}
                onChange={(event) => {
                  onBioChange(event);
                }}
              ></textarea>
              <label for="bio">Bio</label>
            </div>
            <div class="form-floating mb-3 mt-3">
              <input
                class="form-control"
                id="location"
                name="text"
                type="text"
                placeholder="location"
                value={location}
                onChange={(event) => {
                  onLocationChange(event);
                }}
              />
              <label for="location">Location</label>
            </div>
            <div class="form-floating mb-3 mt-3">
              <input
                class="form-control"
                id="website"
                name="text"
                type="text"
                placeholder="website"
                value={website}
                onChange={(event) => {
                  onWebsiteChange(event);
                }}
              />
              <label for="website">Website</label>
            </div>
            <div className="form-group">
              <label htmlFor="dob" className="wd-gray-color">
                Birth Date
              </label>
              <input
                type="date"
                id="dob"
                onChange={(event) => handleDob(event)}
                value={new Date(dateOfBirth).toISOString().split('T')[0]}
                className="form-control"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
