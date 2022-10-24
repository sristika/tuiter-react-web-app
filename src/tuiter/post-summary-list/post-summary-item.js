import React from 'react';
const PostSummaryItem = ({
  post = {
    topic: 'Space',
    userName: 'SpaceX',
    time: '2h',
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png',
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row pb-2">
        <div className="col-10">
          <span className="d-block text-secondary">{post.topic}</span>
          <span className="fw-bolder d-inline">{post.userName}</span>
          <i className="fas fa-check-circle"></i>
          <span className="text-secondary">- {post.time}</span>
          <p className="fw-bolder mb-0">{post.title}</p>
        </div>
        <div className="col-2 d-flex align-items-center">
          <img className="rounded wd-avatar-image w-100" src={post.image} />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
