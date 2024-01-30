import { useEffect, useState } from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './App.css';
import Login from './components/login/login.js'
import SignUp from './components/signup/signup.js';
import MakePoll from './components/makePoll/makePoll.js'
import ViewPoll from './components/viewPoll/viewPoll.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/makePoll",
        element: <MakePoll/>
    },
    {
        path: "/viewPoll",
        element: <ViewPoll/>
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
