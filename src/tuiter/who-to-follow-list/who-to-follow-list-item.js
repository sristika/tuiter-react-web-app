import React from 'react';
const WhoToFollowListItem = ({
  who = {
    userName: 'NASA',
    handle: 'NASA',
    avatarIcon:
      'https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg',
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row align-items-md-center justify-content-md-between">
        <div className="col-lg-2 wd-avatar-container p-0">
          <img
            className="w-100 h-100 rounded-circle wd-avatar-image"
            src={who.avatarIcon}
          />
        </div>
        <div className="col-6 col-xl-7 ps-1 pe-0">
          <div className="fw-bolder">
            {who.userName} <i className="fas fa-check-circle"></i>
          </div>
          <p className="text-secondary mb-0">{who.handle}</p>
        </div>
        <div className="col-xl-3 px-1 wd-follow-btn">
          <button className="btn bg-white fw-bold btn-sm mt-1 rounded-pill">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
