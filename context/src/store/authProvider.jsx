import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };
    
    const logout = () => {
        setIsLoggedIn(false);
    };

    const value = {
        isLoggedIn,
        logout: logout,
        login: login
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;