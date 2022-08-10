import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../CustomTypings";
import * as sessionActions from "../../store/session";
import "./Navigation.css";

interface Props {
  user: User | null;
}

const ProfileButton = ({ user }: Props) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button onClick={() => setShowMenu(!showMenu)}>
        User Menu
      </button>
      {showMenu && user && (
        <ul className="ProfileDropdown">
          <li>{user.email}</li>
          <li>
            <button onClick={() => dispatch(sessionActions.logout())}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileButton;
