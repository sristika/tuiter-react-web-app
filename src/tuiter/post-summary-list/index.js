import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findTuitsThunk } from '../../services/tuits-thunks';
import PostSummaryItem from './post-summary-item';

const PostSummaryList = () => {
  // const postsArray = useSelector((state) => state.tuits);
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <ul className="list-group wd-middle-content">
      {tuits.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default PostSummaryList;
