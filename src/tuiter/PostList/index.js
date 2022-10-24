import React from 'react';
import posts from './posts.json';
import PostItem from './PostItem';

const PostList = () => {
  return (
    <div className="list-group wd-middle-content wd-side-borders">
      {posts.map((post) => {
        return <PostItem key={post._id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
