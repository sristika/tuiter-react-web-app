import React from 'react';
import post from './posts.json';
import PostItem from './PostItem.js';

const PostList = () => {
  return (
    <div className="list-group wd-middle-content wd-side-borders">
      {post.map((post) => {
        <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
