import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  // Get the session user from the Redux store
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/">Home</NavLink>
      </div>

      {isLoaded && (
        <div className="nav-right">
          {/* Show "Create a New Spot" link only if the user is logged in */}
          {sessionUser && (
            <NavLink to="/spots/new" className="create-spot-link">
              Create a New Spot
            </NavLink>
          )}
          <div className="profile-button">
            <ProfileButton user={sessionUser} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
