import React from 'react';
import ExploreComponent from './explore';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import HomeScreen from './home';
import Profile from './Profile';
import tuitsReducer from './tuits/tuits-reducer';
import { Routes, Route } from 'react-router';
import whoReducer from './reducers/who-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import profileReducer from './Profile/profile-reducer';
import EditProfile from './Edit-profile';

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitsData: tuitsReducer,
    profile: profileReducer,
  },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div
          className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{ position: 'relative' }}
        >
          <Routes>
            <Route index element={<HomeScreen />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="explore" element={<ExploreComponent />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
