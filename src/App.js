import { useEffect, useState, createContext } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    NavLink,
    Router,
    Routes,
    Route,
    BrowserRouter,
    Navigate,
} from "react-router-dom";

import './App.css';
import Login from './components/login/login.js'
import SignUp from './components/signup/signup.js';
import MakePoll from './components/makePoll/makePoll.js'
import ViewPoll from './components/viewPoll/viewPoll.js';
import { AuthProvider, Auth, useAuth } from './Auth.js'


const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();

    //TODO: Fix redirection when auth has happened
    if (!token) {
       return <Navigate to="/" replace />;
    }

    return children;
};

const Navigation = () => {
    const { token } = useAuth()
    const { onLogout } = useAuth()
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>

            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </nav>
    );
};

function App() {
    const [token, setToken] = useState(null);

    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/makePoll" element={
                            <ProtectedRoute><MakePoll /></ProtectedRoute>
                            }
                        />
                        <Route path="/viewPoll" element={<ViewPoll />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
