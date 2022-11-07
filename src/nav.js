import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="wd-labs-nav">
      <Link to="/*">Labs</Link> |<Link to="/">Assignment 6</Link> |
      <Link to="/labs/a7">Assignment 7</Link> |<Link to="/tuiter">Tuiter</Link>
    </div>
  );
}

export default Nav;
