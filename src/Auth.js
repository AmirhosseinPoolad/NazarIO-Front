import { useEffect, useState, createContext, useContext } from 'react';

const authContext = createContext(null)

export const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const value = window.localStorage.getItem(keyName);
        if (value) {
          return JSON.parse(value);
        } else {
          window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } catch (err) {
        return defaultValue;
      }
    });
    const setValue = (newValue) => {
      try {
        window.localStorage.setItem(keyName, JSON.stringify(newValue));
      } catch (err) {}
      setStoredValue(newValue);
    };
    return [storedValue, setValue];
  };



//TODO Call API
const Auth = () => 123;

const AuthProvider = ({ children }) => {

    const [token, setToken] = useLocalStorage("token", null);
    const handleLogin = async () => {
        const newToken = await Auth();
        setToken(newToken);
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