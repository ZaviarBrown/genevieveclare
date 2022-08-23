import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { RootState } from '../../store';
import { User } from '../../CustomTypings';

interface Props {
  isLoaded: boolean;
  user: User | null;
}

const Navigation = ({ isLoaded, user }: Props) => {
  return (
    <div className="NavCont">
      {isLoaded && (
        <NavLink exact to="/">
          Home
        </NavLink>
      )}

      {isLoaded && !user && (
        <>
          <NavLink exact to="/login">
            Log In
          </NavLink>
          <NavLink exact to="/signup">
            Sign Up
          </NavLink>
        </>
      )}
      {isLoaded && user && <ProfileButton user={user} />}
    </div>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Navigation
);
