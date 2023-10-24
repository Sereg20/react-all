import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import cl from './Header.module.css';
import Button from "../UI/button/Button";

const Header = () => {

    const onSignInClick = () => {

    };

    return (
        <div className={cl.header}>
            sStore
            <Link to="/auth"><Button mode='light' onClick={onSignInClick}>Sign in</Button></Link>
        </div>
    );
};
export default Header;