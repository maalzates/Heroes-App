import React from 'react'
import { Navigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext);


    return user.logged
        ? <Navigate to="/" />
        :  children
}
