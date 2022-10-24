import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const active = paths[2];
  return (
    <div className="list-group">
      <Link
        to="/tuiter/home"
        className={`list-group-item ${active === 'home' ? 'active' : ''}`}
        href="./HomeScreen/index.html"
      >
        Home
      </Link>

      <Link
        to="/tuiter/explore"
        className={`list-group-item ${active === 'explore' ? 'active' : ''}`}
        href="./explore/index.html"
      >
        Explore
      </Link>

      <Link
        className={`list-group-item ${
          active === 'notifications' ? 'active' : ''
        }`}
        to="/"
      >
        Notifications
      </Link>

      <Link
        to="/"
        className={`list-group-item ${active === 'messages' ? 'active' : ''}`}
      >
        Messages
      </Link>

      <Link
        to="/"
        className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}
        href="./bookmarks/index.html"
      >
        Bookmarks
      </Link>

      <Link
        to="/"
        className={`list-group-item ${active === 'lists' ? 'active' : ''}`}
        href="lists.html"
      >
        Lists
      </Link>

      <Link
        to="/"
        className={`list-group-item ${active === 'profile' ? 'active' : ''}`}
        href="profile.html"
      >
        Profile
      </Link>

      <Link
        to="/"
        className={`list-group-item ${active === 'tuit' ? 'active' : ''}`}
        href="tuit.html"
      >
        Tuit
      </Link>

      <Link
        to="/"
        className={`list-group-item ${active === 'reply' ? 'active' : ''}`}
        href="reply.html"
      >
        Reply
      </Link>
    </div>
  );
};
export default NavigationSidebar;
