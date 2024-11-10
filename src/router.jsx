import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import CallTheDoctor from './components/CallTheDoctor/CallTheDoctor';
import Information from './components/information/Information';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import RegistrationForExamination from './components/RegistrationForExamination/RegistrationForExamination';
import UserPage from './components/UserPage/UserPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/login',
        element: <Login />,
    },

    {
        path: '/Register',
        element: <Register />,
    },

    {
        path: '/Information',
        element: <Information />,
    },

    {
        path: '/UserPage',
        element: <UserPage />,
    },

    {
        path: '/RegistrationForExamination',
        element: <RegistrationForExamination />,
    },

    {
        path: '/CallTheDoctor',
        element: <CallTheDoctor />,
    },
]);
