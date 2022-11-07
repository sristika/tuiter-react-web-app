import React from 'react';
import { useSelector } from 'react-redux';
import TuitItem from './Tuititem';

const TuitList = () => {
  const tuitArray = useSelector((state) => state.tuits);
  return (
    <ul className="list-group wd-middle-content">
      {tuitArray.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};

export default TuitList;
