import React from 'react';

const PostItem = ({
  post = {
    avatarImg: '../images/profile-picture.jpeg',
    author: 'Robert Pattinson',
    handle: '@robert-zubrin',
    time: '23h',
    comment: 'Amazing show about xyz',
    contentheading: 'Lorem ipsum dolor sit amet Mauris interdum...',
    content:
      'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
    image: '../images/pexels-fox-1595391.jpg',
    commentsNums: '4.2k',
    shareNums: '3.4k',
    likeNums: '5k',
  },
}) => {
  return (
    <div className="wd-bookmark wd-border-bottom-1px">
      <img className="wd-bookmark-avatar rounded-circle" src={post.avatarImg} />
      <div className="wd-bookmark-right">
        <h2 className="wd-bookmark-author">{post.author}</h2>
        <i className="fas fa-check-circle"></i>
        <span className="wd-bookmark-author-handle">{post.handle} - </span>
        <span className="wd-bookmark-author-date">{post.time}</span>
        <a href="#" className="wd-readmorebookmarks-dots">
          <img src="../explore/icons/menu (1).png" />
        </a>
        <p className="mt-0">{post.comment}</p>
        <div className="wd-bookmark-box-content">
          <img
            src={post.image}
            className={`wd-border-bottom-1px ${
              post.contentheading && post.content ? '' : 'wd-rounded-corners'
            }`}
          />
          {post.contentheading && post.content
            ? `            <div className="wd-box-writing">
            <h2 className="wd-box-head">
            {post.contentheading}
            </h2>
            <p className="wd-box-content">
            {post.content}
            </p>
          </div>`
            : ``}
        </div>
        <div className="wd-icon-footer">
          <a href="#" className="wd-icon-container">
            <img width="15px" src="../images/message-2-xxl.png" />
            <span>{post.commentsNums}</span>
          </a>
          <a href="#" className="wd-icon-container">
            <img width="15px" src="../images/refresh-xxl.png" />
            <span>{post.shareNums}</span>
          </a>
          <a href="#" className="wd-icon-container active">
            <img src="../images/icons8-heart-48.png" width="15px" />
            <span>{post.likeNums}</span>
          </a>
          <a href="#" className="wd-icon-container">
            <img width="15px" src="../images/upload-3-xxl.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
