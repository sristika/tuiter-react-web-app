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
        <h2 className="wd-bookmark-author">{post.author} </h2>
        <i className="fas fa-check-circle"></i>
        <span className="wd-bookmark-author-handle">{post.handle} - </span>
        <span className="wd-bookmark-author-date">{post.time}</span>
        <a href="#" className="wd-readmorebookmarks-dots">
          <img src="https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_more-27-512.png" />
        </a>
        <p className="mt-0">{post.comment}</p>
        <div className="wd-bookmark-box-content">
          <img
            src={post.image}
            className={`wd-border-bottom-1px ${
              post.contentheading && post.content ? '' : 'wd-rounded-corners'
            }`}
          />

          <div className="wd-box-writing">
            <h2 className="wd-box-head">{post.contentheading}</h2>
            <p className="wd-box-content">{post.content}</p>
          </div>
        </div>
        <div className="wd-icon-footer">
          <a href="#" className="wd-icon-container">
            <img
              width="15px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0I9t7Pbj6KaCPtNJaBoi-0VXkl1wKDjjbLQ&usqp=CAU"
            />
            <span>{post.commentsNums}</span>
          </a>
          <a href="#" className="wd-icon-container">
            <img
              width="15px"
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"
            />
            <span>{post.shareNums}</span>
          </a>
          <a href="#" className="wd-icon-container active">
            <img
              src="https://i.pinimg.com/736x/df/01/80/df01803b2f9f76d3e662e105f773f7a1.jpg"
              width="15px"
            />
            <span>{post.likeNums}</span>
          </a>
          <a href="#" className="wd-icon-container">
            <img
              width="15px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-ImqcLMrbbXcZpkBlx0rbNTrzKd8WIpmx8SSCCo&s"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
