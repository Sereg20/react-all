import React, { useState } from 'react';
import Header from "../components/Header/Header";
import LogginForm from "../components/LogginForm/LogginForm";
import { Outlet } from "react-router-dom";
import Transition from 'react-transition-group/cjs/Transition';
import BusyIndicator from '../components/UI/BusyIndicator/BusyIndicator';
import { useSelector } from 'react-redux';

const Root = () => {
    const [isLoginOpened, setIsLoginOpened] = useState(false);
    const busy = useSelector(state => state.busy.busy);


    const openLoginForm = () => {
        setIsLoginOpened(true);
    };

    const closeLoginForm = () => {
        setIsLoginOpened(false);
    };

    return (
        <>
            { busy && <BusyIndicator/> }
            <Header openLoginForm={openLoginForm}/>
            <Transition 
                in={isLoginOpened} 
                timeout={300} 
                mountOnEnter 
                unmountOnExit>
                {state => (
                    <LogginForm isOpened={state} closeLoginForm={closeLoginForm}/>
                )}
            </Transition>
            <Outlet />
        </>
    );
};

export default Root;