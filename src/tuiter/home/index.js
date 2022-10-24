import React from 'react';
import PostList from '../PostList';
import './index.css';

const HomeScreen = () => {
  return (
    <>
      <div className="wd-posts">
        <PostList />
      </div>
    </>
  );
};

export default HomeScreen;
