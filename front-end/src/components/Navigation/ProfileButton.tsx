import { useState, useEffect } from "react";
import { User } from "../../CustomTypings";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import { useAppDispatch } from "../../store/index";

interface Props {
    user: User | null;
}

const ProfileButton = ({ user }: Props) => {
    const dispatch = useAppDispatch();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <button onClick={() => setShowMenu(!showMenu)}>User Menu</button>
            {showMenu && user && (
                <ul className="ProfileDropdown">
                    <li>{user.email}</li>
                    <li>
                        <button
                            onClick={() => {
                                dispatch(sessionActions.logout());
                                window.location.replace("/home");
                            }}
                        >
                            Log Out
                        </button>
                    </li>
                </ul>
            )}
        </>
    );
};

export default ProfileButton;
