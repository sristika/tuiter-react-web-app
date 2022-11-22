import React from 'react';
import TuitStats from '../TuitStats';
import { useDispatch } from 'react-redux';
import { deleteTuitThunk } from '../../../services/tuits-thunks';

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li key={tuit._id} className="list-group-item">
      <div className="wd-bookmark p-0">
        <img className="wd-bookmark-avatar rounded-circle" src={tuit.image} />
        <div className="wd-bookmark-right">
          <h2 className="wd-bookmark-author">{tuit.username} </h2>
          <i className="fas fa-check-circle"></i>
          <span className="wd-bookmark-author-handle">{tuit.handle}</span>
          <span className="wd-bookmark-author-date"> -{tuit.time}</span>
          <i
            className="wd-readmorebookmarks-dots bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          <p className="mt-0">{tuit.tuit}</p>
          <TuitStats key={tuit._id} tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
