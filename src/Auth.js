import { useEffect, useState, createContext, useContext } from 'react';

const authContext = createContext(null)

//TODO Call API
const Auth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const handleLogin = async () => {
        const token = await Auth();
        setToken(token);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

const useAuth = () => {
    return useContext(authContext);
};

export { Auth, AuthProvider, useAuth}