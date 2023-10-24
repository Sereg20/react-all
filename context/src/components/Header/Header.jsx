import React, { useContext } from "react";
import cl from './Header.module.css';
import LogginButton from "../UI/LogginButton/LogginButton";
import AuthContext from "../../store/auth-context";

const Header = ({openLoginForm}) => {
    const ctx = useContext(AuthContext);
    const isLoggedIn = ctx.isLoggedIn;

    const onSignInClick = () => {
        openLoginForm();
    };

    const onSignOutClick = () => {
        ctx.logout();
    };

    return (
        <div className={cl.header}>
            sStore
            { !isLoggedIn && <LogginButton onClick={onSignInClick}>Sign in</LogginButton> }
            { isLoggedIn && <LogginButton onClick={onSignOutClick}>Sign out</LogginButton> }
        </div>
    );
};
export default Header;