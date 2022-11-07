import React from 'react';
import TuitList from '../tuits/TuitsList';
import './index.css';
import WhatsHappening from './whats-happening';

const HomeScreen = () => {
  return (
    <>
      <h3>Home</h3>
      <WhatsHappening />
      <div className="wd-posts">
        <TuitList />
      </div>
    </>
  );
};

export default HomeScreen;
